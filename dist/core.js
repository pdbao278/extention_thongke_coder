/**
 * core.js - Trình phân tích HTML bảng xếp hạng CODER HUSC và xuất file Excel chuẩn SPIT
 */

// Tải cơ sở dữ liệu sinh viên trích xuất từ data.txt (nếu có trong môi trường Node.js)
if (typeof globalThis !== 'undefined' && !globalThis.HUSC_STUDENTS_DATABASE && typeof require !== 'undefined') {
  try {
    const loaded = require('./students_data.js');
    globalThis.HUSC_STUDENTS_DATA = loaded;
    globalThis.HUSC_STUDENTS_DATABASE = (loaded && loaded.byStudentId) ? loaded.byStudentId : loaded;
  } catch (e) {}
}

const HuscRankingCore = {
  // Biểu thức chính quy nhận diện mã sinh viên HUSC (ví dụ: 23T1020034, 26T1020029, 26T1130037...)
  DEFAULT_MSSV_REGEX: /(\d{2}[A-Za-z]\d{7})/i,

  // Bộ nhớ đệm danh bạ đọc trực tiếp từ data.txt
  _loadedDataTxtMap: null,

  // Cơ sở dữ liệu danh bạ mặc định (trích xuất từ data.txt)
  get DEFAULT_STUDENTS() {
    if (this._loadedDataTxtMap) {
      return this._loadedDataTxtMap.byStudentId || this._loadedDataTxtMap;
    }
    const db = (typeof globalThis !== 'undefined' && globalThis.HUSC_STUDENTS_DATABASE) ||
               (typeof window !== 'undefined' && window.HUSC_STUDENTS_DATABASE) ||
               (typeof HUSC_STUDENTS_DATABASE !== 'undefined' ? HUSC_STUDENTS_DATABASE : null);
    if (db) {
      return db.byStudentId || db;
    }
    const hier = this.HIERARCHICAL_DATA;
    if (hier && hier.byStudentId) {
      return hier.byStudentId;
    }
    return {};
  },

  // Cơ sở dữ liệu phân cấp đầy đủ theo Môn học và Nhóm học phần
  get HIERARCHICAL_DATA() {
    if (this._loadedDataTxtMap && this._loadedDataTxtMap.bySubject) {
      return this._loadedDataTxtMap;
    }
    if (typeof globalThis !== 'undefined' && globalThis.HUSC_STUDENTS_DATA) {
      return globalThis.HUSC_STUDENTS_DATA;
    }
    if (typeof window !== 'undefined' && window.HUSC_STUDENTS_DATA) {
      return window.HUSC_STUDENTS_DATA;
    }
    return null;
  },

  /**
   * Lấy danh sách các môn học có trong hệ thống
   */
  getSubjects() {
    const data = this.HIERARCHICAL_DATA;
    if (data && data.metadata && data.metadata.subjects) {
      return data.metadata.subjects.map(s => typeof s === 'string' ? s : s.subjectName);
    }
    if (data && data.bySubject) {
      return Object.keys(data.bySubject);
    }
    return [];
  },

  /**
   * Lấy danh sách các nhóm học phần thuộc môn học
   */
  getGroupsBySubject(subjectName) {
    if (!subjectName || subjectName === 'all') return [];
    const subName = (typeof subjectName === 'object' && subjectName !== null)
      ? (subjectName.subjectName || '')
      : String(subjectName);
    const data = this.HIERARCHICAL_DATA;
    if (data && data.bySubject && data.bySubject[subName]) {
      return Object.keys(data.bySubject[subName].groups || {});
    }
    return [];
  },

  /**
   * Lấy danh sách các lớp học phần phẳng (Hiển thị 1 dropdown duy nhất đúng như ảnh)
   * Gồm: Ngôn ngữ lập trình - Nhóm 1..8, Kỹ thuật lập trình - Nhóm 1..2
   */
  getClassSections() {
    const sections = [];
    const hierData = this.HIERARCHICAL_DATA;

    if (hierData && hierData.bySubject) {
      for (const [subName, subObj] of Object.entries(hierData.bySubject)) {
        if (!subObj.groups) continue;
        const groupKeys = Object.keys(subObj.groups).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
        for (const grp of groupKeys) {
          sections.push({
            id: `${subName}|${grp}`,
            subjectName: subName,
            group: grp,
            label: `${subName} - Nhóm ${parseInt(grp, 10)}`
          });
        }
      }
    }

    if (sections.length === 0) {
      // Fallback mặc định đúng chuẩn 10 lớp học phần
      for (let g = 1; g <= 8; g++) {
        sections.push({
          id: `Ngôn ngữ lập trình|${g}`,
          subjectName: 'Ngôn ngữ lập trình',
          group: `${g}`,
          label: `Ngôn ngữ lập trình - Nhóm ${g}`
        });
      }
      for (let g = 1; g <= 2; g++) {
        sections.push({
          id: `Kỹ thuật lập trình|${g}`,
          subjectName: 'Kỹ thuật lập trình',
          group: `${g}`,
          label: `Kỹ thuật lập trình - Nhóm ${g}`
        });
      }
    }

    return sections;
  },

  /**
   * Tra cứu chi tiết thông tin sinh viên theo MSSV (gồm Họ tên, Lớp, Môn và Nhóm)
   */
  getStudentInfo(mssv) {
    if (!mssv) return null;
    const cleanId = mssv.trim().toUpperCase();
    const defaultDb = this.DEFAULT_STUDENTS;
    if (defaultDb && defaultDb[cleanId]) {
      return defaultDb[cleanId];
    }
    const data = this.HIERARCHICAL_DATA;
    if (data && data.byStudentId && data.byStudentId[cleanId]) {
      return data.byStudentId[cleanId];
    }
    return null;
  },

  /**
   * Tải và phân tích dữ liệu trực tiếp từ file data.txt của extension
   */
  async loadStudentsFromDataTxt() {
    try {
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) {
        const url = chrome.runtime.getURL('data.txt');
        const res = await fetch(url);
        if (res.ok) {
          const text = await res.text();
          const parsed = this.parseStudentsFromText(text);
          if (parsed && Object.keys(parsed).length > 0) {
            this._loadedDataTxtMap = parsed;
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn('Không thể tải data.txt:', e);
    }
    return this.DEFAULT_STUDENTS;
  },

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

      // 1. Ưu tiên tra cứu trong studentMap (tùy chỉnh lưu trữ của người dùng nếu có)
      if (studentMap && studentMap[mssv]) {
        fullName = studentMap[mssv].fullName || '';
        className = studentMap[mssv].className || '';
      }

      // 2. Tra cứu trong cơ sở dữ liệu data.txt / students_data.js
      if (!fullName) {
        const info = this.getStudentInfo(mssv);
        if (info) {
          fullName = info.fullName || info.studentName || '';
          if (!className) className = info.className || '';
        }
      }

      if (!fullName) {
        const defaultDb = this.DEFAULT_STUDENTS;
        if (defaultDb && defaultDb[mssv]) {
          fullName = defaultDb[mssv].fullName || defaultDb[mssv].studentName || '';
          if (!className) {
            className = defaultDb[mssv].className || '';
          }
        }
      }

      // 3. Tự động suy luận Lớp từ tiền tố MSSV nếu chưa có (ví dụ: 26T1080001 -> 26T108)
      if (!className && mssv) {
        const classMatch = mssv.match(/^(\d{2}[A-Za-z]\d{3})/i);
        if (classMatch) {
          className = classMatch[1].toUpperCase();
        }
      }

      // Lấy thêm thông tin môn và nhóm từ CSDL phân cấp (nếu có)
      let subjectName = '';
      let group = '';
      let classCode = '';
      let enrollments = [];

      const info = this.getStudentInfo(mssv);
      if (info) {
        if (!fullName && (info.fullName || info.studentName)) {
          fullName = info.fullName || info.studentName;
        }
        if (!className && info.className) className = info.className;
        enrollments = info.enrollments || [];
        subjectName = info.subjectName || '';
        group = info.group || '';
        classCode = info.classCode || '';
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
        className: className,
        subjectName: subjectName,
        group: group,
        classCode: classCode,
        enrollments: enrollments
      });
    });

    // 5. Đánh lại thứ tự Rank sau khi lọc (không tự ý ghi sẵn các top theo yêu cầu)
    students.forEach((st, index) => {
      st.rank = index + 1;
      st.note = ''; // Bỏ ghi sẵn các top (để trống cột Note) theo yêu cầu
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
   * Phân tích nội dung văn bản từ data.txt hoặc danh sách sinh viên
   * Hỗ trợ cấu trúc phân cấp theo Môn học và Nhóm học phần
   * @param {string} rawText
   * @returns {Object} Map: MSSV -> { fullName, className, enrollments, subjectName, group, classCode }
   */
  parseStudentsFromText(rawText) {
    const map = {};
    const bySubject = {};
    const byStudentId = {};

    if (!rawText || typeof rawText !== 'string') return map;

    // 1. Phân tách theo các khối comment môn học //
    const parts = rawText.split(/(?=\/\/\s*[^\r\n]+)/);

    parts.forEach(part => {
      part = part.trim();
      if (!part) return;

      let subjectName = 'Chưa xác định';
      const commentMatch = part.match(/^\/\/\s*([^\r\n]+)/);
      if (commentMatch) {
        subjectName = commentMatch[1].trim();
        if (subjectName.toLowerCase().includes('kỹ thuật lập trình')) {
          subjectName = 'Kỹ thuật lập trình';
        } else if (subjectName.toLowerCase().includes('ngôn ngữ lập trình')) {
          subjectName = 'Ngôn ngữ lập trình';
        }
      }

      const objectMatches = part.match(/\{[\s\S]*?"students"\s*:\s*\[[\s\S]*?\]\s*\}/g);
      if (!objectMatches) return;

      objectMatches.forEach(blockStr => {
        try {
          const obj = JSON.parse(blockStr);
          const searchName = obj.searchName || '';
          const students = obj.students || [];

          let subjectCode = '';
          let group = '';
          const nameParts = searchName.split('.');
          if (nameParts.length >= 3) {
            subjectCode = nameParts[2];
            group = nameParts[3] || nameParts[nameParts.length - 1];
          } else {
            group = searchName;
          }

          if (!bySubject[subjectName]) {
            bySubject[subjectName] = {
              subjectName: subjectName,
              subjectCode: subjectCode,
              groups: {}
            };
          }

          const groupStudents = [];

          students.forEach(st => {
            const id = st.studentId.trim().toUpperCase();
            const name = st.studentName.trim();
            const classMatch = id.match(/^(\d{2}[A-Za-z]\d{3})/i);
            const className = classMatch ? classMatch[1].toUpperCase() : '';

            groupStudents.push({
              studentId: id,
              studentName: name,
              className: className
            });

            if (!byStudentId[id]) {
              byStudentId[id] = {
                studentId: id,
                fullName: name,
                className: className,
                enrollments: []
              };
            }

            byStudentId[id].enrollments.push({
              subjectName: subjectName,
              subjectCode: subjectCode,
              group: group,
              classCode: searchName
            });

            if (!byStudentId[id].subjectName) {
              byStudentId[id].subjectName = subjectName;
              byStudentId[id].subjectCode = subjectCode;
              byStudentId[id].group = group;
              byStudentId[id].classCode = searchName;
            }

            map[id] = byStudentId[id];
          });

          bySubject[subjectName].groups[group] = {
            group: group,
            classCode: searchName,
            totalStudents: students.length,
            students: groupStudents
          };
        } catch (e) {}
      });
    });

    // 2. Nếu không có khối JSON, bóc tách theo dòng thông thường (MSSV Họ_tên Lớp)
    if (Object.keys(map).length === 0) {
      const lines = rawText.split(/\r?\n/);
      lines.forEach(line => {
        line = line.trim();
        if (!line || line.startsWith('//')) return;
        const parts = line.split(/[\t,;|]|\s{2,}/).map(s => s.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const mssvMatch = parts[0].match(/(\d{2}[A-Za-z]\d{7})/i);
          if (mssvMatch) {
            const id = mssvMatch[1].toUpperCase();
            const classMatch = id.match(/^(\d{2}[A-Za-z]\d{3})/i);
            const className = parts[2] || (classMatch ? classMatch[1].toUpperCase() : '');
            const stObj = {
              studentId: id,
              fullName: parts[1],
              className: className,
              enrollments: []
            };
            map[id] = stObj;
            byStudentId[id] = stObj;
          }
        }
      });
    }

    // Metadata
    const subjectsMeta = Object.keys(bySubject).map(subName => {
      const sub = bySubject[subName];
      const grps = Object.keys(sub.groups);
      let totalCount = 0;
      grps.forEach(g => { totalCount += sub.groups[g].totalStudents; });
      return {
        subjectName: subName,
        subjectCode: sub.subjectCode,
        groups: grps,
        totalEnrollments: totalCount
      };
    });

    Object.defineProperty(map, 'bySubject', { value: bySubject, enumerable: false, writable: true });
    Object.defineProperty(map, 'byStudentId', { value: byStudentId, enumerable: false, writable: true });
    Object.defineProperty(map, 'metadata', {
      value: {
        subjects: subjectsMeta,
        totalUniqueStudents: Object.keys(byStudentId).length
      },
      enumerable: false,
      writable: true
    });

    return map;
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

      // Màu nền: Nền TRẮNG cho tất cả các dòng (bỏ màu đỏ top theo yêu cầu)
      const rowFill = {
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
        size: 11
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
        const scoreObj = (st.scores && st.scores[pIdx]) || (st.problemResults && st.problemResults[pIdx]);
        const valStr = scoreObj ? (scoreObj.display || scoreObj.points || '0,00') : '0,00';
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

      // Cột Lớp (Không ghi lớp ở excel theo yêu cầu)
      const classCell = row.getCell(colIdx++);
      classCell.value = '';
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
   * Chức năng chuyên biệt: TÌM KIẾM VÀ TRA CỨU SINH VIÊN THEO MÔN & LỚP
   * Tách riêng hoàn toàn với luồng lọc tải file Excel bảng xếp hạng cuộc thi
   * @param {Object} options { subject, group, keyword, rankingMap }
   * @returns {Array} Danh sách sinh viên tìm thấy
   */
  searchStudents(options = {}) {
    const subject = options.subject || 'all';
    const group = options.group || 'all';
    const keyword = (options.keyword || '').trim().toLowerCase();
    const rankingMap = options.rankingMap || {};

    const hierData = this.HIERARCHICAL_DATA;
    const allStudents = [];

    if (hierData && hierData.bySubject) {
      for (const [subName, subObj] of Object.entries(hierData.bySubject)) {
        if (!subObj.groups) continue;
        for (const [grpName, grpData] of Object.entries(subObj.groups)) {
          const list = Array.isArray(grpData) ? grpData : (grpData.students || []);
          for (const st of list) {
            allStudents.push({
              studentId: st.studentId,
              mssv: st.studentId,
              fullName: st.studentName || st.fullName || '',
              className: st.className || '',
              subject: subName,
              group: grpName
            });
          }
        }
      }
    }

    const filtered = allStudents.filter(st => {
      if (subject !== 'all' && st.subject !== subject) return false;
      if (group !== 'all' && st.group !== group) return false;
      if (keyword) {
        const m1 = (st.studentId || '').toLowerCase().includes(keyword);
        const m2 = (st.fullName || '').toLowerCase().includes(keyword);
        const m3 = (st.className || '').toLowerCase().includes(keyword);
        if (!m1 && !m2 && !m3) return false;
      }
      return true;
    });

    return filtered.map((st, idx) => {
      const cleanId = (st.studentId || '').toUpperCase();
      const bxhEntry = rankingMap[cleanId];
      return {
        stt: idx + 1,
        ...st,
        bxhRank: bxhEntry ? bxhEntry.rank : null,
        bxhScore: bxhEntry && bxhEntry.total ? bxhEntry.total.display : '-',
        isSubmitted: !!bxhEntry,
        status: bxhEntry ? `Đã nộp bài (Hạng #${bxhEntry.rank})` : 'Chưa nộp bài'
      };
    });
  },

  /**
   * Lấy danh sách lớp học phần dạng phẳng để hiển thị dropdown đúng như yêu cầu:
   * "-- Chọn lớp học phần --", "Ngôn ngữ lập trình - Nhóm 1", "Ngôn ngữ lập trình - Nhóm 2"...
   */
  getClassSections() {
    const sections = [];
    const hierData = this.HIERARCHICAL_DATA;
    if (!hierData || !hierData.bySubject) return sections;

    for (const [subName, subObj] of Object.entries(hierData.bySubject)) {
      if (!subObj.groups) continue;
      const groupKeys = Object.keys(subObj.groups);
      groupKeys.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      for (const grp of groupKeys) {
        const grpNumber = parseInt(grp, 10);
        sections.push({
          id: `${subName}|${grp}`,
          subjectName: subName,
          group: grp,
          groupNumber: grpNumber,
          label: `${subName} - Nhóm ${grpNumber}`
        });
      }
    }
    return sections;
  },

  /**
   * Lọc danh sách sinh viên theo lớp học phần VÀ CHỈ LẤY NHỮNG AI ĐÃ NỘP BÀI TRÊN BXH
   * Bỏ cột lớp, có đầy đủ điểm chi tiết từng câu
   * @param {Object} options { sectionId, rankingStudents, problems, keyword }
   * @returns {Object} { sectionLabel, problems, students }
   */
  filterSubmittedStudentsBySection(options = {}) {
    const sectionId = options.sectionId || '';
    const rankingStudents = options.rankingStudents || [];
    const problems = options.problems || [];
    const keyword = (options.keyword || '').trim().toLowerCase();
    const onlyGreaterThanZero = !!options.onlyGreaterThanZero;

    // Bản đồ thí sinh trên BXH theo MSSV
    const rankingMap = {};
    rankingStudents.forEach(st => {
      if (st.mssv) {
        rankingMap[st.mssv.toUpperCase()] = st;
      }
    });

    // Lấy danh sách sinh viên của lớp học phần từ CSDL
    let targetStudents = [];
    let sectionLabel = 'Tất cả lớp học phần';

    if (sectionId && sectionId.includes('|')) {
      const [subName, grp] = sectionId.split('|');
      const hierData = this.HIERARCHICAL_DATA;
      if (hierData && hierData.bySubject && hierData.bySubject[subName] && hierData.bySubject[subName].groups) {
        const grpData = hierData.bySubject[subName].groups[grp];
        if (grpData) {
          const list = Array.isArray(grpData) ? grpData : (grpData.students || []);
          targetStudents = list.map(s => ({
            studentId: s.studentId,
            fullName: s.studentName || s.fullName || '',
            subjectName: subName,
            group: grp
          }));
        }
      }
      sectionLabel = `${subName} - Nhóm ${parseInt(grp, 10)}`;
    } else {
      // Nếu không chọn sectionId cụ thể, lấy tất cả sinh viên
      const hierData = this.HIERARCHICAL_DATA;
      if (hierData && hierData.bySubject) {
        for (const [subName, subObj] of Object.entries(hierData.bySubject)) {
          if (!subObj.groups) continue;
          for (const [grp, grpData] of Object.entries(subObj.groups)) {
            const list = Array.isArray(grpData) ? grpData : (grpData.students || []);
            for (const s of list) {
              targetStudents.push({
                studentId: s.studentId,
                fullName: s.studentName || s.fullName || '',
                subjectName: subName,
                group: grp
              });
            }
          }
        }
      }
    }

    // CHỈ GIỮ LẠI NHỮNG AI ĐÃ NỘP BÀI TRÊN BXH (Bỏ qua những ai chưa nộp)
    const submitted = [];
    targetStudents.forEach(st => {
      const cleanId = (st.studentId || '').toUpperCase();
      const bxhEntry = rankingMap[cleanId];
      if (bxhEntry) {
        if (keyword) {
          const m1 = cleanId.toLowerCase().includes(keyword);
          const m2 = (st.fullName || '').toLowerCase().includes(keyword);
          if (!m1 && !m2) return;
        }

        // Lọc người có tổng điểm > 0 nếu tùy chọn được bật
        if (onlyGreaterThanZero) {
          let totalVal = 0;
          if (bxhEntry.total && typeof bxhEntry.total.value === 'number') {
            totalVal = bxhEntry.total.value;
          } else if (bxhEntry.total && bxhEntry.total.display) {
            totalVal = parseFloat(String(bxhEntry.total.display).replace(',', '.')) || 0;
          }
          if (totalVal <= 0) return;
        }

        submitted.push({
          mssv: cleanId,
          studentId: cleanId,
          fullName: st.fullName || bxhEntry.fullName || '',
          rank: bxhEntry.rank || 0,
          scores: bxhEntry.scores || [],
          total: bxhEntry.total || { display: '0,0', value: 0 },
          profileUrl: bxhEntry.profileUrl || '',
          username: bxhEntry.username || cleanId,
          subjectName: st.subjectName,
          group: st.group
        });
      }
    });

    // Sắp xếp danh sách nộp bài theo thứ hạng tăng dần
    submitted.sort((a, b) => a.rank - b.rank);

    return {
      sectionLabel: sectionLabel,
      totalClassStudents: targetStudents.length,
      problems: problems,
      students: submitted
    };
  },

  /**
   * Tạo workbook Excel cho lớp học phần (bỏ cột lớp, thay bằng điểm từng câu)
   */
  async createSectionScoreExcelWorkbook(sectionData, options = {}) {
    if (typeof ExcelJS === 'undefined') {
      throw new Error('Thư viện ExcelJS chưa được nạp!');
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CODER HUSC Extension';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet('Điểm Lớp Học Phần', {
      views: [{ showGridLines: true }]
    });

    const problems = sectionData.problems || [];
    const students = sectionData.students || [];
    const sectionLabel = sectionData.sectionLabel || options.title || 'Lớp Học Phần';

    // 1. TIÊU ĐỀ BẢNG ĐIỂM
    const totalCols = 3 + problems.length + 1; // Rank, Mã SV, Họ tên + các bài + Total
    const lastColLetter = String.fromCharCode(64 + Math.min(totalCols, 26));
    const titleRange = `A1:${lastColLetter}1`;

    sheet.mergeCells(titleRange);
    const titleCell = sheet.getCell('A1');
    titleCell.value = `BẢNG ĐIỂM KỲ THI - ${sectionLabel.toUpperCase()}`;
    titleCell.font = { name: 'Times New Roman', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    titleCell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1F4E79' }
    };
    sheet.getRow(1).height = 32;

    // 2. TIÊU ĐỀ CÁC CỘT (BỎ CỘT LỚP, CÓ ĐIỂM TỪNG CÂU)
    const headers = ['Rank', 'Mã SV', 'Họ và tên'];
    problems.forEach(p => {
      headers.push(p.label || `Bài ${p.probNum}`);
    });
    headers.push('Total');

    const headerRow = sheet.addRow(headers);
    headerRow.height = 24;
    headerRow.eachCell((cell) => {
      cell.font = { name: 'Times New Roman', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' }
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });

    // Độ rộng các cột
    const columnsConfig = [
      { width: 8 },   // Rank
      { width: 16 },  // Mã SV
      { width: 28 }   // Họ và tên
    ];
    problems.forEach(() => {
      columnsConfig.push({ width: 12 }); // Mỗi bài
    });
    columnsConfig.push({ width: 14 });   // Total
    sheet.columns = columnsConfig;

    const thinBorder = {
      top: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      left: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      bottom: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      right: { style: 'thin', color: { argb: 'FFD3D3D3' } }
    };

    // 3. DỮ LIỆU THÍ SINH ĐÃ NỘP BÀI
    students.forEach((st, idx) => {
      const rowValues = [
        st.rank || (idx + 1),
        st.mssv || st.studentId,
        st.fullName || ''
      ];

      // Điểm từng câu
      problems.forEach((p, pIdx) => {
        const scoreObj = (st.scores && st.scores[pIdx]);
        const valStr = scoreObj ? (scoreObj.display || scoreObj.points || '0,00') : '0,00';
        rowValues.push(valStr);
      });

      // Total
      rowValues.push(st.total ? st.total.display : '0,0');

      const row = sheet.addRow(rowValues);
      row.height = 20;

      const isEven = idx % 2 === 1;
      const rowFill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: isEven ? 'FFF9FAFB' : 'FFFFFFFF' }
      };

      row.eachCell((cell, colNum) => {
        cell.font = { name: 'Times New Roman', size: 11 };
        cell.fill = rowFill;
        cell.border = thinBorder;
        cell.alignment = {
          vertical: 'middle',
          horizontal: colNum === 3 ? 'left' : 'center'
        };
      });
    });

    return workbook;
  },

  /**
   * Tạo workbook Excel cho danh sách sinh viên theo môn / lớp
   */
  async createStudentsListWorkbook(studentsList, options = {}) {
    if (typeof ExcelJS === 'undefined') {
      throw new Error('Thư viện ExcelJS chưa được nạp!');
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CODER HUSC Extension';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet('Danh Sách Sinh Viên', {
      views: [{ showGridLines: true }]
    });

    // Tiêu đề danh sách
    const title = options.title || 'DANH SÁCH SINH VIÊN';
    sheet.mergeCells('A1:H1');
    const titleCell = sheet.getCell('A1');
    titleCell.value = title.toUpperCase();
    titleCell.font = { name: 'Times New Roman', size: 13, bold: true, color: { argb: 'FFFFFFFF' } };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    titleCell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1B365D' }
    };
    sheet.getRow(1).height = 30;

    // Header các cột
    const headers = ['STT', 'Mã SV', 'Họ và tên', 'Lớp', 'Môn học', 'Nhóm HP', 'Điểm BXH', 'Trạng thái'];
    const headerRow = sheet.addRow(headers);
    headerRow.height = 24;
    headerRow.eachCell((cell) => {
      cell.font = { name: 'Times New Roman', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF2F5597' }
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });

    sheet.columns = [
      { width: 8 },   // STT
      { width: 16 },  // Mã SV
      { width: 28 },  // Họ và tên
      { width: 14 },  // Lớp
      { width: 26 },  // Môn học
      { width: 12 },  // Nhóm HP
      { width: 14 },  // Điểm BXH
      { width: 16 }   // Trạng thái
    ];

    const thinBorder = {
      top: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      left: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      bottom: { style: 'thin', color: { argb: 'FFD3D3D3' } },
      right: { style: 'thin', color: { argb: 'FFD3D3D3' } }
    };

    studentsList.forEach((st, idx) => {
      const row = sheet.addRow([
        idx + 1,
        st.studentId || st.mssv,
        st.fullName || '',
        st.className || '',
        st.subject || '',
        st.group || '',
        st.bxhScore !== undefined && st.bxhScore !== null ? st.bxhScore : '-',
        st.status || (st.bxhScore !== undefined && st.bxhScore !== null ? 'Đã nộp bài' : 'Chưa nộp bài')
      ]);
      row.height = 20;

      const isEven = idx % 2 === 1;
      const rowFill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: isEven ? 'FFF9FAFB' : 'FFFFFFFF' }
      };

      row.eachCell((cell, colNum) => {
        cell.font = { name: 'Times New Roman', size: 11 };
        cell.fill = rowFill;
        cell.border = thinBorder;
        cell.alignment = {
          vertical: 'middle',
          horizontal: colNum === 3 ? 'left' : 'center'
        };
      });
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
