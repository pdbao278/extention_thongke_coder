/**
 * content.js - Tự động chèn nút "Thống kê" ở Header góc trái trên mọi trang CODER HUSC
 */

(function () {
  'use strict';

  const defaultYearPrefix = new Date().getFullYear().toString().slice(-2);

  // 1. Khởi tạo nút "Thống kê" trên Header (chèn vào sau tên người dùng)
  function initHeaderStatsButton() {
    // Xóa bất kỳ nút cũ nào nằm sai vị trí (ví dụ nút cũ ở góc trái gần logo)
    const oldBtns = document.querySelectorAll('.husc-header-stats-btn, #husc-header-stats-btn');
    const headerBar = document.querySelector('.fl-header__bar') || document.querySelector('header');
    if (!headerBar) return;

    // Tìm phần tử hiển thị tài khoản / tên người dùng ở góc phải header
    let userTarget = null;
    const avatar = headerBar.querySelector('.fl-avatar');
    if (avatar) {
      let curr = avatar;
      while (
        curr &&
        curr.parentElement &&
        !curr.parentElement.classList.contains('fl-header__actions') &&
        curr.parentElement !== headerBar
      ) {
        curr = curr.parentElement;
      }
      userTarget = curr;
    }

    if (!userTarget) {
      const headerActions = headerBar.querySelector('.fl-header__actions');
      if (headerActions) {
        userTarget = headerActions.querySelector('.fl-menu-anchor:last-child') ||
                     headerActions.querySelector('.fl-btn--user') ||
                     headerActions.lastElementChild;
      }
    }

    // Nếu đã có nút và nút đó đã nằm đúng vị trí ngay sau userTarget thì giữ nguyên
    const existingBtn = document.getElementById('husc-header-stats-btn');
    if (existingBtn) {
      if (userTarget && existingBtn.previousElementSibling === userTarget) {
        return; // Đã đúng vị trí
      }
      // Nếu chưa đúng vị trí (ví dụ nằm ở góc trái), gỡ bỏ để chèn lại sau tên
      existingBtn.remove();
    }

    // Tạo nút Thống kê mới nền xanh dương
    const btn = document.createElement('button');
    btn.id = 'husc-header-stats-btn';
    btn.className = 'husc-header-stats-btn';
    btn.type = 'button';
    btn.title = 'Mở bảng điều khiển Thống kê & Xuất Excel';
    btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17Z"/>
      </svg>
      <span>Thống kê</span>
    `;

    btn.addEventListener('click', handleOpenStatsModal);

    // Chèn vào SAU TÊN người dùng ở góc phải
    if (userTarget && userTarget.parentNode) {
      if (userTarget.nextSibling) {
        userTarget.parentNode.insertBefore(btn, userTarget.nextSibling);
      } else {
        userTarget.parentNode.appendChild(btn);
      }
    } else {
      const headerActions = headerBar.querySelector('.fl-header__actions');
      if (headerActions) {
        headerActions.appendChild(btn);
      } else {
        headerBar.appendChild(btn);
      }
    }
  }

  // 2. Mở Modal Thống Kê
  async function handleOpenStatsModal() {
    let overlay = document.getElementById('husc-stats-modal-overlay');
    if (overlay) {
      overlay.remove();
    }

    const hasRankingTable = !!document.querySelector('table.fl-ranking-table');

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

        <!-- BỘ LỌC 1: Danh sách xả xuống chọn 1 -->
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

        <!-- BỘ LỌC 2 (Ở DƯỚI): Lọc tổng điểm > 0 -->
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
            <thead>
              <tr>
                <th>Rank</th>
                <th>MSSV</th>
                <th>Điểm</th>
                <th>Total</th>
                <th>Note</th>
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

    // Xử lý sự kiện đóng modal
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
      bindModalEvents(studentMap);
    }
  }

  // 3. Gắn sự kiện cho các nút trong Modal
  function bindModalEvents(studentMap) {
    const chkGtZero = document.getElementById('husc-modal-chk-gt-zero');
    const selectMode = document.getElementById('husc-modal-select-mode');
    const freshmanBox = document.getElementById('husc-modal-freshman-box');
    const prefixInput = document.getElementById('husc-modal-prefix-input');
    const btnExport = document.getElementById('husc-modal-btn-export');
    const btnPreview = document.getElementById('husc-modal-btn-preview');
    const previewBox = document.getElementById('husc-modal-preview-box');
    const previewTbody = document.getElementById('husc-modal-preview-tbody');

    const statMatched = document.getElementById('husc-modal-matched');
    const statSkipped = document.getElementById('husc-modal-skipped');
    const statTotal = document.getElementById('husc-modal-total');

    function refreshData() {
      const isGtZero = chkGtZero ? chkGtZero.checked : false;
      const mode = selectMode ? selectMode.value : 'student_id';
      const prefix = prefixInput ? prefixInput.value.trim() : defaultYearPrefix;

      // Lưu cài đặt
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
      previewTbody.innerHTML = '';

      if (data.students.length === 0) {
        previewTbody.innerHTML = '<tr><td colspan="5" style="color: #64748b;">Không có thí sinh phù hợp</td></tr>';
        return;
      }

      data.students.forEach(st => {
        const tr = document.createElement('tr');
        if (st.rank <= 3) tr.className = 'top';
        const scoresText = st.scores.map(s => s.display).join(' | ');
        tr.innerHTML = `
          <td><b>${st.rank}</b></td>
          <td>${st.mssv}</td>
          <td>${scoresText}</td>
          <td><b>${st.total.display}</b></td>
          <td>${st.note || '-'}</td>
        `;
        previewTbody.appendChild(tr);
      });
    }

    btnPreview.addEventListener('click', () => {
      refreshData();
      previewBox.style.display = previewBox.style.display === 'block' ? 'none' : 'block';
      btnPreview.textContent = previewBox.style.display === 'block' ? 'Ẩn xem trước' : 'Xem trước';
    });

    btnExport.addEventListener('click', async () => {
      const origText = btnExport.innerHTML;
      btnExport.innerHTML = `<span>Đang khởi tạo Excel...</span>`;
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

  // 4. Lắng nghe yêu cầu từ popup nếu có
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
    document.addEventListener('DOMContentLoaded', initHeaderStatsButton);
  } else {
    initHeaderStatsButton();
  }

  // Theo dõi DOM thay đổi để chèn đúng vị trí sau tên nếu DMOJ load profile trễ
  const observer = new MutationObserver(() => {
    initHeaderStatsButton();
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
