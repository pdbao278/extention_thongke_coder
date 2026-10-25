/**
 * students_data.js - Cơ sở dữ liệu sinh viên phân cấp theo Môn học và Nhóm/Lớp học phần
 * Tự động trích xuất từ data.txt
 * - Tổng số sinh viên duy nhất: 368
 * - Các môn: Ngôn ngữ lập trình (TIN2015), Kỹ thuật lập trình (TIN2022)
 */

var HUSC_STUDENTS_DATA = {
  "metadata": {
    "subjects": [
      {
        "subjectName": "Ngôn ngữ lập trình",
        "subjectCode": "TIN2015",
        "groups": [
          "001",
          "002",
          "003",
          "004",
          "005",
          "006",
          "007",
          "008"
        ],
        "totalEnrollments": 367
      },
      {
        "subjectName": "Kỹ thuật lập trình",
        "subjectCode": "TIN2022",
        "groups": [
          "001",
          "002"
        ],
        "totalEnrollments": 79
      }
    ],
    "totalUniqueStudents": 368
  },
  "bySubject": {
    "Ngôn ngữ lập trình": {
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "groups": {
        "001": {
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001",
          "totalStudents": 56,
          "students": [
            {
              "studentId": "26T1080001",
              "studentName": "Hoàng Ngọc An",
              "className": "26T108"
            },
            {
              "studentId": "26T1080002",
              "studentName": "Nguyễn Ngọc Trâm Anh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080003",
              "studentName": "Nguyễn Thái Anh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080004",
              "studentName": "Nguyễn Thị Lan Anh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080005",
              "studentName": "Trần Đặng Vân Anh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080006",
              "studentName": "Phạm Võ Quốc Bảo",
              "className": "26T108"
            },
            {
              "studentId": "26T1080009",
              "studentName": "Lê Thị Ngọc Diệp",
              "className": "26T108"
            },
            {
              "studentId": "26T1080010",
              "studentName": "Nguyễn Bá Doãn",
              "className": "26T108"
            },
            {
              "studentId": "26T1080012",
              "studentName": "Bùi Văn Duy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080013",
              "studentName": "Nguyễn Quang Duy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080007",
              "studentName": "Hà Ngọc Đạt",
              "className": "26T108"
            },
            {
              "studentId": "26T1080011",
              "studentName": "Lâm Nhật Việt Đức",
              "className": "26T108"
            },
            {
              "studentId": "26T1080014",
              "studentName": "Lê Việt Hà",
              "className": "26T108"
            },
            {
              "studentId": "26T1080016",
              "studentName": "Lê Thuận Hiếu",
              "className": "26T108"
            },
            {
              "studentId": "26T1080017",
              "studentName": "Nguyễn Trung Hiếu",
              "className": "26T108"
            },
            {
              "studentId": "26T1080015",
              "studentName": "Tạ Quang Hiệp",
              "className": "26T108"
            },
            {
              "studentId": "26T1080019",
              "studentName": "Dương Nhật Tuấn Huy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080020",
              "studentName": "Hoàng Trần Gia Huy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080021",
              "studentName": "Hoàng Văn Nhật Huy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080022",
              "studentName": "Nguyễn Phước Bảo Hoàng Nhật Huy",
              "className": "26T108"
            },
            {
              "studentId": "26T1080018",
              "studentName": "Hà Văn Lê Hùng",
              "className": "26T108"
            },
            {
              "studentId": "26T1080023",
              "studentName": "Trương Nguyễn Viết Khoa",
              "className": "26T108"
            },
            {
              "studentId": "26T1080024",
              "studentName": "Hoàng Văn Kiệt",
              "className": "26T108"
            },
            {
              "studentId": "26T1080025",
              "studentName": "Trần Vương Anh Kiệt",
              "className": "26T108"
            },
            {
              "studentId": "26T1080026",
              "studentName": "Văn Thị Lài",
              "className": "26T108"
            },
            {
              "studentId": "26T1080027",
              "studentName": "Hoàng Nhật Long",
              "className": "26T108"
            },
            {
              "studentId": "26T1080028",
              "studentName": "Lê Tự Hoàng Long",
              "className": "26T108"
            },
            {
              "studentId": "26T1080031",
              "studentName": "Đoàn Công Duy Mạnh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080030",
              "studentName": "Nguyễn Viết Phúc Mẫn",
              "className": "26T108"
            },
            {
              "studentId": "26T1080032",
              "studentName": "Đỗ Văn Khôi Ngô",
              "className": "26T108"
            },
            {
              "studentId": "26T1080033",
              "studentName": "Trần Duy Bảo Nguyên",
              "className": "26T108"
            },
            {
              "studentId": "26T1080034",
              "studentName": "Nguyễn Hoàng Nhân",
              "className": "26T108"
            },
            {
              "studentId": "26T1080035",
              "studentName": "Nguyễn Khánh Nhật",
              "className": "26T108"
            },
            {
              "studentId": "26T1080058",
              "studentName": "Silaphet Nunee",
              "className": "26T108"
            },
            {
              "studentId": "26T1080059",
              "studentName": "Khounnaseng Phetninda",
              "className": "26T108"
            },
            {
              "studentId": "26T1080036",
              "studentName": "Nguyễn Văn Phong",
              "className": "26T108"
            },
            {
              "studentId": "26T1080039",
              "studentName": "Đỗ Đình Quang",
              "className": "26T108"
            },
            {
              "studentId": "26T1080037",
              "studentName": "Nguyễn Kim Thế Quân",
              "className": "26T108"
            },
            {
              "studentId": "26T1080038",
              "studentName": "Phan Cảnh Bảo Quân",
              "className": "26T108"
            },
            {
              "studentId": "26T1080040",
              "studentName": "Nguyễn Thị Như Quỳnh",
              "className": "26T108"
            },
            {
              "studentId": "26T1080041",
              "studentName": "Trương Hữu Minh Tâm",
              "className": "26T108"
            },
            {
              "studentId": "26T1080042",
              "studentName": "Bùi Phương Thảo",
              "className": "26T108"
            },
            {
              "studentId": "26T1080043",
              "studentName": "Dương Thái Thiện",
              "className": "26T108"
            },
            {
              "studentId": "26T1080044",
              "studentName": "Hoàng Anh Thư",
              "className": "26T108"
            },
            {
              "studentId": "26T1080045",
              "studentName": "Nguyễn Trần Đức Toàn",
              "className": "26T108"
            },
            {
              "studentId": "26T1080046",
              "studentName": "Hoàng Ngọc Bảo Trang",
              "className": "26T108"
            },
            {
              "studentId": "26T1080047",
              "studentName": "Nguyễn Văn Triều",
              "className": "26T108"
            },
            {
              "studentId": "26T1080048",
              "studentName": "Hoàng Nguyễn Phi Trường",
              "className": "26T108"
            },
            {
              "studentId": "26T1080049",
              "studentName": "Huỳnh Anh Tuấn",
              "className": "26T108"
            },
            {
              "studentId": "26T1080050",
              "studentName": "Hồ Phước Thanh Tùng",
              "className": "26T108"
            },
            {
              "studentId": "26T1080052",
              "studentName": "Phan Khánh Việt",
              "className": "26T108"
            },
            {
              "studentId": "26T1080053",
              "studentName": "Dụng Văn Vũ",
              "className": "26T108"
            },
            {
              "studentId": "26T1080054",
              "studentName": "Lê Đình Vũ",
              "className": "26T108"
            },
            {
              "studentId": "26T1080055",
              "studentName": "Nguyễn Dương Vũ",
              "className": "26T108"
            },
            {
              "studentId": "26T1080056",
              "studentName": "Trần Anh Vũ",
              "className": "26T108"
            },
            {
              "studentId": "26T1080057",
              "studentName": "Đỗ Thị Hà Vy",
              "className": "26T108"
            }
          ]
        },
        "002": {
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002",
          "totalStudents": 48,
          "students": [
            {
              "studentId": "26T1020001",
              "studentName": "Lô Bảo An",
              "className": "26T102"
            },
            {
              "studentId": "26T1020005",
              "studentName": "Lê Tuấn Anh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020009",
              "studentName": "Trần Nguyễn Đức Anh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020011",
              "studentName": "Lê Hoàng Nhật Bảo",
              "className": "26T102"
            },
            {
              "studentId": "26T1020018",
              "studentName": "Võ Ngọc Bảo Châu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020037",
              "studentName": "Phan Cảnh Thành Duy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020034",
              "studentName": "Nguyễn Nhật Dương",
              "className": "26T102"
            },
            {
              "studentId": "26T1020025",
              "studentName": "Hồ Thành Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020030",
              "studentName": "Hoàng Minh Đức",
              "className": "26T102"
            },
            {
              "studentId": "26T1020040",
              "studentName": "Nguyễn Anh Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1020047",
              "studentName": "Nguyễn Gia Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020045",
              "studentName": "Võ Hoàng Hiệp",
              "className": "26T102"
            },
            {
              "studentId": "26T1020057",
              "studentName": "Trần Thiên Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020066",
              "studentName": "Lê Viết Gia Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020070",
              "studentName": "Trần Văn Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020061",
              "studentName": "Nguyễn Văn Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020073",
              "studentName": "Nguyễn Khang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020080",
              "studentName": "Hồ Đăng Khoa",
              "className": "26T102"
            },
            {
              "studentId": "26T1020084",
              "studentName": "Nguyễn Thanh Anh Kiệt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020088",
              "studentName": "Nguyễn Viết Duy Kỳ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020094",
              "studentName": "Hồ Khánh Linh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020098",
              "studentName": "Lê Huy Long",
              "className": "26T102"
            },
            {
              "studentId": "26T1020101",
              "studentName": "Hồ Tuấn Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020105",
              "studentName": "Lê Vũ Quốc Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020106",
              "studentName": "Nguyễn Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020112",
              "studentName": "Lê Hoàng Nam",
              "className": "26T102"
            },
            {
              "studentId": "26T1020113",
              "studentName": "Lê Nhật Nam",
              "className": "26T102"
            },
            {
              "studentId": "26T1020116",
              "studentName": "Tôn Nữ Bảo Ngọc",
              "className": "26T102"
            },
            {
              "studentId": "26T1020120",
              "studentName": "Bùi Thị Thanh Nhàn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020129",
              "studentName": "Mai Hồng Nhung",
              "className": "26T102"
            },
            {
              "studentId": "26T1020135",
              "studentName": "Đỗ Thái Phong",
              "className": "26T102"
            },
            {
              "studentId": "26T1020138",
              "studentName": "Ngô Viết Đức Phú",
              "className": "26T102"
            },
            {
              "studentId": "26T1020146",
              "studentName": "Đào Hữu Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020147",
              "studentName": "Nguyễn Nhật Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020141",
              "studentName": "Hồ Xuân Minh Quân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020150",
              "studentName": "Nguyễn Tấn Sang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020153",
              "studentName": "Cao Ngọc Hoàng Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020157",
              "studentName": "Trần Mai Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020160",
              "studentName": "Nguyễn Tất Tuấn Tài",
              "className": "26T102"
            },
            {
              "studentId": "26T1020167",
              "studentName": "Trương Tiến Thắng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020178",
              "studentName": "Đặng Ngọc Minh Thư",
              "className": "26T102"
            },
            {
              "studentId": "26T1020181",
              "studentName": "Lê Trọng Việt Tiến",
              "className": "26T102"
            },
            {
              "studentId": "26T1020188",
              "studentName": "Trần Lê Thanh Trí",
              "className": "26T102"
            },
            {
              "studentId": "26T1020191",
              "studentName": "Hoàng Ngọc Thành Trung",
              "className": "26T102"
            },
            {
              "studentId": "25T1020368",
              "studentName": "Đào Duy Tuệ",
              "className": "25T102"
            },
            {
              "studentId": "26T1020197",
              "studentName": "Nguyễn Tiến Tú",
              "className": "26T102"
            },
            {
              "studentId": "26T1020207",
              "studentName": "Bùi Trần Hoàng Vũ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020209",
              "studentName": "Ngô Văn Vũ",
              "className": "26T102"
            }
          ]
        },
        "003": {
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003",
          "totalStudents": 49,
          "students": [
            {
              "studentId": "26T1020008",
              "studentName": "Nguyễn Tuấn Anh",
              "className": "26T102"
            },
            {
              "studentId": "25T1080001",
              "studentName": "Huỳnh Trọng Ân",
              "className": "25T108"
            },
            {
              "studentId": "26T1020003",
              "studentName": "Trương Khánh Ân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020013",
              "studentName": "Nguyễn Văn Thái Bảo",
              "className": "26T102"
            },
            {
              "studentId": "26T1020015",
              "studentName": "Lê Thị Bé",
              "className": "26T102"
            },
            {
              "studentId": "26T1020021",
              "studentName": "Trần Phương Cường",
              "className": "26T102"
            },
            {
              "studentId": "26T1020035",
              "studentName": "Nguyễn Văn Nhật Duy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020022",
              "studentName": "Đặng Bảo Đan",
              "className": "26T102"
            },
            {
              "studentId": "26T1020028",
              "studentName": "Trần Đức Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020038",
              "studentName": "Trần Thị Hương Giang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020041",
              "studentName": "Phan Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1020044",
              "studentName": "Võ Nguyễn Thu Hiền",
              "className": "26T102"
            },
            {
              "studentId": "26T1020046",
              "studentName": "Châu Khắc Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020049",
              "studentName": "Phan Hoàng Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020052",
              "studentName": "Đào Nguyễn Minh Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020054",
              "studentName": "Nguyễn Việt Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020059",
              "studentName": "Nguyễn Gia Huấn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020071",
              "studentName": "Võ Quang Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020064",
              "studentName": "Hoàng Thị Thanh Hương",
              "className": "26T102"
            },
            {
              "studentId": "26T1020077",
              "studentName": "Mai Văn Khánh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020079",
              "studentName": "Trần Khắc Khiêm",
              "className": "26T102"
            },
            {
              "studentId": "26T1020087",
              "studentName": "Trương Sĩ Tuấn Kiệt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020095",
              "studentName": "Nguyễn Bảo Linh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020100",
              "studentName": "Nguyễn Văn Nhật Long",
              "className": "26T102"
            },
            {
              "studentId": "26T1020108",
              "studentName": "Nguyễn Văn Ngọc Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020114",
              "studentName": "Hoàng Nguyễn Thúy Ngân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020119",
              "studentName": "Nguyễn Phúc Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020123",
              "studentName": "Nguyễn Văn Phước Nhân",
              "className": "26T102"
            },
            {
              "studentId": "25T1029031",
              "studentName": "Bạch Ngọc Phương Nhi",
              "className": "25T102"
            },
            {
              "studentId": "26T1020128",
              "studentName": "Nguyễn Thị Tâm Như",
              "className": "26T102"
            },
            {
              "studentId": "26T1020130",
              "studentName": "Lê Phú Ninh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020134",
              "studentName": "Nguyễn Văn Phi",
              "className": "26T102"
            },
            {
              "studentId": "26T1020136",
              "studentName": "Lê Thanh Phong",
              "className": "26T102"
            },
            {
              "studentId": "26T1020145",
              "studentName": "Trần Minh Quân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020154",
              "studentName": "Lê Xuân Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020161",
              "studentName": "Hồ Phú Quốc Tâm",
              "className": "26T102"
            },
            {
              "studentId": "26T1020163",
              "studentName": "Nguyễn Văn Trọng Tấn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020165",
              "studentName": "Lê Quốc Thạch",
              "className": "26T102"
            },
            {
              "studentId": "26T1020174",
              "studentName": "Bùi Nguyễn Bảo Thi",
              "className": "26T102"
            },
            {
              "studentId": "26T1020175",
              "studentName": "Nguyễn Văn Thiên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020179",
              "studentName": "Trần Thị Mỹ Tiên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020189",
              "studentName": "Lê Quang Thành Triều",
              "className": "26T102"
            },
            {
              "studentId": "26T1020186",
              "studentName": "Nguyễn Minh Trí",
              "className": "26T102"
            },
            {
              "studentId": "26T1020194",
              "studentName": "Cao Phước Hoàng Trường",
              "className": "26T102"
            },
            {
              "studentId": "26T1020202",
              "studentName": "Phan Tuyển",
              "className": "26T102"
            },
            {
              "studentId": "26T1020203",
              "studentName": "Trịnh Lương Uy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020208",
              "studentName": "Lê Phước Nguyên Vũ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020211",
              "studentName": "Trần Dư Hoàn Vũ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020213",
              "studentName": "Nguyễn Thị Hoàng Yến",
              "className": "26T102"
            }
          ]
        },
        "004": {
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004",
          "totalStudents": 44,
          "students": [
            {
              "studentId": "26T1130001",
              "studentName": "Nguyễn Thuỳ An",
              "className": "26T113"
            },
            {
              "studentId": "26T1130002",
              "studentName": "Phan Nguyễn Mỹ An",
              "className": "26T113"
            },
            {
              "studentId": "26T1130003",
              "studentName": "Hồ Đức Anh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130004",
              "studentName": "Nguyễn Ngọc Bảo Anh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130006",
              "studentName": "Nguyễn Hoàng Gia Bảo",
              "className": "26T113"
            },
            {
              "studentId": "26T1130005",
              "studentName": "Phạm Nguyễn Ly Băng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130007",
              "studentName": "Bùi Xuân Boy",
              "className": "26T113"
            },
            {
              "studentId": "26T1130008",
              "studentName": "Đặng Như Nhật Chương",
              "className": "26T113"
            },
            {
              "studentId": "26T1130012",
              "studentName": "Huỳnh Thị Huyền Diệu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130013",
              "studentName": "Lê Thị Bích Diệu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130011",
              "studentName": "Nguyễn Lê Thành Đạt",
              "className": "26T113"
            },
            {
              "studentId": "26T1130010",
              "studentName": "Nguyễn Hải Đăng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130014",
              "studentName": "Trần Đại Kiến Đức",
              "className": "26T113"
            },
            {
              "studentId": "26T1130015",
              "studentName": "Trần Trung Hiếu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130016",
              "studentName": "Nguyễn Phan Bảo Hoàng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130018",
              "studentName": "Trần Văn Huế",
              "className": "26T113"
            },
            {
              "studentId": "25T1020120",
              "studentName": "Bùi Quang Huy",
              "className": "25T102"
            },
            {
              "studentId": "26T1130019",
              "studentName": "Nguyễn Văn Hùng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130022",
              "studentName": "Hồ Ngọc Bảo Khang",
              "className": "26T113"
            },
            {
              "studentId": "26T1130023",
              "studentName": "Đoàn Trung Kiên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130024",
              "studentName": "Võ Tấn Kiệt",
              "className": "26T113"
            },
            {
              "studentId": "26T1130025",
              "studentName": "Nguyễn Thành Lương",
              "className": "26T113"
            },
            {
              "studentId": "26T1130026",
              "studentName": "Lê Bá Quang Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130027",
              "studentName": "Lê Bùi Quang Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130028",
              "studentName": "Lê Thị Nhật Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130029",
              "studentName": "Nguyễn Văn Bình Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130030",
              "studentName": "Đỗ Triều Nguyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130031",
              "studentName": "Thái Quốc Nguyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130032",
              "studentName": "Hà Thị Nhàn",
              "className": "26T113"
            },
            {
              "studentId": "26T1130033",
              "studentName": "Hồ Văn Phong",
              "className": "26T113"
            },
            {
              "studentId": "26T1130034",
              "studentName": "Lê Hồng Phong",
              "className": "26T113"
            },
            {
              "studentId": "26T1130035",
              "studentName": "Hoàng Hồ Xuân Phước",
              "className": "26T113"
            },
            {
              "studentId": "26T1130037",
              "studentName": "Phan Vinh Quang",
              "className": "26T113"
            },
            {
              "studentId": "26T1130038",
              "studentName": "Lê Thị Như Quỳnh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130039",
              "studentName": "Nguyễn Thanh Tâm",
              "className": "26T113"
            },
            {
              "studentId": "26T1130040",
              "studentName": "Thái Đạt Thành",
              "className": "26T113"
            },
            {
              "studentId": "26T1130041",
              "studentName": "Nguyễn Khánh Toàn",
              "className": "26T113"
            },
            {
              "studentId": "26T1130043",
              "studentName": "Ngô Minh Trí",
              "className": "26T113"
            },
            {
              "studentId": "26T1130044",
              "studentName": "Phan Võ Minh Trí",
              "className": "26T113"
            },
            {
              "studentId": "26T1130045",
              "studentName": "Nguyễn Thị Thu Uyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130046",
              "studentName": "Trần Lê Khánh Vân",
              "className": "26T113"
            },
            {
              "studentId": "26T1130047",
              "studentName": "Trần Quang Vinh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130048",
              "studentName": "Lê Nguyễn Tường Vy",
              "className": "26T113"
            },
            {
              "studentId": "26T1130049",
              "studentName": "Chung Hùng Vỹ",
              "className": "26T113"
            }
          ]
        },
        "005": {
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005",
          "totalStudents": 35,
          "students": [
            {
              "studentId": "26T1029038",
              "studentName": "Nguyễn Bình An",
              "className": "26T102"
            },
            {
              "studentId": "26T1029001",
              "studentName": "Việt Đàm Phú An",
              "className": "26T102"
            },
            {
              "studentId": "26T1029002",
              "studentName": "Quách Văn Bình",
              "className": "26T102"
            },
            {
              "studentId": "26T1029003",
              "studentName": "Nguyễn Thành Công",
              "className": "26T102"
            },
            {
              "studentId": "26T1029005",
              "studentName": "Lương Gia Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1029004",
              "studentName": "Lê Phan Nhật Đăng",
              "className": "26T102"
            },
            {
              "studentId": "26T1029006",
              "studentName": "Nguyễn Hồng Đức",
              "className": "26T102"
            },
            {
              "studentId": "26T1029007",
              "studentName": "Võ Minh Đức",
              "className": "26T102"
            },
            {
              "studentId": "26T1029010",
              "studentName": "Hoàng Nhật Hào",
              "className": "26T102"
            },
            {
              "studentId": "26T1029008",
              "studentName": "Nguyễn Mạnh Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1029009",
              "studentName": "Trần Hoàng Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1029011",
              "studentName": "Nguyễn Anh Hiến",
              "className": "26T102"
            },
            {
              "studentId": "26T1029014",
              "studentName": "Cao Anh Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1029012",
              "studentName": "Nguyễn Mạnh Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1029015",
              "studentName": "Nguyễn Hữu Đăng Khôi",
              "className": "26T102"
            },
            {
              "studentId": "26T1029016",
              "studentName": "Phạm Minh Khôi",
              "className": "26T102"
            },
            {
              "studentId": "26T1029017",
              "studentName": "Nguyễn Trung Kiên",
              "className": "26T102"
            },
            {
              "studentId": "26T1029018",
              "studentName": "Phan Quý Lễ",
              "className": "26T102"
            },
            {
              "studentId": "26T1029019",
              "studentName": "Nguyễn Thành Lộc",
              "className": "26T102"
            },
            {
              "studentId": "26T1029020",
              "studentName": "Phan Hồ Hoàng Mai",
              "className": "26T102"
            },
            {
              "studentId": "26T1029021",
              "studentName": "Lê Nguyễn Bình Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029022",
              "studentName": "Trần Anh Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029023",
              "studentName": "Võ Đức Nhật Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029024",
              "studentName": "Hoàng Ngọc Khôi Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1029025",
              "studentName": "Nguyễn Minh Nhật",
              "className": "26T102"
            },
            {
              "studentId": "26T1029026",
              "studentName": "Phạm Văn Khánh Nhật",
              "className": "26T102"
            },
            {
              "studentId": "26T1029027",
              "studentName": "Nguyễn Văn Nhật Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1029028",
              "studentName": "Phạm Viết Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1029029",
              "studentName": "Đặng Trần Anh Quốc",
              "className": "26T102"
            },
            {
              "studentId": "26T1029030",
              "studentName": "Đặng Thành Tài",
              "className": "26T102"
            },
            {
              "studentId": "26T1029031",
              "studentName": "Trần Thị Anh Tâm",
              "className": "26T102"
            },
            {
              "studentId": "26T1029032",
              "studentName": "Phạm Phước Thanh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029034",
              "studentName": "Nguyễn Minh Trường",
              "className": "26T102"
            },
            {
              "studentId": "26T1029036",
              "studentName": "Trần Tuấn Vũ",
              "className": "26T102"
            },
            {
              "studentId": "26T1029037",
              "studentName": "Cao Tường Vy",
              "className": "26T102"
            }
          ]
        },
        "006": {
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006",
          "totalStudents": 48,
          "students": [
            {
              "studentId": "26T1020002",
              "studentName": "Nguyễn Quốc Đại An",
              "className": "26T102"
            },
            {
              "studentId": "26T1020006",
              "studentName": "Nguyễn Ngọc Anh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020012",
              "studentName": "Nguyễn Gia Bảo",
              "className": "26T102"
            },
            {
              "studentId": "26T1020017",
              "studentName": "Phạm Thị Tâm Châu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020036",
              "studentName": "Phạm Vũ Mạnh Duy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020032",
              "studentName": "Nguyễn Chí Dũng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020026",
              "studentName": "Lê Gia Tuấn Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020023",
              "studentName": "Trương Hải Đăng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020042",
              "studentName": "Lê Thị Bảo Hân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020048",
              "studentName": "Nguyễn Minh Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020051",
              "studentName": "Đặng Huy Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020058",
              "studentName": "Võ Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020067",
              "studentName": "Ngô Đặng Minh Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020062",
              "studentName": "Trần Văn Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020065",
              "studentName": "Ngô Đức Hữu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020072",
              "studentName": "Nguyễn Lê Tấn Kha",
              "className": "26T102"
            },
            {
              "studentId": "26T1020075",
              "studentName": "Phan Gia Khang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020076",
              "studentName": "Lê Hữu Khánh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020078",
              "studentName": "Nguyễn Văn Quốc Khánh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020082",
              "studentName": "Phan Đăng Khoa",
              "className": "26T102"
            },
            {
              "studentId": "26T1020085",
              "studentName": "Phan Hồ Tuấn Kiệt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020089",
              "studentName": "Huỳnh Ngọc Khánh Lam",
              "className": "26T102"
            },
            {
              "studentId": "26T1020092",
              "studentName": "Trần Viết Lanh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020099",
              "studentName": "Nguyễn Phi Long",
              "className": "26T102"
            },
            {
              "studentId": "26T1020102",
              "studentName": "Hoàng Hữu Tuấn Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020104",
              "studentName": "Lê Sĩ Quang Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020110",
              "studentName": "Huỳnh Ngọc Diễm My",
              "className": "26T102"
            },
            {
              "studentId": "26T1020117",
              "studentName": "Giả Thị Thảo Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020125",
              "studentName": "Huỳnh Nhật",
              "className": "26T102"
            },
            {
              "studentId": "26T1020132",
              "studentName": "Nguyễn Sim Paxan",
              "className": "26T102"
            },
            {
              "studentId": "26T1020133",
              "studentName": "Dương Bá Phát",
              "className": "26T102"
            },
            {
              "studentId": "26T1020137",
              "studentName": "Trần Tuấn Phong",
              "className": "26T102"
            },
            {
              "studentId": "26T1020140",
              "studentName": "Nguyễn Lê Thanh Phương",
              "className": "26T102"
            },
            {
              "studentId": "26T1020142",
              "studentName": "Lê Ngọc Minh Quân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020148",
              "studentName": "Đoàn Hồ Anh Quốc",
              "className": "26T102"
            },
            {
              "studentId": "26T1020151",
              "studentName": "Phan Hoàng Sang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020155",
              "studentName": "Ngô Nguyễn Công Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020159",
              "studentName": "Châu Anh Tài",
              "className": "26T102"
            },
            {
              "studentId": "26T1020171",
              "studentName": "Phạm Minh Thành",
              "className": "26T102"
            },
            {
              "studentId": "26T1020176",
              "studentName": "Hoàng Anh Thiện",
              "className": "26T102"
            },
            {
              "studentId": "26T1020180",
              "studentName": "Trần Thị Thùy Tiên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020185",
              "studentName": "Phạm Thị Thùy Trang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020190",
              "studentName": "Phạm Tiến Trình",
              "className": "26T102"
            },
            {
              "studentId": "26T1020192",
              "studentName": "Lê Quốc Trung",
              "className": "26T102"
            },
            {
              "studentId": "26T1020200",
              "studentName": "Trần Thanh Tuấn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020195",
              "studentName": "Huỳnh Lê Tuấn Tú",
              "className": "26T102"
            },
            {
              "studentId": "26T1020204",
              "studentName": "Nguyễn Ngọc Khánh Vân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020206",
              "studentName": "Phan Xuân Việt",
              "className": "26T102"
            }
          ]
        },
        "007": {
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007",
          "totalStudents": 48,
          "students": [
            {
              "studentId": "26T1020004",
              "studentName": "Hoàng Nguyễn Nguyên Anh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020007",
              "studentName": "Nguyễn Tuấn Anh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020014",
              "studentName": "Trương Công Bảo",
              "className": "26T102"
            },
            {
              "studentId": "26T1020020",
              "studentName": "Nguyễn Cửu Bảo Cơ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020024",
              "studentName": "Đinh Mạnh Danh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020033",
              "studentName": "Nguyễn Văn Dũng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020027",
              "studentName": "Ngô Phan Tiến Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020029",
              "studentName": "Trần Nhơn Hoàng Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020039",
              "studentName": "Huỳnh Ngọc Quỳnh Giao",
              "className": "26T102"
            },
            {
              "studentId": "26T1020043",
              "studentName": "Trần Lê Thúy Hằng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020050",
              "studentName": "Phan Trung Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020053",
              "studentName": "Nguyễn Phi Hoàng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020068",
              "studentName": "Nguyễn Gia Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020069",
              "studentName": "Nguyễn Quang Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020060",
              "studentName": "Lê Đăng Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020063",
              "studentName": "Lê Nguyễn Minh Hưng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020074",
              "studentName": "Nguyễn Lê Anh Khang",
              "className": "26T102"
            },
            {
              "studentId": "26T1020081",
              "studentName": "Hoàng Đình Minh Khoa",
              "className": "26T102"
            },
            {
              "studentId": "26T1020086",
              "studentName": "Trần Đặng Văn Kiệt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020091",
              "studentName": "Hoàng Sùng Lãm",
              "className": "26T102"
            },
            {
              "studentId": "26T1020090",
              "studentName": "Nguyễn Hoàng Lâm",
              "className": "26T102"
            },
            {
              "studentId": "26T1020096",
              "studentName": "Phan Thị Khánh Linh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020097",
              "studentName": "Nguyễn Công Lộc",
              "className": "26T102"
            },
            {
              "studentId": "26T1020103",
              "studentName": "Hoàng Văn Nhật Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020109",
              "studentName": "Trần Quốc Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020111",
              "studentName": "Nguyễn Lê Kiều My",
              "className": "26T102"
            },
            {
              "studentId": "26T1020115",
              "studentName": "Trần Thị Thanh Ngân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020118",
              "studentName": "Mai Tuấn Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020122",
              "studentName": "Hồ Tùng Nhân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020124",
              "studentName": "Phạm Nguyễn Thành Nhân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020126",
              "studentName": "Hoàng Ái Nhi",
              "className": "26T102"
            },
            {
              "studentId": "26T1020139",
              "studentName": "Nguyễn Ngọc Phước",
              "className": "26T102"
            },
            {
              "studentId": "26T1020149",
              "studentName": "Huỳnh Thị Tú Quyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020152",
              "studentName": "Nguyễn Xuân Sáng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020158",
              "studentName": "Võ Trần Hải Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020170",
              "studentName": "Nguyễn Xuân Thành",
              "className": "26T102"
            },
            {
              "studentId": "26T1020172",
              "studentName": "Trần Bình Thạnh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020143",
              "studentName": "Nguyễn Hữu Quân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020156",
              "studentName": "Nguyễn Hoàng Sơn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020164",
              "studentName": "Phan Anh Tây",
              "className": "26T102"
            },
            {
              "studentId": "26T1020177",
              "studentName": "Cao Hoàng Thịnh",
              "className": "26T102"
            },
            {
              "studentId": "25T1020316",
              "studentName": "Nguyễn Hoàng Quốc Thịnh",
              "className": "25T102"
            },
            {
              "studentId": "26T1020187",
              "studentName": "Nguyễn Thanh Trí",
              "className": "26T102"
            },
            {
              "studentId": "26T1020193",
              "studentName": "Trương Duy Trung",
              "className": "26T102"
            },
            {
              "studentId": "26T1020198",
              "studentName": "Nguyễn Thanh Tuân",
              "className": "26T102"
            },
            {
              "studentId": "26T1020201",
              "studentName": "Phan Quốc Tường",
              "className": "26T102"
            },
            {
              "studentId": "26T1020205",
              "studentName": "Phan Văn Quốc Việt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020210",
              "studentName": "Nguyễn Đăng Hoàng Vũ",
              "className": "26T102"
            }
          ]
        },
        "008": {
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008",
          "totalStudents": 39,
          "students": [
            {
              "studentId": "26T1020229",
              "studentName": "Nguyễn Thành An",
              "className": "26T102"
            },
            {
              "studentId": "26T1020214",
              "studentName": "Sisouphan Chandavone",
              "className": "26T102"
            },
            {
              "studentId": "26T1020231",
              "studentName": "Trần Nguyên Chương",
              "className": "26T102"
            },
            {
              "studentId": "26T1020236",
              "studentName": "Võ Phước Duy",
              "className": "26T102"
            },
            {
              "studentId": "26T1020234",
              "studentName": "Nguyễn Tuấn Dũng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020232",
              "studentName": "Nguyễn Đức Thành Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020233",
              "studentName": "Nguyễn Tiến Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1020215",
              "studentName": "Douangmala Hatthasone",
              "className": "26T102"
            },
            {
              "studentId": "26T1020240",
              "studentName": "Trương Phạm Văn Hiếu",
              "className": "26T102"
            },
            {
              "studentId": "26T1020216",
              "studentName": "Phengthavong Hongmany",
              "className": "26T102"
            },
            {
              "studentId": "26T1020242",
              "studentName": "Mai Quốc Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020243",
              "studentName": "Trần Mạnh Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1020244",
              "studentName": "Phạm Thế Kha",
              "className": "26T102"
            },
            {
              "studentId": "26T1020217",
              "studentName": "Symoukda Khamphar",
              "className": "26T102"
            },
            {
              "studentId": "26T1020218",
              "studentName": "Douang Oudom Khonekham",
              "className": "26T102"
            },
            {
              "studentId": "26T1020219",
              "studentName": "Bounyaseng Lotchana",
              "className": "26T102"
            },
            {
              "studentId": "26T1020248",
              "studentName": "Nguyễn Huy Nam",
              "className": "26T102"
            },
            {
              "studentId": "26T1020251",
              "studentName": "Hoàng Trần Hạnh Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020254",
              "studentName": "Hồ Uyển Nhi",
              "className": "26T102"
            },
            {
              "studentId": "26T1020256",
              "studentName": "Trương Thị Tuyết Nhung",
              "className": "26T102"
            },
            {
              "studentId": "26T1020257",
              "studentName": "Võ Thị Nhung",
              "className": "26T102"
            },
            {
              "studentId": "26T1020220",
              "studentName": "Khamdalanikone Phayvan",
              "className": "26T102"
            },
            {
              "studentId": "26T1020221",
              "studentName": "Chanmexay Phouthasone",
              "className": "26T102"
            },
            {
              "studentId": "26T1020222",
              "studentName": "Siliphanh Phoutthachit",
              "className": "26T102"
            },
            {
              "studentId": "26T1020259",
              "studentName": "Phan Trường Phú",
              "className": "26T102"
            },
            {
              "studentId": "26T1020260",
              "studentName": "Nguyễn Hoàng Phúc",
              "className": "26T102"
            },
            {
              "studentId": "26T1020223",
              "studentName": "Lorvankham Saiyfon",
              "className": "26T102"
            },
            {
              "studentId": "26T1020224",
              "studentName": "Pengsavath Salidta",
              "className": "26T102"
            },
            {
              "studentId": "26T1020225",
              "studentName": "Aphailath Sintavanh",
              "className": "26T102"
            },
            {
              "studentId": "26T1020263",
              "studentName": "Võ Ngọc Tài",
              "className": "26T102"
            },
            {
              "studentId": "26T1020226",
              "studentName": "Phommachanh Thanongsak",
              "className": "26T102"
            },
            {
              "studentId": "26T1020264",
              "studentName": "Nguyễn Toàn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020267",
              "studentName": "Trần Phước Đức Tuấn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020268",
              "studentName": "Trần Quốc Tuấn",
              "className": "26T102"
            },
            {
              "studentId": "26T1020270",
              "studentName": "Trần Thị Thu Uyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1020227",
              "studentName": "Sihaphom Vilasak",
              "className": "26T102"
            },
            {
              "studentId": "26T1020271",
              "studentName": "Lương Triệu Vỹ",
              "className": "26T102"
            },
            {
              "studentId": "26T1020272",
              "studentName": "Bùi Thị Hải Yến",
              "className": "26T102"
            },
            {
              "studentId": "26T1020228",
              "studentName": "Syhathep Yotee",
              "className": "26T102"
            }
          ]
        }
      }
    },
    "Kỹ thuật lập trình": {
      "subjectName": "Kỹ thuật lập trình",
      "subjectCode": "TIN2022",
      "groups": {
        "001": {
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001",
          "totalStudents": 35,
          "students": [
            {
              "studentId": "26T1029038",
              "studentName": "Nguyễn Bình An",
              "className": "26T102"
            },
            {
              "studentId": "26T1029001",
              "studentName": "Việt Đàm Phú An",
              "className": "26T102"
            },
            {
              "studentId": "26T1029002",
              "studentName": "Quách Văn Bình",
              "className": "26T102"
            },
            {
              "studentId": "26T1029003",
              "studentName": "Nguyễn Thành Công",
              "className": "26T102"
            },
            {
              "studentId": "26T1029005",
              "studentName": "Lương Gia Đạt",
              "className": "26T102"
            },
            {
              "studentId": "26T1029004",
              "studentName": "Lê Phan Nhật Đăng",
              "className": "26T102"
            },
            {
              "studentId": "26T1029006",
              "studentName": "Nguyễn Hồng Đức",
              "className": "26T102"
            },
            {
              "studentId": "26T1029007",
              "studentName": "Võ Minh Đức",
              "className": "26T102"
            },
            {
              "studentId": "26T1029010",
              "studentName": "Hoàng Nhật Hào",
              "className": "26T102"
            },
            {
              "studentId": "26T1029008",
              "studentName": "Nguyễn Mạnh Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1029009",
              "studentName": "Trần Hoàng Hải",
              "className": "26T102"
            },
            {
              "studentId": "26T1029011",
              "studentName": "Nguyễn Anh Hiến",
              "className": "26T102"
            },
            {
              "studentId": "26T1029014",
              "studentName": "Cao Anh Huy",
              "className": "26T102"
            },
            {
              "studentId": "26T1029012",
              "studentName": "Nguyễn Mạnh Hùng",
              "className": "26T102"
            },
            {
              "studentId": "26T1029015",
              "studentName": "Nguyễn Hữu Đăng Khôi",
              "className": "26T102"
            },
            {
              "studentId": "26T1029016",
              "studentName": "Phạm Minh Khôi",
              "className": "26T102"
            },
            {
              "studentId": "26T1029017",
              "studentName": "Nguyễn Trung Kiên",
              "className": "26T102"
            },
            {
              "studentId": "26T1029018",
              "studentName": "Phan Quý Lễ",
              "className": "26T102"
            },
            {
              "studentId": "26T1029019",
              "studentName": "Nguyễn Thành Lộc",
              "className": "26T102"
            },
            {
              "studentId": "26T1029020",
              "studentName": "Phan Hồ Hoàng Mai",
              "className": "26T102"
            },
            {
              "studentId": "26T1029021",
              "studentName": "Lê Nguyễn Bình Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029022",
              "studentName": "Trần Anh Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029023",
              "studentName": "Võ Đức Nhật Minh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029024",
              "studentName": "Hoàng Ngọc Khôi Nguyên",
              "className": "26T102"
            },
            {
              "studentId": "26T1029025",
              "studentName": "Nguyễn Minh Nhật",
              "className": "26T102"
            },
            {
              "studentId": "26T1029026",
              "studentName": "Phạm Văn Khánh Nhật",
              "className": "26T102"
            },
            {
              "studentId": "26T1029027",
              "studentName": "Nguyễn Văn Nhật Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1029028",
              "studentName": "Phạm Viết Quang",
              "className": "26T102"
            },
            {
              "studentId": "26T1029029",
              "studentName": "Đặng Trần Anh Quốc",
              "className": "26T102"
            },
            {
              "studentId": "26T1029030",
              "studentName": "Đặng Thành Tài",
              "className": "26T102"
            },
            {
              "studentId": "26T1029031",
              "studentName": "Trần Thị Anh Tâm",
              "className": "26T102"
            },
            {
              "studentId": "26T1029032",
              "studentName": "Phạm Phước Thanh",
              "className": "26T102"
            },
            {
              "studentId": "26T1029034",
              "studentName": "Nguyễn Minh Trường",
              "className": "26T102"
            },
            {
              "studentId": "26T1029036",
              "studentName": "Trần Tuấn Vũ",
              "className": "26T102"
            },
            {
              "studentId": "26T1029037",
              "studentName": "Cao Tường Vy",
              "className": "26T102"
            }
          ]
        },
        "002": {
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002",
          "totalStudents": 44,
          "students": [
            {
              "studentId": "26T1130001",
              "studentName": "Nguyễn Thuỳ An",
              "className": "26T113"
            },
            {
              "studentId": "26T1130002",
              "studentName": "Phan Nguyễn Mỹ An",
              "className": "26T113"
            },
            {
              "studentId": "26T1130003",
              "studentName": "Hồ Đức Anh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130004",
              "studentName": "Nguyễn Ngọc Bảo Anh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130006",
              "studentName": "Nguyễn Hoàng Gia Bảo",
              "className": "26T113"
            },
            {
              "studentId": "26T1130005",
              "studentName": "Phạm Nguyễn Ly Băng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130007",
              "studentName": "Bùi Xuân Boy",
              "className": "26T113"
            },
            {
              "studentId": "26T1130008",
              "studentName": "Đặng Như Nhật Chương",
              "className": "26T113"
            },
            {
              "studentId": "26T1130012",
              "studentName": "Huỳnh Thị Huyền Diệu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130013",
              "studentName": "Lê Thị Bích Diệu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130011",
              "studentName": "Nguyễn Lê Thành Đạt",
              "className": "26T113"
            },
            {
              "studentId": "26T1130010",
              "studentName": "Nguyễn Hải Đăng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130014",
              "studentName": "Trần Đại Kiến Đức",
              "className": "26T113"
            },
            {
              "studentId": "20T1020024",
              "studentName": "Kiều Phúc Hải",
              "className": "20T102"
            },
            {
              "studentId": "26T1130015",
              "studentName": "Trần Trung Hiếu",
              "className": "26T113"
            },
            {
              "studentId": "26T1130016",
              "studentName": "Nguyễn Phan Bảo Hoàng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130018",
              "studentName": "Trần Văn Huế",
              "className": "26T113"
            },
            {
              "studentId": "26T1130019",
              "studentName": "Nguyễn Văn Hùng",
              "className": "26T113"
            },
            {
              "studentId": "26T1130022",
              "studentName": "Hồ Ngọc Bảo Khang",
              "className": "26T113"
            },
            {
              "studentId": "26T1130023",
              "studentName": "Đoàn Trung Kiên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130024",
              "studentName": "Võ Tấn Kiệt",
              "className": "26T113"
            },
            {
              "studentId": "26T1130025",
              "studentName": "Nguyễn Thành Lương",
              "className": "26T113"
            },
            {
              "studentId": "26T1130026",
              "studentName": "Lê Bá Quang Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130027",
              "studentName": "Lê Bùi Quang Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130028",
              "studentName": "Lê Thị Nhật Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130029",
              "studentName": "Nguyễn Văn Bình Minh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130030",
              "studentName": "Đỗ Triều Nguyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130031",
              "studentName": "Thái Quốc Nguyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130032",
              "studentName": "Hà Thị Nhàn",
              "className": "26T113"
            },
            {
              "studentId": "26T1130033",
              "studentName": "Hồ Văn Phong",
              "className": "26T113"
            },
            {
              "studentId": "26T1130034",
              "studentName": "Lê Hồng Phong",
              "className": "26T113"
            },
            {
              "studentId": "26T1130035",
              "studentName": "Hoàng Hồ Xuân Phước",
              "className": "26T113"
            },
            {
              "studentId": "26T1130037",
              "studentName": "Phan Vinh Quang",
              "className": "26T113"
            },
            {
              "studentId": "26T1130038",
              "studentName": "Lê Thị Như Quỳnh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130039",
              "studentName": "Nguyễn Thanh Tâm",
              "className": "26T113"
            },
            {
              "studentId": "26T1130040",
              "studentName": "Thái Đạt Thành",
              "className": "26T113"
            },
            {
              "studentId": "26T1130041",
              "studentName": "Nguyễn Khánh Toàn",
              "className": "26T113"
            },
            {
              "studentId": "26T1130043",
              "studentName": "Ngô Minh Trí",
              "className": "26T113"
            },
            {
              "studentId": "26T1130044",
              "studentName": "Phan Võ Minh Trí",
              "className": "26T113"
            },
            {
              "studentId": "26T1130045",
              "studentName": "Nguyễn Thị Thu Uyên",
              "className": "26T113"
            },
            {
              "studentId": "26T1130046",
              "studentName": "Trần Lê Khánh Vân",
              "className": "26T113"
            },
            {
              "studentId": "26T1130047",
              "studentName": "Trần Quang Vinh",
              "className": "26T113"
            },
            {
              "studentId": "26T1130048",
              "studentName": "Lê Nguyễn Tường Vy",
              "className": "26T113"
            },
            {
              "studentId": "26T1130049",
              "studentName": "Chung Hùng Vỹ",
              "className": "26T113"
            }
          ]
        }
      }
    }
  },
  "byStudentId": {
    "26T1080001": {
      "studentId": "26T1080001",
      "fullName": "Hoàng Ngọc An",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080002": {
      "studentId": "26T1080002",
      "fullName": "Nguyễn Ngọc Trâm Anh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080003": {
      "studentId": "26T1080003",
      "fullName": "Nguyễn Thái Anh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080004": {
      "studentId": "26T1080004",
      "fullName": "Nguyễn Thị Lan Anh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080005": {
      "studentId": "26T1080005",
      "fullName": "Trần Đặng Vân Anh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080006": {
      "studentId": "26T1080006",
      "fullName": "Phạm Võ Quốc Bảo",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080009": {
      "studentId": "26T1080009",
      "fullName": "Lê Thị Ngọc Diệp",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080010": {
      "studentId": "26T1080010",
      "fullName": "Nguyễn Bá Doãn",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080012": {
      "studentId": "26T1080012",
      "fullName": "Bùi Văn Duy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080013": {
      "studentId": "26T1080013",
      "fullName": "Nguyễn Quang Duy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080007": {
      "studentId": "26T1080007",
      "fullName": "Hà Ngọc Đạt",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080011": {
      "studentId": "26T1080011",
      "fullName": "Lâm Nhật Việt Đức",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080014": {
      "studentId": "26T1080014",
      "fullName": "Lê Việt Hà",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080016": {
      "studentId": "26T1080016",
      "fullName": "Lê Thuận Hiếu",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080017": {
      "studentId": "26T1080017",
      "fullName": "Nguyễn Trung Hiếu",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080015": {
      "studentId": "26T1080015",
      "fullName": "Tạ Quang Hiệp",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080019": {
      "studentId": "26T1080019",
      "fullName": "Dương Nhật Tuấn Huy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080020": {
      "studentId": "26T1080020",
      "fullName": "Hoàng Trần Gia Huy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080021": {
      "studentId": "26T1080021",
      "fullName": "Hoàng Văn Nhật Huy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080022": {
      "studentId": "26T1080022",
      "fullName": "Nguyễn Phước Bảo Hoàng Nhật Huy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080018": {
      "studentId": "26T1080018",
      "fullName": "Hà Văn Lê Hùng",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080023": {
      "studentId": "26T1080023",
      "fullName": "Trương Nguyễn Viết Khoa",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080024": {
      "studentId": "26T1080024",
      "fullName": "Hoàng Văn Kiệt",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080025": {
      "studentId": "26T1080025",
      "fullName": "Trần Vương Anh Kiệt",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080026": {
      "studentId": "26T1080026",
      "fullName": "Văn Thị Lài",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080027": {
      "studentId": "26T1080027",
      "fullName": "Hoàng Nhật Long",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080028": {
      "studentId": "26T1080028",
      "fullName": "Lê Tự Hoàng Long",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080031": {
      "studentId": "26T1080031",
      "fullName": "Đoàn Công Duy Mạnh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080030": {
      "studentId": "26T1080030",
      "fullName": "Nguyễn Viết Phúc Mẫn",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080032": {
      "studentId": "26T1080032",
      "fullName": "Đỗ Văn Khôi Ngô",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080033": {
      "studentId": "26T1080033",
      "fullName": "Trần Duy Bảo Nguyên",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080034": {
      "studentId": "26T1080034",
      "fullName": "Nguyễn Hoàng Nhân",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080035": {
      "studentId": "26T1080035",
      "fullName": "Nguyễn Khánh Nhật",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080058": {
      "studentId": "26T1080058",
      "fullName": "Silaphet Nunee",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080059": {
      "studentId": "26T1080059",
      "fullName": "Khounnaseng Phetninda",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080036": {
      "studentId": "26T1080036",
      "fullName": "Nguyễn Văn Phong",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080039": {
      "studentId": "26T1080039",
      "fullName": "Đỗ Đình Quang",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080037": {
      "studentId": "26T1080037",
      "fullName": "Nguyễn Kim Thế Quân",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080038": {
      "studentId": "26T1080038",
      "fullName": "Phan Cảnh Bảo Quân",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080040": {
      "studentId": "26T1080040",
      "fullName": "Nguyễn Thị Như Quỳnh",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080041": {
      "studentId": "26T1080041",
      "fullName": "Trương Hữu Minh Tâm",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080042": {
      "studentId": "26T1080042",
      "fullName": "Bùi Phương Thảo",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080043": {
      "studentId": "26T1080043",
      "fullName": "Dương Thái Thiện",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080044": {
      "studentId": "26T1080044",
      "fullName": "Hoàng Anh Thư",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080045": {
      "studentId": "26T1080045",
      "fullName": "Nguyễn Trần Đức Toàn",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080046": {
      "studentId": "26T1080046",
      "fullName": "Hoàng Ngọc Bảo Trang",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080047": {
      "studentId": "26T1080047",
      "fullName": "Nguyễn Văn Triều",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080048": {
      "studentId": "26T1080048",
      "fullName": "Hoàng Nguyễn Phi Trường",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080049": {
      "studentId": "26T1080049",
      "fullName": "Huỳnh Anh Tuấn",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080050": {
      "studentId": "26T1080050",
      "fullName": "Hồ Phước Thanh Tùng",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080052": {
      "studentId": "26T1080052",
      "fullName": "Phan Khánh Việt",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080053": {
      "studentId": "26T1080053",
      "fullName": "Dụng Văn Vũ",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080054": {
      "studentId": "26T1080054",
      "fullName": "Lê Đình Vũ",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080055": {
      "studentId": "26T1080055",
      "fullName": "Nguyễn Dương Vũ",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080056": {
      "studentId": "26T1080056",
      "fullName": "Trần Anh Vũ",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1080057": {
      "studentId": "26T1080057",
      "fullName": "Đỗ Thị Hà Vy",
      "className": "26T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "001",
          "classCode": "2026-2027.1.TIN2015.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "001",
      "classCode": "2026-2027.1.TIN2015.001"
    },
    "26T1020001": {
      "studentId": "26T1020001",
      "fullName": "Lô Bảo An",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020005": {
      "studentId": "26T1020005",
      "fullName": "Lê Tuấn Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020009": {
      "studentId": "26T1020009",
      "fullName": "Trần Nguyễn Đức Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020011": {
      "studentId": "26T1020011",
      "fullName": "Lê Hoàng Nhật Bảo",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020018": {
      "studentId": "26T1020018",
      "fullName": "Võ Ngọc Bảo Châu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020037": {
      "studentId": "26T1020037",
      "fullName": "Phan Cảnh Thành Duy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020034": {
      "studentId": "26T1020034",
      "fullName": "Nguyễn Nhật Dương",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020025": {
      "studentId": "26T1020025",
      "fullName": "Hồ Thành Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020030": {
      "studentId": "26T1020030",
      "fullName": "Hoàng Minh Đức",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020040": {
      "studentId": "26T1020040",
      "fullName": "Nguyễn Anh Hải",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020047": {
      "studentId": "26T1020047",
      "fullName": "Nguyễn Gia Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020045": {
      "studentId": "26T1020045",
      "fullName": "Võ Hoàng Hiệp",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020057": {
      "studentId": "26T1020057",
      "fullName": "Trần Thiên Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020066": {
      "studentId": "26T1020066",
      "fullName": "Lê Viết Gia Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020070": {
      "studentId": "26T1020070",
      "fullName": "Trần Văn Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020061": {
      "studentId": "26T1020061",
      "fullName": "Nguyễn Văn Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020073": {
      "studentId": "26T1020073",
      "fullName": "Nguyễn Khang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020080": {
      "studentId": "26T1020080",
      "fullName": "Hồ Đăng Khoa",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020084": {
      "studentId": "26T1020084",
      "fullName": "Nguyễn Thanh Anh Kiệt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020088": {
      "studentId": "26T1020088",
      "fullName": "Nguyễn Viết Duy Kỳ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020094": {
      "studentId": "26T1020094",
      "fullName": "Hồ Khánh Linh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020098": {
      "studentId": "26T1020098",
      "fullName": "Lê Huy Long",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020101": {
      "studentId": "26T1020101",
      "fullName": "Hồ Tuấn Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020105": {
      "studentId": "26T1020105",
      "fullName": "Lê Vũ Quốc Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020106": {
      "studentId": "26T1020106",
      "fullName": "Nguyễn Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020112": {
      "studentId": "26T1020112",
      "fullName": "Lê Hoàng Nam",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020113": {
      "studentId": "26T1020113",
      "fullName": "Lê Nhật Nam",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020116": {
      "studentId": "26T1020116",
      "fullName": "Tôn Nữ Bảo Ngọc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020120": {
      "studentId": "26T1020120",
      "fullName": "Bùi Thị Thanh Nhàn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020129": {
      "studentId": "26T1020129",
      "fullName": "Mai Hồng Nhung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020135": {
      "studentId": "26T1020135",
      "fullName": "Đỗ Thái Phong",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020138": {
      "studentId": "26T1020138",
      "fullName": "Ngô Viết Đức Phú",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020146": {
      "studentId": "26T1020146",
      "fullName": "Đào Hữu Quang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020147": {
      "studentId": "26T1020147",
      "fullName": "Nguyễn Nhật Quang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020141": {
      "studentId": "26T1020141",
      "fullName": "Hồ Xuân Minh Quân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020150": {
      "studentId": "26T1020150",
      "fullName": "Nguyễn Tấn Sang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020153": {
      "studentId": "26T1020153",
      "fullName": "Cao Ngọc Hoàng Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020157": {
      "studentId": "26T1020157",
      "fullName": "Trần Mai Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020160": {
      "studentId": "26T1020160",
      "fullName": "Nguyễn Tất Tuấn Tài",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020167": {
      "studentId": "26T1020167",
      "fullName": "Trương Tiến Thắng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020178": {
      "studentId": "26T1020178",
      "fullName": "Đặng Ngọc Minh Thư",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020181": {
      "studentId": "26T1020181",
      "fullName": "Lê Trọng Việt Tiến",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020188": {
      "studentId": "26T1020188",
      "fullName": "Trần Lê Thanh Trí",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020191": {
      "studentId": "26T1020191",
      "fullName": "Hoàng Ngọc Thành Trung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "25T1020368": {
      "studentId": "25T1020368",
      "fullName": "Đào Duy Tuệ",
      "className": "25T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020197": {
      "studentId": "26T1020197",
      "fullName": "Nguyễn Tiến Tú",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020207": {
      "studentId": "26T1020207",
      "fullName": "Bùi Trần Hoàng Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020209": {
      "studentId": "26T1020209",
      "fullName": "Ngô Văn Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "002",
          "classCode": "2026-2027.1.TIN2015.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "002",
      "classCode": "2026-2027.1.TIN2015.002"
    },
    "26T1020008": {
      "studentId": "26T1020008",
      "fullName": "Nguyễn Tuấn Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "25T1080001": {
      "studentId": "25T1080001",
      "fullName": "Huỳnh Trọng Ân",
      "className": "25T108",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020003": {
      "studentId": "26T1020003",
      "fullName": "Trương Khánh Ân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020013": {
      "studentId": "26T1020013",
      "fullName": "Nguyễn Văn Thái Bảo",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020015": {
      "studentId": "26T1020015",
      "fullName": "Lê Thị Bé",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020021": {
      "studentId": "26T1020021",
      "fullName": "Trần Phương Cường",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020035": {
      "studentId": "26T1020035",
      "fullName": "Nguyễn Văn Nhật Duy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020022": {
      "studentId": "26T1020022",
      "fullName": "Đặng Bảo Đan",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020028": {
      "studentId": "26T1020028",
      "fullName": "Trần Đức Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020038": {
      "studentId": "26T1020038",
      "fullName": "Trần Thị Hương Giang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020041": {
      "studentId": "26T1020041",
      "fullName": "Phan Hải",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020044": {
      "studentId": "26T1020044",
      "fullName": "Võ Nguyễn Thu Hiền",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020046": {
      "studentId": "26T1020046",
      "fullName": "Châu Khắc Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020049": {
      "studentId": "26T1020049",
      "fullName": "Phan Hoàng Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020052": {
      "studentId": "26T1020052",
      "fullName": "Đào Nguyễn Minh Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020054": {
      "studentId": "26T1020054",
      "fullName": "Nguyễn Việt Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020059": {
      "studentId": "26T1020059",
      "fullName": "Nguyễn Gia Huấn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020071": {
      "studentId": "26T1020071",
      "fullName": "Võ Quang Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020064": {
      "studentId": "26T1020064",
      "fullName": "Hoàng Thị Thanh Hương",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020077": {
      "studentId": "26T1020077",
      "fullName": "Mai Văn Khánh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020079": {
      "studentId": "26T1020079",
      "fullName": "Trần Khắc Khiêm",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020087": {
      "studentId": "26T1020087",
      "fullName": "Trương Sĩ Tuấn Kiệt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020095": {
      "studentId": "26T1020095",
      "fullName": "Nguyễn Bảo Linh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020100": {
      "studentId": "26T1020100",
      "fullName": "Nguyễn Văn Nhật Long",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020108": {
      "studentId": "26T1020108",
      "fullName": "Nguyễn Văn Ngọc Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020114": {
      "studentId": "26T1020114",
      "fullName": "Hoàng Nguyễn Thúy Ngân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020119": {
      "studentId": "26T1020119",
      "fullName": "Nguyễn Phúc Nguyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020123": {
      "studentId": "26T1020123",
      "fullName": "Nguyễn Văn Phước Nhân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "25T1029031": {
      "studentId": "25T1029031",
      "fullName": "Bạch Ngọc Phương Nhi",
      "className": "25T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020128": {
      "studentId": "26T1020128",
      "fullName": "Nguyễn Thị Tâm Như",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020130": {
      "studentId": "26T1020130",
      "fullName": "Lê Phú Ninh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020134": {
      "studentId": "26T1020134",
      "fullName": "Nguyễn Văn Phi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020136": {
      "studentId": "26T1020136",
      "fullName": "Lê Thanh Phong",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020145": {
      "studentId": "26T1020145",
      "fullName": "Trần Minh Quân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020154": {
      "studentId": "26T1020154",
      "fullName": "Lê Xuân Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020161": {
      "studentId": "26T1020161",
      "fullName": "Hồ Phú Quốc Tâm",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020163": {
      "studentId": "26T1020163",
      "fullName": "Nguyễn Văn Trọng Tấn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020165": {
      "studentId": "26T1020165",
      "fullName": "Lê Quốc Thạch",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020174": {
      "studentId": "26T1020174",
      "fullName": "Bùi Nguyễn Bảo Thi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020175": {
      "studentId": "26T1020175",
      "fullName": "Nguyễn Văn Thiên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020179": {
      "studentId": "26T1020179",
      "fullName": "Trần Thị Mỹ Tiên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020189": {
      "studentId": "26T1020189",
      "fullName": "Lê Quang Thành Triều",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020186": {
      "studentId": "26T1020186",
      "fullName": "Nguyễn Minh Trí",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020194": {
      "studentId": "26T1020194",
      "fullName": "Cao Phước Hoàng Trường",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020202": {
      "studentId": "26T1020202",
      "fullName": "Phan Tuyển",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020203": {
      "studentId": "26T1020203",
      "fullName": "Trịnh Lương Uy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020208": {
      "studentId": "26T1020208",
      "fullName": "Lê Phước Nguyên Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020211": {
      "studentId": "26T1020211",
      "fullName": "Trần Dư Hoàn Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1020213": {
      "studentId": "26T1020213",
      "fullName": "Nguyễn Thị Hoàng Yến",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "003",
          "classCode": "2026-2027.1.TIN2015.003"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "003",
      "classCode": "2026-2027.1.TIN2015.003"
    },
    "26T1130001": {
      "studentId": "26T1130001",
      "fullName": "Nguyễn Thuỳ An",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130002": {
      "studentId": "26T1130002",
      "fullName": "Phan Nguyễn Mỹ An",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130003": {
      "studentId": "26T1130003",
      "fullName": "Hồ Đức Anh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130004": {
      "studentId": "26T1130004",
      "fullName": "Nguyễn Ngọc Bảo Anh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130006": {
      "studentId": "26T1130006",
      "fullName": "Nguyễn Hoàng Gia Bảo",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130005": {
      "studentId": "26T1130005",
      "fullName": "Phạm Nguyễn Ly Băng",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130007": {
      "studentId": "26T1130007",
      "fullName": "Bùi Xuân Boy",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130008": {
      "studentId": "26T1130008",
      "fullName": "Đặng Như Nhật Chương",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130012": {
      "studentId": "26T1130012",
      "fullName": "Huỳnh Thị Huyền Diệu",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130013": {
      "studentId": "26T1130013",
      "fullName": "Lê Thị Bích Diệu",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130011": {
      "studentId": "26T1130011",
      "fullName": "Nguyễn Lê Thành Đạt",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130010": {
      "studentId": "26T1130010",
      "fullName": "Nguyễn Hải Đăng",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130014": {
      "studentId": "26T1130014",
      "fullName": "Trần Đại Kiến Đức",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130015": {
      "studentId": "26T1130015",
      "fullName": "Trần Trung Hiếu",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130016": {
      "studentId": "26T1130016",
      "fullName": "Nguyễn Phan Bảo Hoàng",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130018": {
      "studentId": "26T1130018",
      "fullName": "Trần Văn Huế",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "25T1020120": {
      "studentId": "25T1020120",
      "fullName": "Bùi Quang Huy",
      "className": "25T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130019": {
      "studentId": "26T1130019",
      "fullName": "Nguyễn Văn Hùng",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130022": {
      "studentId": "26T1130022",
      "fullName": "Hồ Ngọc Bảo Khang",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130023": {
      "studentId": "26T1130023",
      "fullName": "Đoàn Trung Kiên",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130024": {
      "studentId": "26T1130024",
      "fullName": "Võ Tấn Kiệt",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130025": {
      "studentId": "26T1130025",
      "fullName": "Nguyễn Thành Lương",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130026": {
      "studentId": "26T1130026",
      "fullName": "Lê Bá Quang Minh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130027": {
      "studentId": "26T1130027",
      "fullName": "Lê Bùi Quang Minh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130028": {
      "studentId": "26T1130028",
      "fullName": "Lê Thị Nhật Minh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130029": {
      "studentId": "26T1130029",
      "fullName": "Nguyễn Văn Bình Minh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130030": {
      "studentId": "26T1130030",
      "fullName": "Đỗ Triều Nguyên",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130031": {
      "studentId": "26T1130031",
      "fullName": "Thái Quốc Nguyên",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130032": {
      "studentId": "26T1130032",
      "fullName": "Hà Thị Nhàn",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130033": {
      "studentId": "26T1130033",
      "fullName": "Hồ Văn Phong",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130034": {
      "studentId": "26T1130034",
      "fullName": "Lê Hồng Phong",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130035": {
      "studentId": "26T1130035",
      "fullName": "Hoàng Hồ Xuân Phước",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130037": {
      "studentId": "26T1130037",
      "fullName": "Phan Vinh Quang",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130038": {
      "studentId": "26T1130038",
      "fullName": "Lê Thị Như Quỳnh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130039": {
      "studentId": "26T1130039",
      "fullName": "Nguyễn Thanh Tâm",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130040": {
      "studentId": "26T1130040",
      "fullName": "Thái Đạt Thành",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130041": {
      "studentId": "26T1130041",
      "fullName": "Nguyễn Khánh Toàn",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130043": {
      "studentId": "26T1130043",
      "fullName": "Ngô Minh Trí",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130044": {
      "studentId": "26T1130044",
      "fullName": "Phan Võ Minh Trí",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130045": {
      "studentId": "26T1130045",
      "fullName": "Nguyễn Thị Thu Uyên",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130046": {
      "studentId": "26T1130046",
      "fullName": "Trần Lê Khánh Vân",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130047": {
      "studentId": "26T1130047",
      "fullName": "Trần Quang Vinh",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130048": {
      "studentId": "26T1130048",
      "fullName": "Lê Nguyễn Tường Vy",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1130049": {
      "studentId": "26T1130049",
      "fullName": "Chung Hùng Vỹ",
      "className": "26T113",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "004",
          "classCode": "2026-2027.1.TIN2015.004"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "004",
      "classCode": "2026-2027.1.TIN2015.004"
    },
    "26T1029038": {
      "studentId": "26T1029038",
      "fullName": "Nguyễn Bình An",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029001": {
      "studentId": "26T1029001",
      "fullName": "Việt Đàm Phú An",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029002": {
      "studentId": "26T1029002",
      "fullName": "Quách Văn Bình",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029003": {
      "studentId": "26T1029003",
      "fullName": "Nguyễn Thành Công",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029005": {
      "studentId": "26T1029005",
      "fullName": "Lương Gia Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029004": {
      "studentId": "26T1029004",
      "fullName": "Lê Phan Nhật Đăng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029006": {
      "studentId": "26T1029006",
      "fullName": "Nguyễn Hồng Đức",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029007": {
      "studentId": "26T1029007",
      "fullName": "Võ Minh Đức",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029010": {
      "studentId": "26T1029010",
      "fullName": "Hoàng Nhật Hào",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029008": {
      "studentId": "26T1029008",
      "fullName": "Nguyễn Mạnh Hải",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029009": {
      "studentId": "26T1029009",
      "fullName": "Trần Hoàng Hải",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029011": {
      "studentId": "26T1029011",
      "fullName": "Nguyễn Anh Hiến",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029014": {
      "studentId": "26T1029014",
      "fullName": "Cao Anh Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029012": {
      "studentId": "26T1029012",
      "fullName": "Nguyễn Mạnh Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029015": {
      "studentId": "26T1029015",
      "fullName": "Nguyễn Hữu Đăng Khôi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029016": {
      "studentId": "26T1029016",
      "fullName": "Phạm Minh Khôi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029017": {
      "studentId": "26T1029017",
      "fullName": "Nguyễn Trung Kiên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029018": {
      "studentId": "26T1029018",
      "fullName": "Phan Quý Lễ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029019": {
      "studentId": "26T1029019",
      "fullName": "Nguyễn Thành Lộc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029020": {
      "studentId": "26T1029020",
      "fullName": "Phan Hồ Hoàng Mai",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029021": {
      "studentId": "26T1029021",
      "fullName": "Lê Nguyễn Bình Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029022": {
      "studentId": "26T1029022",
      "fullName": "Trần Anh Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029023": {
      "studentId": "26T1029023",
      "fullName": "Võ Đức Nhật Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029024": {
      "studentId": "26T1029024",
      "fullName": "Hoàng Ngọc Khôi Nguyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029025": {
      "studentId": "26T1029025",
      "fullName": "Nguyễn Minh Nhật",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029026": {
      "studentId": "26T1029026",
      "fullName": "Phạm Văn Khánh Nhật",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029027": {
      "studentId": "26T1029027",
      "fullName": "Nguyễn Văn Nhật Quang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029028": {
      "studentId": "26T1029028",
      "fullName": "Phạm Viết Quang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029029": {
      "studentId": "26T1029029",
      "fullName": "Đặng Trần Anh Quốc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029030": {
      "studentId": "26T1029030",
      "fullName": "Đặng Thành Tài",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029031": {
      "studentId": "26T1029031",
      "fullName": "Trần Thị Anh Tâm",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029032": {
      "studentId": "26T1029032",
      "fullName": "Phạm Phước Thanh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029034": {
      "studentId": "26T1029034",
      "fullName": "Nguyễn Minh Trường",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029036": {
      "studentId": "26T1029036",
      "fullName": "Trần Tuấn Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1029037": {
      "studentId": "26T1029037",
      "fullName": "Cao Tường Vy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "005",
          "classCode": "2026-2027.1.TIN2015.005"
        },
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "001",
          "classCode": "2026-2027.1.TIN2022.001"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "005",
      "classCode": "2026-2027.1.TIN2015.005"
    },
    "26T1020002": {
      "studentId": "26T1020002",
      "fullName": "Nguyễn Quốc Đại An",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020006": {
      "studentId": "26T1020006",
      "fullName": "Nguyễn Ngọc Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020012": {
      "studentId": "26T1020012",
      "fullName": "Nguyễn Gia Bảo",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020017": {
      "studentId": "26T1020017",
      "fullName": "Phạm Thị Tâm Châu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020036": {
      "studentId": "26T1020036",
      "fullName": "Phạm Vũ Mạnh Duy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020032": {
      "studentId": "26T1020032",
      "fullName": "Nguyễn Chí Dũng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020026": {
      "studentId": "26T1020026",
      "fullName": "Lê Gia Tuấn Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020023": {
      "studentId": "26T1020023",
      "fullName": "Trương Hải Đăng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020042": {
      "studentId": "26T1020042",
      "fullName": "Lê Thị Bảo Hân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020048": {
      "studentId": "26T1020048",
      "fullName": "Nguyễn Minh Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020051": {
      "studentId": "26T1020051",
      "fullName": "Đặng Huy Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020058": {
      "studentId": "26T1020058",
      "fullName": "Võ Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020067": {
      "studentId": "26T1020067",
      "fullName": "Ngô Đặng Minh Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020062": {
      "studentId": "26T1020062",
      "fullName": "Trần Văn Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020065": {
      "studentId": "26T1020065",
      "fullName": "Ngô Đức Hữu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020072": {
      "studentId": "26T1020072",
      "fullName": "Nguyễn Lê Tấn Kha",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020075": {
      "studentId": "26T1020075",
      "fullName": "Phan Gia Khang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020076": {
      "studentId": "26T1020076",
      "fullName": "Lê Hữu Khánh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020078": {
      "studentId": "26T1020078",
      "fullName": "Nguyễn Văn Quốc Khánh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020082": {
      "studentId": "26T1020082",
      "fullName": "Phan Đăng Khoa",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020085": {
      "studentId": "26T1020085",
      "fullName": "Phan Hồ Tuấn Kiệt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020089": {
      "studentId": "26T1020089",
      "fullName": "Huỳnh Ngọc Khánh Lam",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020092": {
      "studentId": "26T1020092",
      "fullName": "Trần Viết Lanh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020099": {
      "studentId": "26T1020099",
      "fullName": "Nguyễn Phi Long",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020102": {
      "studentId": "26T1020102",
      "fullName": "Hoàng Hữu Tuấn Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020104": {
      "studentId": "26T1020104",
      "fullName": "Lê Sĩ Quang Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020110": {
      "studentId": "26T1020110",
      "fullName": "Huỳnh Ngọc Diễm My",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020117": {
      "studentId": "26T1020117",
      "fullName": "Giả Thị Thảo Nguyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020125": {
      "studentId": "26T1020125",
      "fullName": "Huỳnh Nhật",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020132": {
      "studentId": "26T1020132",
      "fullName": "Nguyễn Sim Paxan",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020133": {
      "studentId": "26T1020133",
      "fullName": "Dương Bá Phát",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020137": {
      "studentId": "26T1020137",
      "fullName": "Trần Tuấn Phong",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020140": {
      "studentId": "26T1020140",
      "fullName": "Nguyễn Lê Thanh Phương",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020142": {
      "studentId": "26T1020142",
      "fullName": "Lê Ngọc Minh Quân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020148": {
      "studentId": "26T1020148",
      "fullName": "Đoàn Hồ Anh Quốc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020151": {
      "studentId": "26T1020151",
      "fullName": "Phan Hoàng Sang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020155": {
      "studentId": "26T1020155",
      "fullName": "Ngô Nguyễn Công Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020159": {
      "studentId": "26T1020159",
      "fullName": "Châu Anh Tài",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020171": {
      "studentId": "26T1020171",
      "fullName": "Phạm Minh Thành",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020176": {
      "studentId": "26T1020176",
      "fullName": "Hoàng Anh Thiện",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020180": {
      "studentId": "26T1020180",
      "fullName": "Trần Thị Thùy Tiên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020185": {
      "studentId": "26T1020185",
      "fullName": "Phạm Thị Thùy Trang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020190": {
      "studentId": "26T1020190",
      "fullName": "Phạm Tiến Trình",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020192": {
      "studentId": "26T1020192",
      "fullName": "Lê Quốc Trung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020200": {
      "studentId": "26T1020200",
      "fullName": "Trần Thanh Tuấn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020195": {
      "studentId": "26T1020195",
      "fullName": "Huỳnh Lê Tuấn Tú",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020204": {
      "studentId": "26T1020204",
      "fullName": "Nguyễn Ngọc Khánh Vân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020206": {
      "studentId": "26T1020206",
      "fullName": "Phan Xuân Việt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "006",
          "classCode": "2026-2027.1.TIN2015.006"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "006",
      "classCode": "2026-2027.1.TIN2015.006"
    },
    "26T1020004": {
      "studentId": "26T1020004",
      "fullName": "Hoàng Nguyễn Nguyên Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020007": {
      "studentId": "26T1020007",
      "fullName": "Nguyễn Tuấn Anh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020014": {
      "studentId": "26T1020014",
      "fullName": "Trương Công Bảo",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020020": {
      "studentId": "26T1020020",
      "fullName": "Nguyễn Cửu Bảo Cơ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020024": {
      "studentId": "26T1020024",
      "fullName": "Đinh Mạnh Danh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020033": {
      "studentId": "26T1020033",
      "fullName": "Nguyễn Văn Dũng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020027": {
      "studentId": "26T1020027",
      "fullName": "Ngô Phan Tiến Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020029": {
      "studentId": "26T1020029",
      "fullName": "Trần Nhơn Hoàng Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020039": {
      "studentId": "26T1020039",
      "fullName": "Huỳnh Ngọc Quỳnh Giao",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020043": {
      "studentId": "26T1020043",
      "fullName": "Trần Lê Thúy Hằng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020050": {
      "studentId": "26T1020050",
      "fullName": "Phan Trung Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020053": {
      "studentId": "26T1020053",
      "fullName": "Nguyễn Phi Hoàng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020068": {
      "studentId": "26T1020068",
      "fullName": "Nguyễn Gia Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020069": {
      "studentId": "26T1020069",
      "fullName": "Nguyễn Quang Huy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020060": {
      "studentId": "26T1020060",
      "fullName": "Lê Đăng Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020063": {
      "studentId": "26T1020063",
      "fullName": "Lê Nguyễn Minh Hưng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020074": {
      "studentId": "26T1020074",
      "fullName": "Nguyễn Lê Anh Khang",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020081": {
      "studentId": "26T1020081",
      "fullName": "Hoàng Đình Minh Khoa",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020086": {
      "studentId": "26T1020086",
      "fullName": "Trần Đặng Văn Kiệt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020091": {
      "studentId": "26T1020091",
      "fullName": "Hoàng Sùng Lãm",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020090": {
      "studentId": "26T1020090",
      "fullName": "Nguyễn Hoàng Lâm",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020096": {
      "studentId": "26T1020096",
      "fullName": "Phan Thị Khánh Linh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020097": {
      "studentId": "26T1020097",
      "fullName": "Nguyễn Công Lộc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020103": {
      "studentId": "26T1020103",
      "fullName": "Hoàng Văn Nhật Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020109": {
      "studentId": "26T1020109",
      "fullName": "Trần Quốc Minh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020111": {
      "studentId": "26T1020111",
      "fullName": "Nguyễn Lê Kiều My",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020115": {
      "studentId": "26T1020115",
      "fullName": "Trần Thị Thanh Ngân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020118": {
      "studentId": "26T1020118",
      "fullName": "Mai Tuấn Nguyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020122": {
      "studentId": "26T1020122",
      "fullName": "Hồ Tùng Nhân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020124": {
      "studentId": "26T1020124",
      "fullName": "Phạm Nguyễn Thành Nhân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020126": {
      "studentId": "26T1020126",
      "fullName": "Hoàng Ái Nhi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020139": {
      "studentId": "26T1020139",
      "fullName": "Nguyễn Ngọc Phước",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020149": {
      "studentId": "26T1020149",
      "fullName": "Huỳnh Thị Tú Quyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020152": {
      "studentId": "26T1020152",
      "fullName": "Nguyễn Xuân Sáng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020158": {
      "studentId": "26T1020158",
      "fullName": "Võ Trần Hải Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020170": {
      "studentId": "26T1020170",
      "fullName": "Nguyễn Xuân Thành",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020172": {
      "studentId": "26T1020172",
      "fullName": "Trần Bình Thạnh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020143": {
      "studentId": "26T1020143",
      "fullName": "Nguyễn Hữu Quân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020156": {
      "studentId": "26T1020156",
      "fullName": "Nguyễn Hoàng Sơn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020164": {
      "studentId": "26T1020164",
      "fullName": "Phan Anh Tây",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020177": {
      "studentId": "26T1020177",
      "fullName": "Cao Hoàng Thịnh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "25T1020316": {
      "studentId": "25T1020316",
      "fullName": "Nguyễn Hoàng Quốc Thịnh",
      "className": "25T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020187": {
      "studentId": "26T1020187",
      "fullName": "Nguyễn Thanh Trí",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020193": {
      "studentId": "26T1020193",
      "fullName": "Trương Duy Trung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020198": {
      "studentId": "26T1020198",
      "fullName": "Nguyễn Thanh Tuân",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020201": {
      "studentId": "26T1020201",
      "fullName": "Phan Quốc Tường",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020205": {
      "studentId": "26T1020205",
      "fullName": "Phan Văn Quốc Việt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020210": {
      "studentId": "26T1020210",
      "fullName": "Nguyễn Đăng Hoàng Vũ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "007",
          "classCode": "2026-2027.1.TIN2015.007"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "007",
      "classCode": "2026-2027.1.TIN2015.007"
    },
    "26T1020229": {
      "studentId": "26T1020229",
      "fullName": "Nguyễn Thành An",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020214": {
      "studentId": "26T1020214",
      "fullName": "Sisouphan Chandavone",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020231": {
      "studentId": "26T1020231",
      "fullName": "Trần Nguyên Chương",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020236": {
      "studentId": "26T1020236",
      "fullName": "Võ Phước Duy",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020234": {
      "studentId": "26T1020234",
      "fullName": "Nguyễn Tuấn Dũng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020232": {
      "studentId": "26T1020232",
      "fullName": "Nguyễn Đức Thành Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020233": {
      "studentId": "26T1020233",
      "fullName": "Nguyễn Tiến Đạt",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020215": {
      "studentId": "26T1020215",
      "fullName": "Douangmala Hatthasone",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020240": {
      "studentId": "26T1020240",
      "fullName": "Trương Phạm Văn Hiếu",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020216": {
      "studentId": "26T1020216",
      "fullName": "Phengthavong Hongmany",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020242": {
      "studentId": "26T1020242",
      "fullName": "Mai Quốc Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020243": {
      "studentId": "26T1020243",
      "fullName": "Trần Mạnh Hùng",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020244": {
      "studentId": "26T1020244",
      "fullName": "Phạm Thế Kha",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020217": {
      "studentId": "26T1020217",
      "fullName": "Symoukda Khamphar",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020218": {
      "studentId": "26T1020218",
      "fullName": "Douang Oudom Khonekham",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020219": {
      "studentId": "26T1020219",
      "fullName": "Bounyaseng Lotchana",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020248": {
      "studentId": "26T1020248",
      "fullName": "Nguyễn Huy Nam",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020251": {
      "studentId": "26T1020251",
      "fullName": "Hoàng Trần Hạnh Nguyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020254": {
      "studentId": "26T1020254",
      "fullName": "Hồ Uyển Nhi",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020256": {
      "studentId": "26T1020256",
      "fullName": "Trương Thị Tuyết Nhung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020257": {
      "studentId": "26T1020257",
      "fullName": "Võ Thị Nhung",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020220": {
      "studentId": "26T1020220",
      "fullName": "Khamdalanikone Phayvan",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020221": {
      "studentId": "26T1020221",
      "fullName": "Chanmexay Phouthasone",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020222": {
      "studentId": "26T1020222",
      "fullName": "Siliphanh Phoutthachit",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020259": {
      "studentId": "26T1020259",
      "fullName": "Phan Trường Phú",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020260": {
      "studentId": "26T1020260",
      "fullName": "Nguyễn Hoàng Phúc",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020223": {
      "studentId": "26T1020223",
      "fullName": "Lorvankham Saiyfon",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020224": {
      "studentId": "26T1020224",
      "fullName": "Pengsavath Salidta",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020225": {
      "studentId": "26T1020225",
      "fullName": "Aphailath Sintavanh",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020263": {
      "studentId": "26T1020263",
      "fullName": "Võ Ngọc Tài",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020226": {
      "studentId": "26T1020226",
      "fullName": "Phommachanh Thanongsak",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020264": {
      "studentId": "26T1020264",
      "fullName": "Nguyễn Toàn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020267": {
      "studentId": "26T1020267",
      "fullName": "Trần Phước Đức Tuấn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020268": {
      "studentId": "26T1020268",
      "fullName": "Trần Quốc Tuấn",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020270": {
      "studentId": "26T1020270",
      "fullName": "Trần Thị Thu Uyên",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020227": {
      "studentId": "26T1020227",
      "fullName": "Sihaphom Vilasak",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020271": {
      "studentId": "26T1020271",
      "fullName": "Lương Triệu Vỹ",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020272": {
      "studentId": "26T1020272",
      "fullName": "Bùi Thị Hải Yến",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "26T1020228": {
      "studentId": "26T1020228",
      "fullName": "Syhathep Yotee",
      "className": "26T102",
      "enrollments": [
        {
          "subjectName": "Ngôn ngữ lập trình",
          "subjectCode": "TIN2015",
          "group": "008",
          "classCode": "2026-2027.1.TIN2015.008"
        }
      ],
      "subjectName": "Ngôn ngữ lập trình",
      "subjectCode": "TIN2015",
      "group": "008",
      "classCode": "2026-2027.1.TIN2015.008"
    },
    "20T1020024": {
      "studentId": "20T1020024",
      "fullName": "Kiều Phúc Hải",
      "className": "20T102",
      "enrollments": [
        {
          "subjectName": "Kỹ thuật lập trình",
          "subjectCode": "TIN2022",
          "group": "002",
          "classCode": "2026-2027.1.TIN2022.002"
        }
      ],
      "subjectName": "Kỹ thuật lập trình",
      "subjectCode": "TIN2022",
      "group": "002",
      "classCode": "2026-2027.1.TIN2022.002"
    }
  }
};

// Danh bạ phẳng tra cứu trực tiếp theo MSSV (tương thích ngược với HUSC_STUDENTS_DATABASE)
var HUSC_STUDENTS_DATABASE = HUSC_STUDENTS_DATA.byStudentId;

if (typeof window !== 'undefined') {
  window.HUSC_STUDENTS_DATA = HUSC_STUDENTS_DATA;
  window.HUSC_STUDENTS_DATABASE = HUSC_STUDENTS_DATABASE;
}
if (typeof globalThis !== 'undefined') {
  globalThis.HUSC_STUDENTS_DATA = HUSC_STUDENTS_DATA;
  globalThis.HUSC_STUDENTS_DATABASE = HUSC_STUDENTS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HUSC_STUDENTS_DATA;
}
