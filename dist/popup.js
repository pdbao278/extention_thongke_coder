/**
 * popup.js - Quản lý tương tác và xuất dữ liệu trên giao diện Extension
 * Tách riêng 2 chức năng:
 *  1. Lọc và Tải Excel Bảng Xếp Hạng (không cộng dồn tìm kiếm)
 *  2. Tìm kiếm & Tra cứu Sinh viên theo Môn & Lớp (độc lập, xuất Excel riêng)
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Quản lý Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');

      // Nếu chuyển sang tab tìm kiếm, tự động nạp kết quả
      if (targetId === 'tab-search') {
        runSearchAndRender();
      }
    });
  });

  // 2. Dữ liệu bộ nhớ tạm & Cài đặt
  let currentParsedData = null;
  let lastFetchedHtml = '';
  let activeTabUrl = '';
  let currentSearchResults = [];
  let rankingMapByMssv = {};
  let rankingStudentsList = [];
  let rankingProblemsList = [];
  let currentSectionResult = null;

  // Phần tử Tab 1: Lọc & Xuất Excel BXH
  const currentTabStatus = document.getElementById('current-tab-status');
  const currentTabTitle = document.getElementById('current-tab-title');
  const btnExportCurrent = document.getElementById('btn-export-current');
  const btnPreviewCurrent = document.getElementById('btn-preview-current');
  const selectFilterMode = document.getElementById('select-filter-mode');
  const freshmanPrefixRow = document.getElementById('freshman-prefix-row');
  const freshmanPrefixInput = document.getElementById('freshman-prefix-input');
  const chkOnlyScoreGtZero = document.getElementById('chk-only-score-gt-zero');

  // Phần tử Tab 2: Bảng điểm theo lớp học phần
  const selectSearchSection = document.getElementById('select-search-section');
  const inputSearchKeyword = document.getElementById('input-search-keyword');
  const searchStatTotal = document.getElementById('search-stat-total');
  const searchStatSubmitted = document.getElementById('search-stat-submitted');
  const searchThead = document.getElementById('search-thead');
  const searchTbody = document.getElementById('search-tbody');
  const btnExportSearch = document.getElementById('btn-export-search');

  // Phần tử Tab 3: Xem trước BXH
  const statMatched = document.getElementById('stat-matched');
  const statSkipped = document.getElementById('stat-skipped');
  const statTotal = document.getElementById('stat-total');
  const previewContestTitle = document.getElementById('preview-contest-title');
  const previewThead = document.getElementById('preview-thead');
  const previewTbody = document.getElementById('preview-tbody');
  const btnExportFromPreview = document.getElementById('btn-export-from-preview');

  // Phần tử Tab 4: Quản lý Danh bạ Sinh viên
  const studentCountBadge = document.getElementById('student-count');
  const studentImportInput = document.getElementById('student-import-input');
  const btnSaveStudents = document.getElementById('btn-save-students');
  const btnLoadSampleStudents = document.getElementById('btn-load-sample-students');
  const btnClearStudents = document.getElementById('btn-clear-students');

  const defaultYearPrefix = new Date().getFullYear().toString().slice(-2);
  if (freshmanPrefixInput && !freshmanPrefixInput.value) {
    freshmanPrefixInput.value = defaultYearPrefix;
  }

  // =========================================================================
  // CHỨC NĂNG 1: LỌC VÀ TẢI EXCEL BẢNG XẾP HẠNG (Chuyên biệt, không cộng dồn)
  // =========================================================================

  if (selectFilterMode) {
    selectFilterMode.addEventListener('change', async () => {
      const mode = selectFilterMode.value;
      if (freshmanPrefixRow) {
        freshmanPrefixRow.style.display = mode === 'freshman' ? 'flex' : 'none';
      }
      const prefix = freshmanPrefixInput ? freshmanPrefixInput.value.trim() : defaultYearPrefix;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({
          filterMode: mode,
          onlyFreshman: mode === 'freshman',
          freshmanPrefix: prefix
        });
      }
      if (lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
      let modeText = 'Chỉ lấy có Mã sinh viên (Expert)';
      if (mode === 'all') modeText = 'Lấy tất cả (kể cả không có Mã SV)';
      else if (mode === 'freshman') modeText = `Chỉ lấy Tân sinh viên (Newbie - ${prefix}T...)`;
      showToast(`Đã chọn: ${modeText}`);
    });
  }

  if (freshmanPrefixInput) {
    freshmanPrefixInput.addEventListener('input', async () => {
      const prefix = freshmanPrefixInput.value.trim();
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({ freshmanPrefix: prefix });
      }
      if (selectFilterMode && selectFilterMode.value === 'freshman' && lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
    });
  }

  if (chkOnlyScoreGtZero) {
    chkOnlyScoreGtZero.addEventListener('change', async () => {
      const isChecked = chkOnlyScoreGtZero.checked;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({ onlyGreaterThanZero: isChecked });
      }
      if (lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
      showToast(isChecked ? 'Đã bật: Chỉ lấy thí sinh > 0 điểm' : 'Đã tắt: Lấy cả thí sinh 0 điểm');
    });
  }

  // Quét mã HTML từ Tab hiện tại
  async function fetchCurrentTabHtml() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) throw new Error('Không tìm thấy tab trình duyệt!');

    let pageHtml = '';
    try {
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'GET_RANKING_HTML' });
      if (response && response.html) {
        pageHtml = response.html;
      }
    } catch (e) {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.documentElement.outerHTML
      });
      if (results && results[0] && results[0].result) {
        pageHtml = results[0].result;
      }
    }

    if (!pageHtml) {
      throw new Error('Không thể đọc nội dung bảng xếp hạng từ trang web!');
    }

    lastFetchedHtml = pageHtml;
    buildRankingMap(pageHtml);
    return pageHtml;
  }

  // Xây dựng bản đồ thí sinh trên BXH để hỗ trợ đối chiếu bên bảng điểm lớp
  function buildRankingMap(rawHtml) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHtml, 'text/html');
      const allBxh = HuscRankingCore.parseRankingData(doc, { filterMode: 'all', onlyGreaterThanZero: false });
      rankingMapByMssv = {};
      rankingStudentsList = allBxh.students || [];
      rankingProblemsList = allBxh.problems || [];
      if (allBxh && allBxh.students) {
        allBxh.students.forEach(st => {
          if (st.mssv) {
            rankingMapByMssv[st.mssv.toUpperCase()] = st;
          }
        });
      }
    } catch (e) {
      console.warn('Lỗi build ranking map:', e);
    }
  }

  // Xử lý nút Xuất từ Tab hiện tại (Không cộng dồn tìm kiếm)
  btnExportCurrent.addEventListener('click', async () => {
    try {
      showToast('Đang quét dữ liệu từ tab hiện tại...');
      const html = await fetchCurrentTabHtml();
      await processAndExportHtml(html);
    } catch (err) {
      console.error(err);
      showToast('Lỗi: ' + err.message, true);
    }
  });

  // Xử lý nút Xem trước dữ liệu từ Tab hiện tại (Không cộng dồn tìm kiếm)
  if (btnPreviewCurrent) {
    btnPreviewCurrent.addEventListener('click', async () => {
      try {
        showToast('Đang nạp dữ liệu xem trước...');
        const html = await fetchCurrentTabHtml();
        parseAndPreview(html, true);
      } catch (err) {
        console.error(err);
        showToast('Lỗi: ' + err.message, true);
      }
    });
  }

  function parseAndPreview(rawHtml, switchTab = true) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHtml, 'text/html');
      const studentMap = getStoredStudentMapSync();
      const regex = getStoredRegexSync();
      const filterMode = selectFilterMode ? selectFilterMode.value : 'student_id';
      const onlyGreaterThanZero = chkOnlyScoreGtZero ? chkOnlyScoreGtZero.checked : false;
      const freshmanPrefix = freshmanPrefixInput ? freshmanPrefixInput.value.trim() : defaultYearPrefix;

      // CHỈ LỌC THEO TIÊU CHÍ BXH, KHÔNG CỘNG DỒN TÌM KIẾM
      const data = HuscRankingCore.parseRankingData(doc, {
        regex: regex,
        studentMap: studentMap,
        filterMode: filterMode,
        onlyGreaterThanZero: onlyGreaterThanZero,
        freshmanPrefix: freshmanPrefix
      });

      currentParsedData = data;
      renderPreview(data);

      if (switchTab) {
        document.querySelector('[data-tab="tab-preview"]').click();
        showToast(`Đã lọc được ${data.matchedCount} thí sinh!`);
      }
    } catch (err) {
      showToast('Lỗi phân tích: ' + err.message, true);
    }
  }

  // Nút xuất từ Tab Preview
  btnExportFromPreview.addEventListener('click', async () => {
    if (!currentParsedData) {
      showToast('Chưa có dữ liệu để xuất!', true);
      return;
    }
    await exportWorkbook(currentParsedData);
  });

  async function processAndExportHtml(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const studentMap = await getStoredStudentMap();
    const regex = await getStoredRegex();
    const filterMode = selectFilterMode ? selectFilterMode.value : 'student_id';
    const onlyGreaterThanZero = chkOnlyScoreGtZero ? chkOnlyScoreGtZero.checked : false;
    const freshmanPrefix = freshmanPrefixInput ? freshmanPrefixInput.value.trim() : defaultYearPrefix;

    // CHỈ LỌC THEO TIÊU CHÍ BXH, KHÔNG CỘNG DỒN TÌM KIẾM
    const data = HuscRankingCore.parseRankingData(doc, {
      regex: regex,
      studentMap: studentMap,
      filterMode: filterMode,
      onlyGreaterThanZero: onlyGreaterThanZero,
      freshmanPrefix: freshmanPrefix
    });

    if (data.students.length === 0) {
      showToast(`Không tìm thấy thí sinh nào phù hợp! (Đã bỏ qua ${data.skippedCount} tài khoản)`, true);
      return;
    }

    currentParsedData = data;
    renderPreview(data);
    await exportWorkbook(data);
  }

  async function exportWorkbook(data) {
    try {
      showToast('Đang khởi tạo file Excel...');
      const workbook = await HuscRankingCore.createExcelWorkbook(data);
      let safeTitle = data.contestTitle
        .replace(/[^0-9A-Za-zÀ-ỹ\s_-]/g, '')
        .replace(/\s+/g, '_');
      const filename = `${safeTitle}.xlsx`;
      await HuscRankingCore.downloadExcel(workbook, filename);
      showToast(`Đã xuất file "${filename}" thành công!`);
    } catch (err) {
      console.error(err);
      showToast('Lỗi khi xuất file Excel: ' + err.message, true);
    }
  }

  // Hiển thị bảng Preview BXH (Thay cột Họ tên thành điểm các câu)
  function renderPreview(data) {
    statMatched.textContent = data.matchedCount;
    statSkipped.textContent = data.skippedCount;
    statTotal.textContent = data.allCount;
    previewContestTitle.textContent = data.contestTitle;

    const problems = data.problems || [];
    const totalCols = 2 + problems.length + 2; // Rank, MSSV + các bài + Total, Note

    // Cập nhật thead: Thay cột Họ tên thành điểm các câu
    if (previewThead) {
      let theadHtml = `
        <tr>
          <th style="width: 35px;">Rank</th>
          <th style="text-align: left; min-width: 120px;">MSSV</th>
      `;
      problems.forEach(p => {
        theadHtml += `<th style="width: 50px;" title="${p.label}">${p.probNum}</th>`;
      });
      theadHtml += `<th style="width: 60px;">Total</th><th style="width: 50px;">Note</th></tr>`;
      previewThead.innerHTML = theadHtml;
    }

    previewTbody.innerHTML = '';
    if (data.students.length === 0) {
      previewTbody.innerHTML = `<tr><td colspan="${totalCols}" class="text-center text-muted" style="padding: 16px;">Không tìm thấy thí sinh nào phù hợp</td></tr>`;
      btnExportFromPreview.style.display = 'none';
      return;
    }

    btnExportFromPreview.style.display = 'block';

    const fragment = document.createDocumentFragment();
    data.students.forEach((st) => {
      const tr = document.createElement('tr');
      const nameInIdCol = st.fullName
        ? `<b>${st.fullName}</b><div style="font-size: 10px; color: #64748b;">${st.mssv}</div>`
        : `<b>${st.mssv}</b>`;

      let rowHtml = `
        <td><b>${st.rank}</b></td>
        <td style="text-align: left;">${nameInIdCol}</td>
      `;

      // Điểm từng câu
      problems.forEach((p, pIdx) => {
        const scoreObj = (st.scores && st.scores[pIdx]);
        const valStr = scoreObj ? (scoreObj.display || scoreObj.points || '0,00') : '0,00';
        const isZero = valStr === '0,00' || valStr === '0' || valStr === '0,0';
        const styleColor = isZero ? 'color: #94a3b8;' : 'color: #15803d; font-weight: 600;';
        rowHtml += `<td style="${styleColor}">${valStr}</td>`;
      });

      rowHtml += `
        <td><b>${st.total ? st.total.display : '0,0'}</b></td>
        <td>${st.note || '-'}</td>
      `;

      tr.innerHTML = rowHtml;
      fragment.appendChild(tr);
    });
    previewTbody.appendChild(fragment);
  }

  // =========================================================================
  // CHỨC NĂNG 2: BẢNG ĐIỂM THEO LỚP HỌC PHẦN (Dropdown duy nhất, chỉ hiện SV đã nộp, điểm từng câu)
  // =========================================================================

  function initSectionDropdown() {
    if (!selectSearchSection) return;
    const sections = HuscRankingCore.getClassSections ? HuscRankingCore.getClassSections() : [];
    selectSearchSection.innerHTML = '<option value="">-- Chọn lớp học phần --</option>';
    sections.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.id;
      opt.textContent = sec.label;
      selectSearchSection.appendChild(opt);
    });
  }

  function runSearchAndRender() {
    if (!selectSearchSection) return;
    const secId = selectSearchSection.value;
    const kw = inputSearchKeyword ? inputSearchKeyword.value.trim() : '';

    // Nếu chưa có rankingStudentsList nhưng đã có HTML tab hiện tại, nạp trước
    if ((!rankingStudentsList || rankingStudentsList.length === 0) && lastFetchedHtml) {
      buildRankingMap(lastFetchedHtml);
    }

    // Lọc theo lớp học phần, CHỈ LẤY NHỮNG AI ĐÃ NỘP BÀI TRÊN BXH, BỎ CỘT LỚP, CÓ ĐIỂM TỪNG CÂU
    const result = HuscRankingCore.filterSubmittedStudentsBySection({
      sectionId: secId,
      rankingStudents: rankingStudentsList,
      problems: rankingProblemsList,
      keyword: kw
    });

    currentSectionResult = result;
    const submittedStudents = result.students || [];
    const problems = rankingProblemsList || [];
    const totalCols = 3 + problems.length + 1; // Rank, Mã SV, Họ tên + từng bài + Total

    // Cập nhật Header thead: Bỏ cột lớp, thêm điểm từng câu
    if (searchThead) {
      let theadHtml = `
        <tr>
          <th style="width: 35px;">Rank</th>
          <th style="width: 100px;">Mã SV</th>
          <th style="text-align: left; min-width: 130px;">Họ và tên</th>
      `;
      problems.forEach(p => {
        theadHtml += `<th style="width: 55px;" title="${p.label}">${p.probNum}</th>`;
      });
      theadHtml += `<th style="width: 65px;">Total</th></tr>`;
      searchThead.innerHTML = theadHtml;
    }

    // Cập nhật Body tbody: Chỉ hiện thí sinh đã nộp bài
    if (searchTbody) {
      searchTbody.innerHTML = '';
      if (!secId) {
        searchTbody.innerHTML = `<tr><td colspan="${totalCols}" class="text-center text-muted" style="padding: 16px;">Vui lòng chọn lớp học phần ở trên</td></tr>`;
      } else if (submittedStudents.length === 0) {
        searchTbody.innerHTML = `<tr><td colspan="${totalCols}" class="text-center text-muted" style="padding: 16px;">Chưa có sinh viên nào trong lớp này nộp bài trên BXH</td></tr>`;
      } else {
        const fragment = document.createDocumentFragment();

        submittedStudents.forEach((st) => {
          const tr = document.createElement('tr');
          let rowHtml = `
            <td><b>${st.rank}</b></td>
            <td><b>${st.mssv}</b></td>
            <td style="text-align: left; font-weight: 500;">${st.fullName}</td>
          `;

          // Điểm từng câu
          problems.forEach((p, pIdx) => {
            const scoreObj = (st.scores && st.scores[pIdx]);
            const valStr = scoreObj ? (scoreObj.display || scoreObj.points || '0,00') : '0,00';
            const isZero = valStr === '0,00' || valStr === '0' || valStr === '0,0';
            const styleColor = isZero ? 'color: #94a3b8;' : 'color: #15803d; font-weight: 600;';
            rowHtml += `<td style="${styleColor}">${valStr}</td>`;
          });

          // Total
          rowHtml += `<td><b>${st.total ? st.total.display : '0,0'}</b></td>`;
          tr.innerHTML = rowHtml;
          fragment.appendChild(tr);
        });

        searchTbody.appendChild(fragment);
      }
    }

    if (searchStatTotal) searchStatTotal.textContent = result.totalClassStudents;
    if (searchStatSubmitted) searchStatSubmitted.textContent = submittedStudents.length;
  }

  if (selectSearchSection) {
    selectSearchSection.addEventListener('change', () => {
      runSearchAndRender();
    });
  }

  if (inputSearchKeyword) {
    let kwTimeout = null;
    inputSearchKeyword.addEventListener('input', () => {
      clearTimeout(kwTimeout);
      kwTimeout = setTimeout(() => {
        runSearchAndRender();
      }, 150);
    });
  }

  // Xuất file Excel bảng điểm lớp học phần (bỏ cột lớp, có điểm từng câu)
  if (btnExportSearch) {
    btnExportSearch.addEventListener('click', async () => {
      if (!currentSectionResult || !currentSectionResult.students || currentSectionResult.students.length === 0) {
        showToast('Chưa có thí sinh đã nộp bài nào để xuất!', true);
        return;
      }

      const origHtml = btnExportSearch.innerHTML;
      btnExportSearch.innerHTML = '<span>Đang tạo Excel...</span>';
      btnExportSearch.disabled = true;

      try {
        const wb = await HuscRankingCore.createSectionScoreExcelWorkbook(currentSectionResult);
        let safeFileName = `Bang_Diem_${currentSectionResult.sectionLabel}`
          .replace(/[^0-9A-Za-zÀ-ỹ\s_-]/g, '')
          .replace(/\s+/g, '_') + '.xlsx';

        await HuscRankingCore.downloadExcel(wb, safeFileName);
        showToast(`Đã xuất Excel bảng điểm ${currentSectionResult.students.length} thí sinh đã nộp!`);
      } catch (err) {
        console.error(err);
        showToast('Lỗi xuất Excel: ' + err.message, true);
      } finally {
        btnExportSearch.innerHTML = origHtml;
        btnExportSearch.disabled = false;
      }
    });
  }

  // =========================================================================
  // TAB 4: Quản lý Danh bạ Sinh viên
  // =========================================================================

  if (btnSaveStudents) {
    btnSaveStudents.addEventListener('click', async () => {
      const raw = studentImportInput.value.trim();
      if (!raw) {
        showToast('Vui lòng nhập hoặc dán danh sách sinh viên!', true);
        return;
      }

      const lines = raw.split(/\r?\n/);
      const map = await getStoredStudentMap();
      let added = 0;

      lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        const parts = line.split(/[\t,;|]|\s{2,}/).map(s => s.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const mssvMatch = parts[0].match(/(\d{2}[A-Za-z]\d{7})/i);
          if (mssvMatch) {
            const mssv = mssvMatch[1].toUpperCase();
            const fullName = parts[1];
            const className = parts[2] || '';
            map[mssv] = { fullName, className };
            added++;
          }
        }
      });

      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({ studentMap: map });
      }
      cachedStudentMap = map;
      await updateStudentCountDisplay();
      studentImportInput.value = '';
      showToast(`Đã lưu thành công ${added} sinh viên vào danh bạ!`);

      if (lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
    });
  }

  if (btnLoadSampleStudents) {
    btnLoadSampleStudents.addEventListener('click', async () => {
      const defaultDb = HuscRankingCore.DEFAULT_STUDENTS;
      const count = Object.keys(defaultDb).length;
      if (count === 0) {
        showToast('Chưa nạp được dữ liệu từ data.txt!', true);
        return;
      }
      const map = await getStoredStudentMap();
      let added = 0;
      for (const [mssv, info] of Object.entries(defaultDb)) {
        if (!map[mssv]) {
          map[mssv] = { fullName: info.fullName || info.studentName, className: info.className || '' };
          added++;
        }
      }
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.set({ studentMap: map });
      }
      cachedStudentMap = map;
      await updateStudentCountDisplay();
      showToast(`Đã nạp bổ sung ${added} sinh viên từ data.txt!`);

      if (lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
    });
  }

  if (btnClearStudents) {
    btnClearStudents.addEventListener('click', async () => {
      if (!confirm('Bạn có chắc chắn muốn xóa toàn bộ danh bạ tùy chỉnh đã lưu?')) return;
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        await chrome.storage.local.remove(['studentMap']);
      }
      cachedStudentMap = {};
      await updateStudentCountDisplay();
      showToast('Đã xóa toàn bộ danh bạ tùy chỉnh!');

      if (lastFetchedHtml) {
        parseAndPreview(lastFetchedHtml, false);
      }
    });
  }

  // =========================================================================
  // Tiện ích phụ trợ & Khởi tạo
  // =========================================================================

  let cachedStudentMap = {};
  let cachedRegex = null;

  async function loadSavedSettings() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const store = await chrome.storage.local.get(['onlyGreaterThanZero', 'filterMode', 'onlyFreshman', 'freshmanPrefix', 'studentMap']);
      if (chkOnlyScoreGtZero && store.onlyGreaterThanZero !== undefined) {
        chkOnlyScoreGtZero.checked = store.onlyGreaterThanZero;
      }
      if (selectFilterMode && store.filterMode) {
        selectFilterMode.value = store.filterMode;
      } else if (selectFilterMode && store.onlyFreshman) {
        selectFilterMode.value = 'freshman';
      }
      if (freshmanPrefixRow && selectFilterMode) {
        freshmanPrefixRow.style.display = selectFilterMode.value === 'freshman' ? 'flex' : 'none';
      }
      if (freshmanPrefixInput && store.freshmanPrefix) {
        freshmanPrefixInput.value = store.freshmanPrefix;
      }
      if (store.studentMap) {
        cachedStudentMap = store.studentMap;
      }
    }
  }

  async function getStoredStudentMap() {
    if (Object.keys(cachedStudentMap).length > 0) return cachedStudentMap;
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const res = await chrome.storage.local.get(['studentMap']);
      cachedStudentMap = res.studentMap || {};
    }
    return cachedStudentMap;
  }

  function getStoredStudentMapSync() {
    return cachedStudentMap;
  }

  async function getStoredRegex() {
    return HuscRankingCore.DEFAULT_MSSV_REGEX;
  }

  function getStoredRegexSync() {
    return HuscRankingCore.DEFAULT_MSSV_REGEX;
  }

  async function updateStudentCountDisplay() {
    if (!studentCountBadge) return;
    const map = await getStoredStudentMap();
    const count = Object.keys(map).length;
    const defaultCount = Object.keys(HuscRankingCore.DEFAULT_STUDENTS).length;
    studentCountBadge.textContent = `${count} tùy chỉnh (${defaultCount} có sẵn)`;
  }

  function showToast(message, isError = false) {
    const toast = document.getElementById('popup-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `popup-toast show ${isError ? 'error' : ''}`;
    setTimeout(() => {
      toast.className = 'popup-toast';
    }, 3000);
  }

  // Khởi tạo
  if (typeof HuscRankingCore !== 'undefined' && HuscRankingCore.loadStudentsFromDataTxt) {
    await HuscRankingCore.loadStudentsFromDataTxt();
  }
  await loadSavedSettings();
  await updateStudentCountDisplay();
  initSectionDropdown();

  // Kiểm tra tab hiện tại
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      activeTabUrl = tab.url || '';
      if (activeTabUrl.includes('coder.husc.edu.vn')) {
        currentTabStatus.className = 'status-indicator ready';
        if (activeTabUrl.includes('rank')) {
          currentTabTitle.textContent = 'Phát hiện bảng xếp hạng trên Tab!';
          // Quét trước để có sẵn ranking map cho tab tìm kiếm
          fetchCurrentTabHtml().catch(() => {});
        } else {
          currentTabTitle.textContent = 'Đã kết nối trang CODER HUSC!';
        }
        btnExportCurrent.disabled = false;
        if (btnPreviewCurrent) btnPreviewCurrent.disabled = false;
      } else {
        currentTabStatus.className = 'status-indicator not-husc';
        currentTabTitle.textContent = 'Vui lòng mở trang CODER HUSC';
        btnExportCurrent.classList.remove('btn-primary');
        btnExportCurrent.classList.add('btn-secondary');
      }
    }
  } catch (err) {
    console.warn('Lỗi đọc tab:', err);
  }
});
