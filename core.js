/**
 * core.js - Trình phân tích HTML bảng xếp hạng CODER HUSC và xuất file Excel chuẩn SPIT
 */

const HuscRankingCore = {
  // Biểu thức chính quy nhận diện mã sinh viên HUSC (ví dụ: 23T1020034, 26T1020029, 26T1130037...)
  DEFAULT_MSSV_REGEX: /(\d{2}[A-Za-z]\d{7})/i,

  /**
   * Phân tích tài liệu HTML để trích xuất dữ liệu bảng xếp hạng
   * @param {Document|HTMLElement} docRoot - Đối tượng Document hoặc Element chứa HTML
   * @param {Object} options - Tùy chọn (regex, studentMap, ...)
   * @returns {Object} { contestTitle, problems, students, allCount, matchedCount, skippedCount }
   */
  parseRankingData(docRoot, options = {}) {
    const mssvRegex = options.regex || this.DEFAULT_MSSV_REGEX;
    const studentMap = options.studentMap || {}; // Map: MSSV -> { fullName, className }
    const onlyGreaterThanZero = options.onlyGreaterThanZero || false;
    
    // Chế độ lọc: 'all' (tất cả thí sinh), 'student_id' (chỉ có mã SV), 'freshman' (chỉ tân SV)
    let filterMode = options.filterMode || 'student_id';
    if (options.onlyFreshman) {
      filterMode = 'freshman';
    }
    const freshmanPrefix = options.freshmanPrefix || new Date().getFullYear().toString().slice(-2);

    // 1. Trích xuất tiêu đề kỳ thi
    let contestTitle = options.customTitle || '';
    if (!contestTitle) {
      const titleCandidates = [
        docRoot.querySelector('.fl-ranking-head__contest'), // Thẻ HTML chính xác như trong ảnh DevTools người dùng chụp
        docRoot.querySelector('.fl-contest-head__title'),
        docRoot.querySelector('.fl-ranking-head__titles'),
        docRoot.querySelector('.fl-page-title'),
        docRoot.querySelector('h1'),
        docRoot.querySelector('h2'),
        docRoot.querySelector('.breadcrumb li:last-child'),
        docRoot.querySelector('title')
      ];

      for (const el of titleCandidates) {
        if (el && el.textContent.trim()) {
          let text = el.textContent.trim();
          // Xóa các tiền tố/hậu tố thường gặp
          text = text.replace(/Bảng xếp hạng\s*[·-]\s*/gi, '')
                     .replace(/\s*[·-]\s*CODER HUSC/gi, '')
                     .replace(/\s*[·-]\s*Bảng điểm/gi, '')
                     .replace(/\s*[·-]\s*Kết quả chung cuộc/gi, '')
                     .trim();
          if (text && text.toLowerCase() !== 'bảng điểm' && text.toLowerCase() !== 'bảng xếp hạng') {
            // Lược bỏ chữ "Contest" để tiêu đề chuẩn đẹp: SPIT Newbie Contest 17 -> SPIT NEWBIE 17
            text = text.replace(/\bcontest\b/gi, '').replace(/\s+/g, ' ').trim();
            contestTitle = text;
            break;
          }
        }
      }
    }

    if (!contestTitle) {
      contestTitle = 'SPIT CONTEST';
    }

    // 2. Tìm bảng xếp hạng DMOJ
    const table = docRoot.querySelector('table.fl-ranking-table') || docRoot.querySelector('table');
    if (!table) {
      throw new Error('Không tìm thấy bảng xếp hạng trên trang (table.fl-ranking-table).');
    }

    // 3. Trích xuất danh sách cột bài tập từ thead
    const problems = [];
    const theadRows = table.querySelectorAll('thead tr');
    const headerRow = theadRows[theadRows.length - 1]; // Hàng header cuối cùng

    if (headerRow) {
      const probCells = headerRow.querySelectorAll('th.fl-ranking-problem');
      probCells.forEach((th, idx) => {
        // Lấy số/tên bài: ví dụ 1, 2, A, B...
        let probNum = `${idx + 1}`;
        const numEl = th.querySelector('.fl-problem-num span[aria-hidden="true"]') ||
                      th.querySelector('.fl-problem-num') ||
                      th.querySelector('.fl-ranking-problem__link');
        if (numEl) {
          const match = numEl.textContent.trim().match(/^[0-9A-Za-z]+/);
          if (match) probNum = match[0];
        }

        // Lấy điểm tối đa của bài: ví dụ 20, 30...
        let maxPoints = '100';
        const pointsEl = th.querySelector('.fl-ranking-problem__points');
        if (pointsEl) {
          const matchPts = pointsEl.textContent.trim().match(/\d+([.,]\d+)?/);
          if (matchPts) maxPoints = matchPts[0];
        }

        problems.push({
          index: idx,
          label: `${probNum} (${maxPoints})`,
          probNum: probNum,
          maxPoints: maxPoints
        });
      });
    }

    // 4. Trích xuất danh sách thí sinh từ tbody
    const tbody = table.querySelector('tbody') || table;
    const rows = tbody.querySelectorAll('tr');
    const students = [];
    let allCount = 0;
    let skippedCount = 0;

    rows.forEach((row) => {
      // Tìm ô thông tin thành viên
      const memberCell = row.querySelector('.fl-ranking-member') || row.children[1];
      if (!memberCell) return;

      allCount++;

      // Tìm thẻ link profile của thí sinh
      const userLink = memberCell.querySelector('a.fl-ranking-member__link') || memberCell.querySelector('a[href*="/user/"]');
      let username = '';
      let profileUrl = '';

      if (userLink) {
        profileUrl = userLink.getAttribute('href') || '';
        if (profileUrl && !profileUrl.startsWith('http')) {
          profileUrl = 'https://coder.husc.edu.vn' + (profileUrl.startsWith('/') ? '' : '/') + profileUrl;
        }
        username = userLink.textContent.trim().split(',')[0].trim();
      } else {
        username = memberCell.textContent.trim();
      }

      // Toàn bộ chuỗi văn bản trong ô thành viên để tìm kiếm mở rộng nếu cần
      const cellFullText = memberCell.textContent.trim();

      // Kiểm tra nhận diện mã sinh viên
      const mssvMatch = username.match(mssvRegex) || cellFullText.match(mssvRegex);
      let mssv = '';

      if (filterMode === 'all') {
        // Chế độ 1: Lấy tất cả thí sinh (kể cả không có mã sinh viên)
        if (mssvMatch) {
          mssv = mssvMatch[1].toUpperCase();
        } else {
          mssv = username; // Nếu không có mã SV, lấy username làm định danh
        }
      } else if (filterMode === 'freshman') {
        // Chế độ 3: Chỉ lấy Tân sinh viên (mã SV bắt đầu bằng 2 số năm + T, ví dụ: 26T...)
        if (!mssvMatch) {
          skippedCount++;
          return;
        }
        mssv = mssvMatch[1].toUpperCase();
        const prefix = (freshmanPrefix || new Date().getFullYear().toString().slice(-2)).trim();
        const freshmanRegex = new RegExp(`^${prefix}[A-Za-z]`, 'i');
        if (!freshmanRegex.test(mssv)) {
          skippedCount++;
          return; // Bỏ qua nếu không phải Tân sinh viên khóa này
        }
      } else {
        // Chế độ 2: Chỉ lấy người có mã sinh viên (mặc định)
        if (!mssvMatch) {
          skippedCount++;
          return;
        }
        mssv = mssvMatch[1].toUpperCase();
      }

      // Lấy điểm các bài tập
      // Các ô bài tập nằm giữa ô member và ô total
      const cells = Array.from(row.querySelectorAll('td, th'));
      const scores = [];

      // Tìm vị trí ô total
      let totalCellIndex = cells.findIndex(c => c.classList && c.classList.contains('fl-ranking-total'));
      if (totalCellIndex === -1) {
        totalCellIndex = cells.length - 1;
      }

      // Ô thành viên nằm ở vị trí nào?
      let memberCellIndex = cells.findIndex(c => c.classList && c.classList.contains('fl-ranking-member'));
      if (memberCellIndex === -1) memberCellIndex = 1;

      // Các ô bài tập nằm từ memberCellIndex + 1 đến totalCellIndex - 1
      const problemCells = cells.slice(memberCellIndex + 1, totalCellIndex);

      problemCells.forEach((c) => {
        let scoreText = '0,00';
        let rawScore = 0;
        const tile = c.querySelector('.fl-ranking-tile');

        if (tile) {
          const spans = tile.querySelectorAll('span');
          if (spans.length > 0) {
            const raw = spans[0].textContent.trim();
            scoreText = this.formatVietnameseNumber(raw, 2);
            rawScore = parseFloat(raw.replace(',', '.')) || 0;
          }
        } else {
          // Kiểm tra xem có điểm ghi trực tiếp trong td không
          const text = c.textContent.trim();
          if (text && !text.includes('Chưa nộp')) {
            const numMatch = text.match(/^\d+([.,]\d+)?/);
            if (numMatch) {
              scoreText = this.formatVietnameseNumber(numMatch[0], 2);
              rawScore = parseFloat(numMatch[0].replace(',', '.')) || 0;
            }
          }
        }

        scores.push({
          display: scoreText,
          value: rawScore
        });
      });

      // Lấy tổng điểm
      let totalScoreText = '0,0';
      let rawTotal = 0;
      const totalCell = cells[totalCellIndex];
      if (totalCell) {
        const totalTile = totalCell.querySelector('.fl-ranking-tile') || totalCell;
        const spans = totalTile.querySelectorAll('span');
        let raw = '';
        if (spans.length > 1) {
          raw = spans[1].textContent.trim(); // DMOJ thường có span tổng điểm ở vị trí 1
        }
        if (!raw || isNaN(parseFloat(raw.replace(',', '.')))) {
          const match = totalCell.textContent.trim().match(/\d+([.,]\d+)?/);
          if (match) raw = match[0];
        }
        if (raw) {
          totalScoreText = this.formatVietnameseNumber(raw, 1);
          rawTotal = parseFloat(raw.replace(',', '.')) || 0;
        }
      }

      // Lọc người có tổng điểm > 0 nếu tùy chọn được bật
      if (onlyGreaterThanZero && rawTotal <= 0) {
        skippedCount++;
        return;
      }

      // Xác định Họ tên & Lớp (nếu có mapping hoặc trích xuất từ username)
      let fullName = '';
      let className = '';

      if (studentMap[mssv]) {
        fullName = studentMap[mssv].fullName || '';
        className = studentMap[mssv].className || '';
      } else {
        // Thử tách tên từ username nếu có dạng: 24T1020386_TranDinhKhanhQuan hoặc 26t1130040_thai_dat_thanh
        const suffixMatch = username.match(/^[0-9A-Za-z]+[_-](.+)$/);
        if (suffixMatch) {
          fullName = this.cleanStudentName(suffixMatch[1]);
        }
      }

      students.push({
        mssv: mssv,
        username: username,
        profileUrl: profileUrl,
        scores: scores,
        total: {
          display: totalScoreText,
          value: rawTotal
        },
        fullName: fullName,
        className: className
      });
    });

    // 5. Đánh lại thứ tự Rank sau khi lọc
    students.forEach((st, index) => {
      st.rank = index + 1;
      if (st.rank === 1) {
        st.note = 'NHẤT';
      } else if (st.rank === 2) {
        st.note = 'NHÌ';
      } else if (st.rank === 3) {
        st.note = 'BA';
      } else {
        st.note = '';
      }
    });

    let finalTitle = contestTitle.trim();
    if (!finalTitle.toUpperCase().startsWith('BẢNG XẾP HẠNG')) {
      finalTitle = `BẢNG XẾP HẠNG ${finalTitle.toUpperCase()}`;
    } else {
      finalTitle = finalTitle.toUpperCase();
    }

    return {
      contestTitle: finalTitle,
      problems: problems,
      students: students,
      allCount: allCount,
      matchedCount: students.length,
      skippedCount: skippedCount
    };
  },

  /**
   * Định dạng số theo chuẩn Việt Nam (ví dụ: 20 -> 20,00 hoặc 100 -> 100,0)
   */
  formatVietnameseNumber(valStr, minDecimals = 1) {
    if (valStr === undefined || valStr === null || valStr === '') return '0,00';
    const num = parseFloat(String(valStr).replace(',', '.'));
    if (isNaN(num)) return String(valStr);

    let parts = num.toFixed(Math.max(minDecimals, (num.toString().split('.')[1] || '').length)).split('.');
    if (parts[1] && parts[1].length < minDecimals) {
      parts[1] = parts[1].padEnd(minDecimals, '0');
    }
    return parts.join(',');
  },

  /**
   * Làm sạch tên sinh viên nếu tách từ username (CamelCase hoặc snake_case)
   */
  cleanStudentName(raw) {
    if (!raw) return '';
    // Xóa ký tự gạch dưới, khoảng trắng thừa
    let cleaned = raw.replace(/[_-]+/g, ' ').trim();
    // Tách CamelCase nếu có: TranDinhKhanhQuan -> Tran Dinh Khanh Quan
    cleaned = cleaned.replace(/([a-z])([A-Z])/g, '$1 $2');
    return cleaned;
  },

  /**
   * Tạo Workbook ExcelJS với định dạng chuẩn 100% như ảnh
   * @param {Object} data - Dữ liệu đã parse từ parseRankingData
   * @returns {ExcelJS.Workbook}
   */
  async createExcelWorkbook(data) {
    if (typeof ExcelJS === 'undefined') {
      throw new Error('Thư viện ExcelJS chưa được tải.');
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CODER HUSC Extension';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet('Bảng Xếp Hạng', {
      views: [{ showGridLines: true }]
    });

    // 1. Xác định danh sách cột
    // Cột: Rank | Tên Thành Viên | Bài 1 | Bài 2 ... | Total | Note | Họ tên | Lớp
    const columns = [
      { header: 'Rank', key: 'rank', width: 9 },
      { header: 'Tên Thành Viên', key: 'username', width: 22 }
    ];

    data.problems.forEach((p, idx) => {
      columns.push({
        header: p.label,
        key: `prob_${idx}`,
        width: 12
      });
    });

    columns.push(
      { header: 'Total', key: 'total', width: 13 },
      { header: 'Note', key: 'note', width: 12 },
      { header: 'Họ tên', key: 'fullName', width: 26 },
      { header: 'Lớp', key: 'className', width: 14 }
    );

    const totalCols = columns.length;

    // 2. Định nghĩa Style chung
    const thinBorder = {
      top: { style: 'thin', color: { argb: 'FF000000' } },
      left: { style: 'thin', color: { argb: 'FF000000' } },
      bottom: { style: 'thin', color: { argb: 'FF000000' } },
      right: { style: 'thin', color: { argb: 'FF000000' } }
    };

    // 3. DÒNG 1: Tiêu đề lớn (Gộp cột, nền xanh navy, chữ trắng in hoa đậm)
    sheet.mergeCells(1, 1, 1, totalCols);
    const titleCell = sheet.getCell(1, 1);
    titleCell.value = data.contestTitle;
    titleCell.font = {
      name: 'Times New Roman',
      size: 14,
      bold: true,
      color: { argb: 'FFFFFFFF' }
    };
    titleCell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1F4E79' } // Màu xanh Navy đậm giống ảnh
    };
    titleCell.alignment = {
      vertical: 'middle',
      horizontal: 'center'
    };
    sheet.getRow(1).height = 32;

    // Áp dụng border cho toàn bộ dải merge dòng 1
    for (let c = 1; c <= totalCols; c++) {
      sheet.getCell(1, c).border = thinBorder;
    }

    // 4. DÒNG 2: Header cột (Nền xanh dương trung tính, chữ đen/trắng, in đậm)
    const headerRow = sheet.getRow(2);
    headerRow.height = 25;

    columns.forEach((col, idx) => {
      const cell = headerRow.getCell(idx + 1);
      cell.value = col.header;
      cell.font = {
        name: 'Times New Roman',
        size: 11,
        bold: true,
        color: { argb: 'FF000000' } // Chữ đen đậm như trong ảnh
      };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' } // Nền xanh dương giống ảnh
      };
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center'
      };
      cell.border = thinBorder;
      sheet.getColumn(idx + 1).width = col.width;
    });

    // 5. DÒNG DỮ LIỆU THÍ SINH
    data.students.forEach((st, sIdx) => {
      const rowNum = sIdx + 3; // Bắt đầu từ dòng 3
      const row = sheet.getRow(rowNum);
      row.height = 20;

      const isTop3 = st.rank >= 1 && st.rank <= 3;
      // Màu nền: Top 3 nền ĐỎ (#FF0000) như trong ảnh, các dòng sau nền TRẮNG
      const rowFill = isTop3 ? {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFF0000' } // Đỏ tươi chuẩn ảnh
      } : {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' }
      };

      let colIdx = 1;

      // Cột 1: Rank
      const rankCell = row.getCell(colIdx++);
      rankCell.value = st.rank;
      rankCell.font = {
        name: 'Times New Roman',
        size: 11,
        bold: isTop3
      };
      rankCell.alignment = { vertical: 'middle', horizontal: 'center' };
      rankCell.fill = rowFill;
      rankCell.border = thinBorder;

      // Cột 2: Tên Thành Viên (có hyperlink tới profile nếu có)
      const userCell = row.getCell(colIdx++);
      if (st.profileUrl) {
        userCell.value = {
          text: st.username,
          hyperlink: st.profileUrl
        };
        userCell.font = {
          name: 'Times New Roman',
          size: 11,
          underline: true,
          color: { argb: 'FF0000FF' } // Màu xanh link gạch chân như trong ảnh
        };
      } else {
        userCell.value = st.username;
        userCell.font = {
          name: 'Times New Roman',
          size: 11
        };
      }
      userCell.alignment = { vertical: 'middle', horizontal: 'left' };
      userCell.fill = rowFill;
      userCell.border = thinBorder;

      // Cột các bài tập
      data.problems.forEach((p, pIdx) => {
        const probCell = row.getCell(colIdx++);
        const scoreObj = st.scores[pIdx];
        const valStr = scoreObj ? scoreObj.display : '0,00';
        probCell.value = valStr;
        probCell.font = {
          name: 'Times New Roman',
          size: 11
        };
        probCell.alignment = { vertical: 'middle', horizontal: 'center' };
        probCell.fill = rowFill;
        probCell.border = thinBorder;
      });

      // Cột Total
      const totalCell = row.getCell(colIdx++);
      totalCell.value = st.total.display;
      totalCell.font = {
        name: 'Times New Roman',
        size: 11,
        bold: true
      };
      totalCell.alignment = { vertical: 'middle', horizontal: 'center' };
      totalCell.fill = rowFill;
      totalCell.border = thinBorder;

      // Cột Note (NHẤT, NHÌ, BA)
      const noteCell = row.getCell(colIdx++);
      noteCell.value = st.note;
      noteCell.font = {
        name: 'Times New Roman',
        size: 11,
        bold: true
      };
      noteCell.alignment = { vertical: 'middle', horizontal: 'center' };
      noteCell.fill = rowFill;
      noteCell.border = thinBorder;

      // Cột Họ tên
      const nameCell = row.getCell(colIdx++);
      nameCell.value = st.fullName;
      nameCell.font = {
        name: 'Times New Roman',
        size: 11
      };
      nameCell.alignment = { vertical: 'middle', horizontal: 'left' };
      nameCell.fill = rowFill;
      nameCell.border = thinBorder;

      // Cột Lớp
      const classCell = row.getCell(colIdx++);
      classCell.value = st.className;
      classCell.font = {
        name: 'Times New Roman',
        size: 11
      };
      classCell.alignment = { vertical: 'middle', horizontal: 'center' };
      classCell.fill = rowFill;
      classCell.border = thinBorder;
    });

    return workbook;
  },

  /**
   * Tải file Excel trực tiếp về máy người dùng
   */
  async downloadExcel(workbook, filename = 'Bang_Xep_Hang.xlsx') {
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 500);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HuscRankingCore;
}
