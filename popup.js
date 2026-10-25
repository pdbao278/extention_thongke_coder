/**
 * popup.js - Quản lý tương tác và xuất dữ liệu trên giao diện Extension
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
    });
  });

  // 2. Dữ liệu bộ nhớ tạm & Cài đặt
  let currentParsedData = null;
  let lastFetchedHtml = '';
  let activeTabUrl = '';

  // Khởi tạo các phần tử DOM
  const currentTabStatus = document.getElementById('current-tab-status');
  const currentTabTitle = document.getElementById('current-tab-title');
  const btnExportCurrent = document.getElementById('btn-export-current');
  const btnPreviewCurrent = document.getElementById('btn-preview-current');
  const btnExportFromPreview = document.getElementById('btn-export-from-preview');

  // Preview elements
  const statMatched = document.getElementById('stat-matched');
  const statSkipped = document.getElementById('stat-skipped');
  const statTotal = document.getElementById('stat-total');
  const previewContestTitle = document.getElementById('preview-contest-title');
  const previewTbody = document.getElementById('preview-tbody');

  // Student Mapping elements (tạm ẩn trên UI nhưng logic vẫn giữ)
  const studentCountBadge = document.getElementById('student-count');
  const studentImportInput = document.getElementById('student-import-input');
  const btnSaveStudents = document.getElementById('btn-save-students');
  const btnLoadSampleStudents = document.getElementById('btn-load-sample-students');
  const btnClearStudents = document.getElementById('btn-clear-students');

  // Settings & Filter elements
  const selectFilterMode = document.getElementById('select-filter-mode');
  const freshmanPrefixRow = document.getElementById('freshman-prefix-row');
  const freshmanPrefixInput = document.getElementById('freshman-prefix-input');
  const chkOnlyScoreGtZero = document.getElementById('chk-only-score-gt-zero');

  // Khởi tạo năm hiện tại mặc định
  const defaultYearPrefix = new Date().getFullYear().toString().slice(-2);
  if (freshmanPrefixInput && !freshmanPrefixInput.value) {
    freshmanPrefixInput.value = defaultYearPrefix;
  }

  // 3. Sự kiện thay đổi chế độ lọc đối tượng (Dropdown chọn 1)
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

  // Sự kiện thay đổi lọc điểm > 0
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

  // 4. Nạp cấu hình từ chrome.storage
  await loadSavedSettings();
  await updateStudentCountDisplay();

  // 5. Kiểm tra Tab hiện tại
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      activeTabUrl = tab.url || '';
      if (activeTabUrl.includes('coder.husc.edu.vn')) {
        currentTabStatus.className = 'status-indicator ready';
        if (activeTabUrl.includes('rank')) {
          currentTabTitle.textContent = 'Phát hiện bảng xếp hạng trên Tab!';
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
    } else {
      currentTabTitle.textContent = 'Không tìm thấy tab đang mở';
    }
  } catch (err) {
    console.warn('Lỗi đọc tab:', err);
    currentTabTitle.textContent = 'Đã kết nối tab trình duyệt';
  }

  // Hàm quét mã HTML từ Tab hiện tại
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
    return pageHtml;
  }

  // 6. Xử lý nút Xuất từ Tab hiện tại
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

  // 7. Xử lý nút Xem trước dữ liệu từ Tab hiện tại
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

  // 8. Nút xuất từ Tab Preview
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

  // 9. Hiển thị bảng Preview
  function renderPreview(data) {
    statMatched.textContent = data.matchedCount;
    statSkipped.textContent = data.skippedCount;
    statTotal.textContent = data.allCount;
    previewContestTitle.textContent = data.contestTitle;

    previewTbody.innerHTML = '';
    if (data.students.length === 0) {
      previewTbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">Không tìm thấy sinh viên nào</td></tr>';
      btnExportFromPreview.style.display = 'none';
      return;
    }

    btnExportFromPreview.style.display = 'block';

    data.students.forEach((st) => {
      const tr = document.createElement('tr');
      if (st.rank <= 3) tr.className = 'top-rank';

      const scoresText = st.scores.map(s => s.display).join(' | ');

      tr.innerHTML = `
        <td><b>${st.rank}</b></td>
        <td><a href="${st.profileUrl}" target="_blank">${st.mssv}</a></td>
        <td>${scoresText}</td>
        <td><b>${st.total.display}</b></td>
        <td><span style="color: ${st.rank <= 3 ? '#b91c1c' : 'inherit'}">${st.note || '-'}</span></td>
        <td style="text-align: left;">${st.fullName || '<span class="text-muted">(Chưa có)</span>'}</td>
      `;
      previewTbody.appendChild(tr);
    });
  }

  // 10. Quản lý Danh bạ Sinh viên (Mapping) - logic lưu trữ
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

      await chrome.storage.local.set({ studentMap: map });
      cachedStudentMap = map;
      await updateStudentCountDisplay();
      showToast(`Đã lưu ${added} sinh viên vào danh bạ!`);
    });
  }

  if (btnLoadSampleStudents) {
    btnLoadSampleStudents.addEventListener('click', async () => {
      const sample = [
        '26T1020029\tTrần Nhơn Hoàng Đạt\t26T102',
        '26T1020007\tNguyễn Tuấn Anh\t26T102',
        '26T1020047\tNguyễn Gia Hiều\t26T102',
        '26T1020209\tNgô Văn Vũ\t26T102',
        '26T1029005\tLương Gia Đạt\t26T102',
        '26T1020073\tNguyễn Khang\t26T102',
        '26T1130037\tPhan Vinh Quang\t26T113',
        '26T1020178\tĐặng Ngọc Minh Thư\t26T102',
        '26T1130040\tThái Đạt Thành\t26T113'
      ].join('\n');

      studentImportInput.value = sample;
      showToast('Đã điền danh sách mẫu! Bấm "Lưu danh bạ" để áp dụng.');
    });
  }

  if (btnClearStudents) {
    btnClearStudents.addEventListener('click', async () => {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh bạ sinh viên đã lưu?')) {
        await chrome.storage.local.remove(['studentMap']);
        cachedStudentMap = {};
        if (studentImportInput) studentImportInput.value = '';
        await updateStudentCountDisplay();
        showToast('Đã xóa danh bạ!');
      }
    });
  }

  async function updateStudentCountDisplay() {
    if (!studentCountBadge) return;
    const map = await getStoredStudentMap();
    const count = Object.keys(map).length;
    studentCountBadge.textContent = `${count} sinh viên`;
  }

  async function getStoredStudentMap() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const res = await chrome.storage.local.get(['studentMap']);
      return res.studentMap || {};
    }
    return {};
  }

  async function getStoredRegex() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const res = await chrome.storage.local.get(['mssvRegex']);
      if (res.mssvRegex) {
        try {
          return new RegExp(res.mssvRegex, 'i');
        } catch (e) {
          console.warn('Regex lỗi:', e);
        }
      }
    }
    return HuscRankingCore.DEFAULT_MSSV_REGEX;
  }

  function getStoredRegexSync() {
    return HuscRankingCore.DEFAULT_MSSV_REGEX;
  }

  function getStoredStudentMapSync() {
    return cachedStudentMap || {};
  }

  let cachedStudentMap = {};

  async function loadSavedSettings() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const res = await chrome.storage.local.get(['onlyGreaterThanZero', 'onlyFreshman', 'filterMode', 'freshmanPrefix', 'studentMap']);
      if (res.onlyGreaterThanZero !== undefined) {
        if (chkOnlyScoreGtZero) chkOnlyScoreGtZero.checked = res.onlyGreaterThanZero;
      }
      
      // Khôi phục chế độ lọc
      let mode = res.filterMode;
      if (!mode) {
        mode = res.onlyFreshman ? 'freshman' : 'student_id';
      }
      if (selectFilterMode) {
        selectFilterMode.value = mode;
      }
      if (freshmanPrefixRow) {
        freshmanPrefixRow.style.display = mode === 'freshman' ? 'flex' : 'none';
      }

      if (res.freshmanPrefix && freshmanPrefixInput) {
        freshmanPrefixInput.value = res.freshmanPrefix;
      }
      if (res.studentMap) cachedStudentMap = res.studentMap;
    }
  }

  // Toast helper
  function showToast(msg, isError = false) {
    const toast = document.getElementById('popup-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `popup-toast show ${isError ? 'error' : ''}`;
    setTimeout(() => {
      toast.className = 'popup-toast';
    }, 3200);
  }
});
