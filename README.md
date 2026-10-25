# CODER HUSC - Extension Xuất Bảng Xếp Hạng Excel Chuẩn SPIT

Tiện ích mở rộng (Chrome Extension) hỗ trợ tự động đọc dữ liệu bảng xếp hạng từ website [CODER HUSC](https://coder.husc.edu.vn), lọc các tài khoản theo định dạng **Mã sinh viên** (ví dụ: `23T1020034`, `26T1020029`, `26T1130037`...) và xuất ra file Excel (.xlsx) với định dạng chuẩn đẹp giống hệt mẫu bảng xếp hạng SPIT.

---

## 🎯 Các tính năng nổi bật

1. **Menu xả xuống lọc đối tượng thí sinh (Chọn 1 trong 3)**:
   - **Chỉ lấy có Mã sinh viên (Expert)**: Tự động nhận diện thí sinh theo mã sinh viên chuẩn ĐH Khoa học Huế (`\d{2}[A-Za-z]\d{7}` như `23T1020034`).
   - **Chỉ lấy Tân sinh viên (Newbie)**: Chỉ giữ lại các bạn tân sinh viên khóa mới nhất (mặc định lấy 2 số năm hiện tại + `T`, ví dụ: `26T...` và cho phép tùy chỉnh số khóa).
   - **Lấy tất cả (kể cả không có Mã sinh viên)**: Giữ lại toàn bộ mọi tài khoản tham gia trên bảng xếp hạng (kể cả tài khoản tự do, admin, khách không có mã SV).

2. **Lọc thí sinh có Tổng điểm > 0 (nằm ngay dưới menu xả xuống)**:
   - Tích chọn: **"Chỉ lấy thí sinh có tổng điểm > 0 (bỏ qua 0 điểm)"**.
   - Khi bật tùy chọn này, các thí sinh có tổng điểm bằng 0 sẽ tự động được loại bỏ khỏi danh sách xuất Excel.

4. **Định dạng Excel chuẩn 100% như ảnh mẫu**:
   - **Hàng 1**: Tiêu đề gộp cột `BẢNG XẾP HẠNG [TÊN KỲ THI]` (Nền xanh Navy đậm `#1F4E79`, chữ trắng in hoa đậm, căn giữa).
   - **Hàng 2**: Tiêu đề các cột `Rank`, `Tên Thành Viên`, `1 (20)`, `2 (20)`, `3 (30)`... `Total`, `Note`, `Họ tên`, `Lớp` (Nền xanh dương `#4472C4`, chữ đen in đậm, căn giữa).
   - **Top 1, 2, 3 (NHẤT, NHÌ, BA)**: Nền **MÀU ĐỎ TƯƠI** (`#FF0000`), chữ đậm, tự động điền cột Note: `NHẤT`, `NHÌ`, `BA`.
   - **Cột Tên Thành Viên**: Tích hợp sẵn liên kết Hyperlink dẫn thẳng tới trang profile thí sinh trên CODER HUSC.
   - **Định dạng số điểm**: Hiển thị điểm số theo chuẩn thập phân Việt Nam (`20,00`, `30,00`, `100,0`).
   - Đầy đủ viền mỏng (Thin Border) cho toàn bộ các ô trong bảng.

3. **Tự động điền Họ tên và Lớp**:
   - Tích hợp tính năng **Danh bạ sinh viên (Mapping)**: Bạn có thể dán hoặc nhập danh sách sinh viên (`MSSV  Họ và tên  Lớp`), extension sẽ lưu an toàn trong trình duyệt và tự động tra cứu để điền chính xác Họ tên, Lớp cho từng sinh viên.
   - Tự động nhận diện tên nếu thí sinh đặt username có kèm họ tên (ví dụ: `24T1020386_TranDinhKhanhQuan`).

4. **Hai cách sử dụng linh hoạt**:
   - **Cách 1 (Nhanh nhất)**: Bấm trực tiếp nút **"Xuất Excel SPIT"** xuất hiện ngay trên trang bảng xếp hạng của CODER HUSC.
   - **Cách 2**: Bấm icon Extension trên thanh công cụ để xuất từ tab hiện tại, hoặc kéo thả / dán mã HTML bất kỳ để xuất offline.

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
5. Tiện ích **CODER HUSC - Xuất Bảng Xếp Hạng Excel** sẽ xuất hiện trên danh sách tiện ích của trình duyệt! (Bạn nên ghim tiện ích lên thanh công cụ để tiện sử dụng).

---

## 📖 Hướng dẫn sử dụng chi tiết

### Cách 1 (Tiện lợi nhất): Bấm nút "Thống kê" ở Header góc trái trên trang web
1. Mở bất kỳ trang nào trên website [CODER HUSC](https://coder.husc.edu.vn).
2. Ngay trên thanh Header ở góc trái (cạnh logo CODER HUSC), bạn sẽ thấy nút **"Thống kê"** màu xanh lá.
3. Bấm vào nút này để mở bảng điều khiển nổi ngay trên trang web:
   - Xem thống kê số lượng sinh viên, số bị loại.
   - Bật/tắt tùy chọn: **Chỉ lấy điểm > 0** hoặc **Chỉ lấy Tân sinh viên (26T...)**.
   - Bấm **"Xuất file Excel"** để tải file Excel về máy ngay lập tức!
   - Không cần phải mở menu tiện ích Extension của Chrome.

### Cách 2: Sử dụng qua Popup Extension (Giao diện siêu tinh gọn)
1. Bấm vào biểu tượng extension trên thanh công cụ trình duyệt khi đang ở trang bảng xếp hạng.
2. Bấm nút **"Xuất Excel từ Tab này"** để tải file Excel về máy.
3. Hoặc bấm **"Xem trước dữ liệu"** để xem trước danh sách thí sinh.
4. Tích chọn nhanh theo nhu cầu:
   - ☑ **Chỉ lấy thí sinh có tổng điểm > 0**: Loại bỏ thí sinh 0 điểm.
   - ☑ **Chỉ lấy Tân sinh viên**: Chỉ giữ lại các bạn có mã bắt đầu bằng `26T...` (tự động theo năm hiện tại).

### Cách 3: Quản lý danh bạ để tự động điền Họ tên & Lớp
1. Bấm vào icon Extension > Chọn tab **"Danh bạ SV"**.
2. Dán danh sách sinh viên của bạn vào ô nhập liệu theo định dạng mỗi dòng một sinh viên:
   ```text
   26T1020029    Trần Nhơn Hoàng Đạt    26T102
   26T1020007    Nguyễn Tuấn Anh        26T102
   26T1020047    Nguyễn Gia Hiều        26T102
   ```
   *(Hỗ trợ phân cách bằng phím Tab từ Excel, dấu phẩy, dấu gạch đứng hoặc khoảng trắng)*.
3. Bấm **"Lưu danh bạ"**. Dữ liệu sẽ được lưu tự động trên máy của bạn và áp dụng cho tất cả các lần xuất Excel tiếp theo!

---

## 📂 Danh mục các file trong tiện ích

- `manifest.json`: Cấu hình Chrome Extension (Manifest V3).
- `core.js`: Bộ máy xử lý bóc tách HTML, lọc MSSV và tạo file ExcelJS.
- `content.js` & `content.css`: Tự động gắn nút "Xuất Excel SPIT" trên website.
- `popup.html`, `popup.css`, `popup.js`: Giao diện điều khiển của tiện ích.
- `exceljs.min.js`: Thư viện tạo file Excel chuẩn định dạng (.xlsx).
- `Bang_Xep_Hang_SPIT_NEWBIE_CONTEST_17.xlsx`: File Excel mẫu thực tế tạo ra từ kỳ thi SPIT Newbie Contest 17 để bạn kiểm tra đối chiếu.
