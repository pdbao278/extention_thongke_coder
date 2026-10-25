/**
 * content.js - Tự động chèn nút "Thống kê" và "Tìm SV (Môn/Lớp)" trên Header website CODER HUSC
 */

(function () {
  'use strict';

  const defaultYearPrefix = new Date().getFullYear().toString().slice(-2);

  // 1. Khởi tạo cụm nút nổi (Floating Dock) cố định sát mép phải màn hình, tách biệt hoàn toàn khỏi layout web
  function initFloatingDock() {
    // Xóa cụm nút cũ nếu còn tồn tại trong header hoặc toolbar
    const oldHeaderGroup = document.getElementById('husc-header-btn-group');
    if (oldHeaderGroup) {
      oldHeaderGroup.remove();
    }
    document.querySelectorAll('#husc-header-stats-btn, #husc-header-search-btn').forEach(el => {
      if (!el.closest('#husc-floating-dock')) el.remove();
    });

    // Nếu đã có dock nổi thì không cần tạo lại
    if (document.getElementById('husc-floating-dock')) {
      return;
    }

    if (!document.body) {
      return;
    }

    // Tạo container dock nổi cố định bám sát cạnh phải màn hình
    const dock = document.createElement('div');
    dock.id = 'husc-floating-dock';
    dock.className = 'husc-floating-dock';

    // Nút 1: Thống kê (Màu xanh dương, icon biểu đồ tròn & chữ Thống kê)
    const btnStats = document.createElement('button');
    btnStats.id = 'husc-dock-stats-btn';
    btnStats.className = 'husc-dock-btn husc-dock-stats-btn';
    btnStats.type = 'button';
    btnStats.title = 'Thống kê BXH & Xuất Excel';
    btnStats.innerHTML = `
      <svg viewBox="0 0 24 24" class="husc-dock-icon">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
      <span class="husc-dock-label">Thống kê</span>
    `;
    btnStats.addEventListener('click', handleOpenStatsModal);

    // Nút 2: Tìm SV theo môn, lớp (Màu xanh lá emerald, icon máy tính & chữ Tìm SV (Môn/Lớp))
    const btnSearch = document.createElement('button');
    btnSearch.id = 'husc-dock-search-btn';
    btnSearch.className = 'husc-dock-btn husc-dock-search-btn';
    btnSearch.type = 'button';
    btnSearch.title = 'Bảng điểm & Tìm SV (Môn/Lớp)';
    btnSearch.innerHTML = `
      <svg viewBox="0 0 24 24" class="husc-dock-icon">
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="16" y1="14" x2="16" y2="18"></line>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M8 18h.01"></path>
      </svg>
      <span class="husc-dock-label">Tìm SV (Môn/Lớp)</span>
    `;
    btnSearch.addEventListener('click', handleOpenSearchModal);

    dock.appendChild(btnStats);
    dock.appendChild(btnSearch);

    document.body.appendChild(dock);
  }

  // 2. Mở Modal Thống Kê Bảng Xếp Hạng
  async function handleOpenStatsModal() {
    let overlay = document.getElementById('husc-stats-modal-overlay');
    if (overlay) {
      overlay.remove();
    }

    const hasRankingTable = !!document.querySelector('table.fl-ranking-table');

    // Nạp dữ liệu danh bạ mới nhất từ data.txt nếu có
    if (typeof HuscRankingCore !== 'undefined' && HuscRankingCore.loadStudentsFromDataTxt) {
      await HuscRankingCore.loadStudentsFromDataTxt();
    }

    // Lấy cài đặt đã lưu
    let onlyGtZero = false;
    let filterMode = 'student_id';
    let freshmanPrefix = defaultYearPrefix;
    let studentMap = {};

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const store = await chrome.storage.local.get(['onlyGreaterThanZero', 'filterMode', 'onlyFreshman', 'freshmanPrefix', 'studentMap']);
      if (store.onlyGreaterThanZero !== undefined) onlyGtZero = store.onlyGreaterThanZero;
      if (store.filterMode) {
        filterMode = store.filterMode;
      } else if (store.onlyFreshman) {
        filterMode = 'freshman';
      }
      if (store.freshmanPrefix) freshmanPrefix = store.freshmanPrefix;
      if (store.studentMap) studentMap = store.studentMap;
    }

    overlay = document.createElement('div');
    overlay.id = 'husc-stats-modal-overlay';
    overlay.className = 'husc-modal-overlay';

    let bodyContent = '';

    if (hasRankingTable) {
      // Phân tích dữ liệu ban đầu
      const parsed = HuscRankingCore.parseRankingData(document, {
        studentMap: studentMap,
        filterMode: filterMode,
        onlyGreaterThanZero: onlyGtZero,
        freshmanPrefix: freshmanPrefix
      });

      bodyContent = `
        <div class="husc-contest-banner" id="husc-modal-contest-title">
          ${parsed.contestTitle}
        </div>

        <div class="husc-stats-cards">
          <div class="husc-stat-card green">
            <span class="husc-stat-val" id="husc-modal-matched">${parsed.matchedCount}</span>
            <span class="husc-stat-lbl">Thí sinh</span>
          </div>
          <div class="husc-stat-card amber">
            <span class="husc-stat-val" id="husc-modal-skipped">${parsed.skippedCount}</span>
            <span class="husc-stat-lbl">Đã lọc bỏ</span>
          </div>
          <div class="husc-stat-card blue">
            <span class="husc-stat-val" id="husc-modal-total">${parsed.allCount}</span>
            <span class="husc-stat-lbl">Tổng trên web</span>
          </div>
        </div>

        <!-- BỘ LỌC 1: Đối tượng thí sinh -->
        <div class="husc-filter-card">
          <div class="husc-filter-title-row">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#2563eb">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            <label class="husc-filter-title" for="husc-modal-select-mode">Lọc đối tượng thí sinh:</label>
          </div>
          <div class="husc-select-wrapper">
            <select id="husc-modal-select-mode" class="husc-custom-select">
              <option value="student_id" ${filterMode === 'student_id' ? 'selected' : ''}>Chỉ lấy có Mã sinh viên (Expert)</option>
              <option value="freshman" ${filterMode === 'freshman' ? 'selected' : ''}>Chỉ lấy Tân sinh viên (Newbie)</option>
              <option value="all" ${filterMode === 'all' ? 'selected' : ''}>Lấy tất cả (kể cả không có Mã SV)</option>
            </select>
          </div>

          <!-- Dòng cấu hình khóa Tân sinh viên khi được chọn -->
          <div id="husc-modal-freshman-box" class="husc-freshman-subrow" style="display: ${filterMode === 'freshman' ? 'flex' : 'none'};">
            <span>Mã SV bắt đầu bằng:</span>
            <input type="text" id="husc-modal-prefix-input" class="husc-prefix-input" value="${freshmanPrefix}" maxlength="4">
            <span>T... (VD: 26T...)</span>
          </div>
        </div>

        <!-- BỘ LỌC 2: Lọc tổng điểm > 0 -->
        <div class="husc-filter-card husc-filter-chk-card">
          <label class="husc-chk-item">
            <input type="checkbox" id="husc-modal-chk-gt-zero" ${onlyGtZero ? 'checked' : ''}>
            <span class="husc-chk-label">Chỉ lấy thí sinh có <b>tổng điểm &gt; 0</b> (bỏ qua 0 điểm)</span>
          </label>
        </div>

        <div class="husc-action-group">
          <button id="husc-modal-btn-export" class="husc-btn-main">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
            </svg>
            <span>Xuất file Excel</span>
          </button>
          <button id="husc-modal-btn-preview" class="husc-btn-secondary">
            <span>Xem trước</span>
          </button>
        </div>

        <div class="husc-preview-box" id="husc-modal-preview-box">
          <table class="husc-preview-table">
            <thead id="husc-modal-preview-thead">
              <tr>
                <th style="width: 45px;">Rank</th>
                <th style="text-align: left;">MSSV</th>
                <th>Total</th>
                <th style="width: 60px;">Note</th>
              </tr>
            </thead>
            <tbody id="husc-modal-preview-tbody"></tbody>
          </table>
        </div>
      `;
    } else {
      bodyContent = `
        <div style="text-align: center; padding: 24px 12px;">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="#f59e0b" style="margin-bottom: 12px;">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M13 17H11V15H13V17M13 13H11V7H13V13Z"/>
          </svg>
          <h3 style="margin-bottom: 8px; font-size: 16px; font-weight: 700;">Chưa phát hiện bảng xếp hạng</h3>
          <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin-bottom: 18px;">
            Trang hiện tại không có bảng xếp hạng. Hãy vào mục <b>Kỳ thi</b>, chọn cuộc thi và bấm vào tab <b>Bảng xếp hạng</b> để xuất Excel!
          </p>
          <a href="/contests/" class="husc-btn-main" style="display: inline-flex; text-decoration: none;">
            <span>Xem danh sách Kỳ thi</span>
          </a>
        </div>
      `;
    }

    overlay.innerHTML = `
      <div class="husc-modal-dialog">
        <div class="husc-modal-header">
          <h2 class="husc-modal-title">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17Z"/>
            </svg>
            <span>Thống Kê Bảng Xếp Hạng</span>
          </h2>
          <button class="husc-modal-close" id="husc-modal-close-btn">&times;</button>
        </div>
        <div class="husc-modal-body">
          ${bodyContent}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Xử lý đóng modal
    const closeBtn = document.getElementById('husc-modal-close-btn');
    closeBtn.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);

    if (hasRankingTable) {
      bindStatsModalEvents(studentMap);
    }
  }

  // Gắn sự kiện cho Modal Thống Kê
  function bindStatsModalEvents(studentMap) {
    const chkGtZero = document.getElementById('husc-modal-chk-gt-zero');
    const selectMode = document.getElementById('husc-modal-select-mode');
    const freshmanBox = document.getElementById('husc-modal-freshman-box');
    const prefixInput = document.getElementById('husc-modal-prefix-input');
    const btnExport = document.getElementById('husc-modal-btn-export');
    const btnPreview = document.getElementById('husc-modal-btn-preview');
    const previewBox = document.getElementById('husc-modal-preview-box');
    const previewThead = document.getElementById('husc-modal-preview-thead');
    const previewTbody = document.getElementById('husc-modal-preview-tbody');

    const statMatched = document.getElementById('husc-modal-matched');
    const statSkipped = document.getElementById('husc-modal-skipped');
    const statTotal = document.getElementById('husc-modal-total');

    function refreshData() {
      const isGtZero = chkGtZero ? chkGtZero.checked : false;
      const mode = selectMode ? selectMode.value : 'student_id';
      const prefix = prefixInput ? prefixInput.value.trim() : defaultYearPrefix;

      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          onlyGreaterThanZero: isGtZero,
          filterMode: mode,
          onlyFreshman: mode === 'freshman',
          freshmanPrefix: prefix
        });
      }

      const data = HuscRankingCore.parseRankingData(document, {
        studentMap: studentMap,
        filterMode: mode,
        onlyGreaterThanZero: isGtZero,
        freshmanPrefix: prefix
      });

      if (statMatched) statMatched.textContent = data.matchedCount;
      if (statSkipped) statSkipped.textContent = data.skippedCount;
      if (statTotal) statTotal.textContent = data.allCount;

      renderPreviewRows(data);
      return data;
    }

    if (selectMode) {
      selectMode.addEventListener('change', () => {
        if (freshmanBox) {
          freshmanBox.style.display = selectMode.value === 'freshman' ? 'flex' : 'none';
        }
        refreshData();
      });
    }

    if (prefixInput) {
      prefixInput.addEventListener('input', () => {
        if (selectMode && selectMode.value === 'freshman') {
          refreshData();
        }
      });
    }

    if (chkGtZero) {
      chkGtZero.addEventListener('change', () => {
        refreshData();
      });
    }

    function renderPreviewRows(data) {
      if (!previewTbody) return;
      const problems = data.problems || [];
      const totalColumns = 2 + problems.length + 2; // Rank, MSSV + từng câu + Total, Note

      // 1. Cập nhật header: Thay cột Họ tên thành điểm các câu
      if (previewThead) {
        let theadHtml = `
          <tr>
            <th style="width: 45px;">Rank</th>
            <th style="text-align: left; min-width: 130px;">MSSV</th>
        `;
        problems.forEach(p => {
          theadHtml += `<th style="width: 55px;" title="${p.label}">${p.probNum}</th>`;
        });
        theadHtml += `<th style="width: 65px;">Total</th><th style="width: 55px;">Note</th></tr>`;
        previewThead.innerHTML = theadHtml;
      }

      // 2. Cập nhật các dòng dữ liệu thí sinh
      previewTbody.innerHTML = '';
      if (data.students.length === 0) {
        previewTbody.innerHTML = `<tr><td colspan="${totalColumns}" style="color: #64748b; padding: 16px;">Không có thí sinh phù hợp</td></tr>`;
        return;
      }

      const fragment = document.createDocumentFragment();
      data.students.forEach(st => {
        const tr = document.createElement('tr');
        const idColContent = st.fullName
          ? `<b>${st.fullName}</b><div style="font-size: 10.5px; color: #64748b; font-weight: normal;">${st.mssv}</div>`
          : `<b>${st.mssv}</b>`;

        let rowHtml = `
          <td><b>${st.rank}</b></td>
          <td style="text-align: left;">${idColContent}</td>
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

    btnPreview.addEventListener('click', () => {
      refreshData();
      previewBox.style.display = previewBox.style.display === 'block' ? 'none' : 'block';
      btnPreview.textContent = previewBox.style.display === 'block' ? 'Ẩn xem trước' : 'Xem trước';
    });

    btnExport.addEventListener('click', async () => {
      const origText = btnExport.innerHTML;
      btnExport.innerHTML = `<span>Đang tạo Excel...</span>`;
      btnExport.disabled = true;

      try {
        const data = refreshData();
        if (data.students.length === 0) {
          showToast('Không có thí sinh nào phù hợp để xuất!', true);
          return;
        }

        const workbook = await HuscRankingCore.createExcelWorkbook(data);
        let safeTitle = data.contestTitle
          .replace(/[^0-9A-Za-zÀ-ỹ\s_-]/g, '')
          .replace(/\s+/g, '_');
        const filename = `${safeTitle}.xlsx`;
        await HuscRankingCore.downloadExcel(workbook, filename);
        showToast(`Đã xuất thành công ${data.matchedCount} thí sinh!`);
      } catch (err) {
        console.error(err);
        showToast('Lỗi: ' + err.message, true);
      } finally {
        btnExport.innerHTML = origText;
        btnExport.disabled = false;
      }
    });
  }

  // 3. Mở Modal Tra Cứu Sinh Viên Theo Lớp Học Phần (Dropdown duy nhất, chỉ hiện SV đã nộp, điểm từng câu)
  async function handleOpenSearchModal() {
    let overlay = document.getElementById('husc-search-modal-overlay');
    if (overlay) {
      overlay.remove();
    }

    // Đảm bảo dữ liệu danh bạ đã nạp
    if (typeof HuscRankingCore !== 'undefined' && HuscRankingCore.loadStudentsFromDataTxt) {
      await HuscRankingCore.loadStudentsFromDataTxt();
    }

    const hasRankingTable = !!document.querySelector('table.fl-ranking-table');
    let problems = [];
    let rankingStudents = [];

    if (hasRankingTable && typeof HuscRankingCore !== 'undefined') {
      try {
        const bxhParsed = HuscRankingCore.parseRankingData(document, { filterMode: 'all', onlyGreaterThanZero: false });
        problems = bxhParsed.problems || [];
        rankingStudents = bxhParsed.students || [];
      } catch (e) {
        console.warn('Lỗi đọc dữ liệu BXH cho tra cứu:', e);
      }
    }

    // Lấy danh sách lớp học phần hiển thị trong dropdown duy nhất đúng như ảnh
    const sections = (typeof HuscRankingCore !== 'undefined' && HuscRankingCore.getClassSections)
      ? HuscRankingCore.getClassSections()
      : [];

    let sectionsOptionsHtml = '<option value="">-- Chọn lớp học phần --</option>';
    sections.forEach(sec => {
      sectionsOptionsHtml += `<option value="${sec.id}">${sec.label}</option>`;
    });

    overlay = document.createElement('div');
    overlay.id = 'husc-search-modal-overlay';
    overlay.className = 'husc-modal-overlay';

    overlay.innerHTML = `
      <div class="husc-modal-dialog husc-search-dialog" style="max-width: 820px;">
        <div class="husc-modal-header" style="background: linear-gradient(135deg, #065f46, #059669);">
          <h2 class="husc-modal-title">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
            </svg>
            <span>Bảng Điểm Theo Lớp Học Phần</span>
          </h2>
          <button class="husc-modal-close" id="husc-search-close-btn">&times;</button>
        </div>
        <div class="husc-modal-body">
          <!-- Toolbar Dropdown chọn lớp học phần đúng chuẩn ảnh -->
          <div class="husc-search-toolbar">
            <div class="husc-search-field" style="flex: 1.6;">
              <label class="husc-search-label" for="husc-search-select-section">Chọn lớp học phần:</label>
              <select id="husc-search-select-section" class="husc-custom-select" style="font-size: 13.5px; padding: 8px 12px; font-weight: 600;">
                ${sectionsOptionsHtml}
              </select>
            </div>

            <div class="husc-search-field" style="flex: 1;">
              <label class="husc-search-label" for="husc-search-input-kw">Tìm nhanh MSSV / Họ tên:</label>
              <input type="text" id="husc-search-input-kw" placeholder="Tìm theo MSSV hoặc Họ tên..." style="width: 100%; padding: 8px 12px; font-size: 13px; border: 1.5px solid #cbd5e1; border-radius: 8px; outline: none; box-sizing: border-box;">
            </div>
          </div>

          <!-- Thẻ thống kê số lượng đã nộp -->
          <div class="husc-stats-cards" style="margin-bottom: 12px;">
            <div class="husc-stat-card green">
              <span class="husc-stat-val" id="husc-search-count-submitted">0</span>
              <span class="husc-stat-lbl">Sinh viên đã nộp bài</span>
            </div>
            <div class="husc-stat-card blue">
              <span class="husc-stat-val" id="husc-search-count-total">0</span>
              <span class="husc-stat-lbl">Tổng sĩ số lớp</span>
            </div>
          </div>

          <!-- Bảng danh sách sinh viên: CHỈ HIỆN NHỮNG AI ĐÃ NỘP, BỎ CỘT LỚP, CÓ ĐIỂM TỪNG CÂU -->
          <div class="husc-search-table-box">
            <table class="husc-search-table">
              <thead id="husc-search-thead">
                <tr>
                  <th style="width: 50px;">Rank</th>
                  <th style="width: 110px;">Mã SV</th>
                  <th style="text-align: left;">Họ và tên</th>
                  <!-- Các cột điểm từng câu sẽ được chèn ở đây -->
                  <th style="width: 75px;">Total</th>
                </tr>
              </thead>
              <tbody id="husc-search-tbody">
                <tr>
                  <td colspan="4" style="padding: 24px; color: #64748b;">Vui lòng chọn lớp học phần ở trên để xem danh sách thí sinh đã nộp bài</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Nút hành động -->
          <div class="husc-action-group" style="margin-top: 14px;">
            <button id="husc-search-btn-export" class="husc-btn-main" style="background: #059669;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              <span>Xuất file Excel lớp này</span>
            </button>
            <button id="husc-search-btn-close" class="husc-btn-secondary">
              <span>Đóng</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = document.getElementById('husc-search-close-btn');
    const bottomCloseBtn = document.getElementById('husc-search-btn-close');
    const closeModal = () => overlay.remove();

    closeBtn.addEventListener('click', closeModal);
    bottomCloseBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);

    bindSearchModalEvents(rankingStudents, problems, hasRankingTable);
  }

  // Gắn sự kiện và render bảng điểm từng câu cho Modal Lớp Học Phần
  function bindSearchModalEvents(rankingStudents, problems, hasRankingTable) {
    const selectSection = document.getElementById('husc-search-select-section');
    const inputKw = document.getElementById('husc-search-input-kw');
    const thead = document.getElementById('husc-search-thead');
    const tbody = document.getElementById('husc-search-tbody');
    const countTotal = document.getElementById('husc-search-count-total');
    const countSubmitted = document.getElementById('husc-search-count-submitted');
    const btnExport = document.getElementById('husc-search-btn-export');

    let currentSectionResult = null;

    function renderSectionData() {
      const secId = selectSection ? selectSection.value : '';
      const kw = inputKw ? inputKw.value.trim() : '';

      // Gọi hàm filterSubmittedStudentsBySection trong core.js:
      // CHỈ LẤY NHỮNG AI ĐÃ NỘP BÀI TRÊN BXH, BỎ CỘT LỚP, CÓ ĐIỂM TỪNG CÂU
      const result = HuscRankingCore.filterSubmittedStudentsBySection({
        sectionId: secId,
        rankingStudents: rankingStudents,
        problems: problems,
        keyword: kw
      });

      currentSectionResult = result;
      const submittedStudents = result.students;
      const totalColumns = 3 + problems.length + 1; // Rank, Mã SV, Họ tên + từng câu + Total

      // 1. Cập nhật THEAD: Bỏ cột Lớp, thay bằng điểm từng câu
      let theadHtml = `
        <tr>
          <th style="width: 50px;">Rank</th>
          <th style="width: 105px;">Mã SV</th>
          <th style="text-align: left; min-width: 150px;">Họ và tên</th>
      `;
      problems.forEach(p => {
        theadHtml += `<th style="width: 65px;" title="${p.label}">${p.probNum}</th>`;
      });
      theadHtml += `<th style="width: 75px;">Total</th></tr>`;
      thead.innerHTML = theadHtml;

      // 2. Cập nhật TBODY: Chỉ hiện những ai đã nộp bài
      tbody.innerHTML = '';
      if (!secId) {
        tbody.innerHTML = `<tr><td colspan="${totalColumns}" style="padding: 24px; color: #64748b;">Vui lòng chọn lớp học phần ở trên để xem danh sách thí sinh đã nộp bài</td></tr>`;
      } else if (submittedStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${totalColumns}" style="padding: 24px; color: #64748b;">Chưa có sinh viên nào trong lớp này nộp bài trên BXH</td></tr>`;
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

        tbody.appendChild(fragment);
      }

      if (countTotal) countTotal.textContent = result.totalClassStudents;
      if (countSubmitted) countSubmitted.textContent = submittedStudents.length;

      return result;
    }

    if (selectSection) {
      selectSection.addEventListener('change', () => {
        renderSectionData();
      });
    }

    if (inputKw) {
      let kwTimeout = null;
      inputKw.addEventListener('input', () => {
        clearTimeout(kwTimeout);
        kwTimeout = setTimeout(() => {
          renderSectionData();
        }, 150);
      });
    }

    // Xuất file Excel bảng điểm từng câu cho lớp học phần (bỏ cột lớp)
    if (btnExport) {
      btnExport.addEventListener('click', async () => {
        if (!currentSectionResult || !currentSectionResult.students || currentSectionResult.students.length === 0) {
          showToast('Chưa có thí sinh đã nộp bài nào để xuất!', true);
          return;
        }

        const origHtml = btnExport.innerHTML;
        btnExport.innerHTML = `<span>Đang tạo Excel...</span>`;
        btnExport.disabled = true;

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
          btnExport.innerHTML = origHtml;
          btnExport.disabled = false;
        }
      });
    }

    // Chạy lần đầu
    renderSectionData();
  }

  function showToast(message, isError = false) {
    const existing = document.querySelector('.husc-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `husc-toast ${isError ? 'error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // 4. Lắng nghe yêu cầu từ popup
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'GET_RANKING_HTML') {
        const table = document.querySelector('table.fl-ranking-table');
        if (!table) {
          sendResponse({ success: false, error: 'Không tìm thấy bảng xếp hạng trên trang web!' });
          return;
        }

        sendResponse({
          success: true,
          html: document.documentElement.outerHTML,
          title: document.title,
          url: window.location.href
        });
      }
      return true;
    });
  }

  // Khởi chạy khi tải trang & theo dõi cập nhật DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingDock);
  } else {
    initFloatingDock();
  }

  // Theo dõi DOM để đảm bảo dock nổi luôn có mặt trên body
  const observer = new MutationObserver(() => {
    initFloatingDock();
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: false
  });
})();
