# CODER HUSC - Extension Xuất Bảng Xếp Hạng Excel & Quản Lý Sinh Viên Theo Môn Lớp

Tiện ích mở rộng (Chrome Extension) hỗ trợ tự động đọc dữ liệu bảng xếp hạng từ website [CODER HUSC](https://coder.husc.edu.vn), nhận diện mã sinh viên, tra cứu họ tên tự động và xuất ra file Excel (.xlsx) chuẩn mẫu SPIT. Đồng thời tích hợp bộ công cụ tra cứu sinh viên theo Môn học và Nhóm học phần tiện lợi ngay trên thanh Header của website.

---

## 🎯 Các tính năng nổi bật

### 1. Hai nút chức năng dạng Dock nổi (Floating Dock) cố định sát mép phải màn hình
- **Tách rời hoàn toàn khỏi web**: Được gắn cố định (`position: fixed; right: 0;`) bám sát mép phải màn hình theo đúng mẫu giao diện hiện đại, không chèn vào DOM trang làm xô lệch bố cục web và luôn luôn hiển thị sẵn sàng khi cuộn trang.
- **Nút "Thống kê" (Nền xanh dương - Icon Biểu đồ tròn)**:
  - Mở bảng điều khiển phân tích bảng xếp hạng cuộc thi hiện tại.
  - Bộ lọc đối tượng:
    - *Chỉ lấy có Mã sinh viên (Expert)*.
    - *Chỉ lấy Tân sinh viên (Newbie)* (mặc định lấy 2 số năm hiện tại + `T`, ví dụ: `26T...`).
    - *Lấy tất cả* (kể cả tài khoản không có mã SV).
  - Tùy chọn: *Chỉ lấy thí sinh có tổng điểm > 0* (bỏ qua 0 điểm).
  - **Bảng xem trước dữ liệu nhanh**: Đã thay cột "Họ tên" (bị lặp với cột MSSV) thành các cột điểm từng câu chi tiết (`Bài 1`, `Bài 2`, `Bài 3`...) và `Total`.
  - Nút **Xuất file Excel** bảng xếp hạng cuộc thi chuẩn định dạng SPIT.

- **Nút "Tìm SV (Môn/Lớp)" (Nền xanh lá emerald - Icon Máy tính)**:
  - Tách riêng chuyên biệt để phục vụ việc tra cứu và quản lý điểm số theo lớp học phần.
  - **1 Dropdown duy nhất theo lớp học phần**:
    - Placeholder: `-- Chọn lớp học phần --`
    - `Ngôn ngữ lập trình - Nhóm 1` đến `Nhóm 8`
    - `Kỹ thuật lập trình - Nhóm 1`, `Nhóm 2`
  - **Chỉ hiển thị danh sách những sinh viên đã nộp bài**: Tự động lọc ra các thí sinh trong lớp học phần đã nộp bài và có kết quả trên Bảng xếp hạng kỳ thi.
  - **Bỏ cột lớp, thay bằng điểm từng câu**: Cả bảng xem trực quan và file Excel xuất ra đều bỏ cột Lớp hành chính, thay thế bằng các cột điểm chi tiết cho từng bài thi (`Bài 1`, `Bài 2`, `Bài 3`... và `Total`).
  - **Thẻ thống kê sĩ số**: Hiển thị nhanh số sinh viên đã nộp bài / tổng sĩ số của lớp học phần.
  - **Tìm nhanh tức thì**: Ô tìm kiếm theo Mã sinh viên hoặc Họ và tên trong lớp.
  - **Nút "Xuất file Excel lớp này"**: Tải về file Excel bảng điểm chi tiết của lớp học phần đã chọn.

---

### 2. Quy ước xuất Excel bảng xếp hạng cuộc thi (Chuẩn mẫu SPIT)
- **Cột Lớp để trống giá trị**: Cột thứ 10 (`Lớp`) vẫn giữ nguyên tiêu đề và đường viền chuẩn form, nhưng giá trị các ô của thí sinh được để trống theo đúng quy định mẫu SPIT (`Bang_Xep_Hang_SPIT_NEWBIE_CONTEST_17.xlsx`).
- **Hàng 1**: Tiêu đề gộp cột `BẢNG XẾP HẠNG [TÊN KỲ THI]` (Nền xanh Navy đậm `#1F4E79`, chữ trắng in hoa đậm, căn giữa).
- **Hàng 2**: Tiêu đề các cột `Rank`, `Tên Thành Viên`, `1 (20)`, `2 (20)`, `3 (30)`... `Total`, `Note`, `Họ tên`, `Lớp` (Nền xanh dương `#4472C4`, chữ đen in đậm, căn giữa).
- **Top 1, 2, 3**: Nền trắng đồng nhất (đã bỏ màu đỏ và bỏ ghi sẵn NHẤT, NHÌ, BA theo yêu cầu, cột Note để trống để người dùng tùy ý ghi chú).
- **Cột Tên Thành Viên**: Tích hợp sẵn liên kết Hyperlink dẫn thẳng tới trang profile thí sinh trên CODER HUSC.
- **Định dạng số điểm**: Hiển thị điểm số theo chuẩn thập phân Việt Nam (`20,00`, `30,00`, `100,0`).
- Đầy đủ viền mỏng (Thin Border) cho toàn bộ các ô trong bảng.

---

### 3. Tra cứu Họ tên chuẩn xác từ `data.txt`
- Tự động bóc tách và phân cấp danh bạ sinh viên từ file `data.txt` thành 2 môn học và các nhóm học phần.
- **Chỉ lấy dữ liệu từ file**: Đã bỏ chức năng tự tách tên sau ký tự `_`. Tên sinh viên được tra cứu chính xác 100% từ cơ sở dữ liệu `data.txt` / `students_data.js`.
- **Xem trước hiển thị đúng Họ và tên**: Bảng xem trước hiển thị đầy đủ Họ tên của sinh viên tra từ file thay vì chỉ hiển thị mỗi mã sinh viên.

---

## 🛠 Hướng dẫn cài đặt vào trình duyệt (Chrome, Cốc Cốc, Edge, Brave...)

1. Mở trình duyệt và truy cập trang quản lý tiện ích:
   - Trên **Chrome**: Nhập `chrome://extensions` vào thanh địa chỉ và bấm Enter.
   - Trên **Edge**: Nhập `edge://extensions` vào thanh địa chỉ.
   - Trên **Cốc Cốc**: Nhập `coccoc://extensions`.
2. Bật công tắc **"Chế độ dành cho nhà phát triển" (Developer mode)** ở góc trên bên phải màn hình.
3. Bấm vào nút **"Tải tiện ích đã giải nén" (Load unpacked)** ở góc trên bên trái.
4. Chọn thư mục chứa extension này:
   ```
   e:\tool\coder
   ```
5. Tiện ích **CODER HUSC - Xuất Bảng Xếp Hạng Excel** đã sẵn sàng sử dụng!

---

## 📖 Hướng dẫn sử dụng trên website CODER HUSC
 
1. Đăng nhập và mở bất kỳ trang nào trên website [CODER HUSC](https://coder.husc.edu.vn).
2. Nhìn sang **mép phải màn hình** (khoảng giữa màn hình), bạn sẽ thấy cụm 2 nút nổi tiện dụng:
   - **Nút "Thống kê" (Xanh dương, Icon Biểu đồ)**: Bấm vào để mở modal thống kê cuộc thi, chọn lọc Newbie/Expert, lọc điểm > 0 và bấm "Xuất file Excel".
   - **Nút "Tìm SV (Môn/Lớp)" (Xanh emerald, Icon Máy tính)**: Bấm vào để tra cứu sinh viên theo Môn học (Ngôn ngữ lập trình, Kỹ thuật lập trình), theo Nhóm học phần, kiểm tra xem sinh viên nào trong lớp đã nộp bài, đạt bao nhiêu điểm, hoặc xuất danh sách sinh viên theo lớp học phần ra file Excel!

---

## 📂 Danh mục các file trong tiện ích

- `manifest.json`: Cấu hình Chrome Extension (Manifest V3).
- `core.js`: Bộ máy xử lý bóc tách HTML, đối chiếu sinh viên theo môn/lớp, xuất Excel chuẩn SPIT.
- `students_data.js`: Cơ sở dữ liệu danh bạ trích xuất từ `data.txt` được tổ chức phân cấp theo Môn học & Nhóm học phần.
- `content.js` & `content.css`: Gắn cụm 2 nút [Thống kê] & [Tìm SV (Môn/Lớp)] trên Header và hiển thị 2 modal độc lập.
- `popup.html`, `popup.css`, `popup.js`: Giao diện Popup của extension trên thanh công cụ trình duyệt.
- `data.txt`: File danh sách sinh viên gốc theo từng môn và nhóm học phần.
- `exceljs.min.js`: Thư viện xử lý Excel chuẩn định dạng (.xlsx).
