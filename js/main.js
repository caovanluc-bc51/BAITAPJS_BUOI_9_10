var dsnv = new DSNV();
var validation = new Validation();
getLocalStorage();
function getEle(id) {
  return document.getElementById(id);
}
//ẩn nút cập nhật khi bấm vào thêm nhân viên
function btnThemNhanVien() {
  getEle("datepicker").value = "";
  getEle("btnCapNhat").style.display = "none";
}
//khi nhấn nút đóng
function resetDataInput() {
  //reset value input
  getEle("tknv").disabled = false;
  getEle("tknv").value = "";
  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").selectedIndex = 0;
  getEle("gioLam").value = "";
  getEle("btnThemNV").style.display = "block";
  //reset thông báo validation
  getEle("errorTaiKhoan").style.display = "none";
  getEle("errorTaiKhoan").innerHTML = "";
  getEle("errorHoVaTen").style.display = "none";
  getEle("errorHoVaTen").innerHTML = "";
  getEle("errorEmail").style.display = "none";
  getEle("errorEmail").innerHTML = "";
  getEle("errorMatKhau").style.display = "none";
  getEle("errorMatKhau").innerHTML = "";
  getEle("errorNgayLam").style.display = "none";
  getEle("errorNgayLam").innerHTML = "";
  getEle("errorLuongCoBan").style.display = "none";
  getEle("errorLuongCoBan").innerHTML = "";
  getEle("errorChucVu").style.display = "none";
  getEle("errorChucVu").innerHTML = "";
  getEle("errorGioLam").style.display = "none";
  getEle("errorGioLam").innerHTML = "";
}
function layThongTinNhanVien(isAdd) {
  var taiKhoan = getEle("tknv").value;
  var hoVaTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;
  //flag
  var isValid = true;
  //validation taiKhoan
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(
        taiKhoan,
        "errorTaiKhoan",
        "(*) Vui lòng nhập tên tài khoản"
      ) &&
      validation.checkPattern(
        taiKhoan,
        "errorTaiKhoan",
        "(*) Vui lòng nhập tài khoản bằng chữ số",
        /^[0-9]+$/
      ) &&
      validation.kiemTraDoDaiKiTu(
        taiKhoan,
        "errorTaiKhoan",
        "Tên tài khoản từ 4 đến 6 chữ số",
        4,
        6
      ) &&
      validation.kiemTraTaiKhoanDaTonTai(
        taiKhoan,
        "errorTaiKhoan",
        "Tài khoản đã tồn tại",
        dsnv.arr
      );
  }
  //validation hoVaTen
  isValid &=
    validation.kiemTraRong(
      hoVaTen,
      "errorHoVaTen",
      "(*) Vui lòng nhập họ và tên"
    ) &&
    validation.checkPattern(
      hoVaTen,
      "errorHoVaTen",
      "(*) Vui lòng nhập họ tên bằng chữ cái",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ\\s]+$"
    );
  //validation email
  isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập email") &&
    validation.checkPattern(
      email,
      "errorEmail",
      "(*) Vui lòng nhập email đúng định dạng",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
  //validation matKhau
  isValid &=
    validation.kiemTraRong(
      matKhau,
      "errorMatKhau",
      "(*) Vui lòng nhập mật khẩu"
    ) &&
    validation.kiemTraDoDaiKiTu(
      matKhau,
      "errorMatKhau",
      "(*) Vui lòng nhập mật khẩu từ 6 đến 10 kí tự",
      6,
      10
    ) &&
    validation.checkPattern(
      matKhau,
      "errorMatKhau",
      "(*) Vui lòng nhập mật khẩu có ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt",
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
    );
  //validation ngayLam
  isValid &=
    validation.kiemTraRong(
      ngayLam,
      "errorNgayLam",
      "(*) Vui lòng nhập ngày làm"
    ) &&
    validation.checkPattern(
      ngayLam,
      "errorNgayLam",
      "Vui lòng nhập ngày làm theo định dạng tháng/ngày/năm",
      /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/
    );
  //validaion luongCoBan
  isValid &=
    validation.kiemTraRong(
      luongCoBan,
      "errorLuongCoBan",
      "(*) Vui lòng nhập lương cơ bản"
    ) &&
    validation.checkPattern(
      luongCoBan,
      "errorLuongCoBan",
      "(*) Vui lòng nhập lương cơ bản ở dạng chữ số",
      /^[0-9]+$/
    ) &&
    validation.kiemTraGioLamVaLuongCoBan(
      luongCoBan,
      "errorLuongCoBan",
      "(*) Vui lòng nhập lương cơ bản từ 1 triệu đến 20 triệu",
      1000000,
      20000000
    );
  //validation chucVu
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "errorChucVu",
    "(*) Vui lòng chọn chức vụ"
  );
  //validation gioLam
  isValid &=
    validation.kiemTraRong(
      gioLam,
      "errorGioLam",
      "(*) Vui lòng nhập số giờ làm"
    ) &&
    validation.checkPattern(
      gioLam,
      "errorGioLam",
      "(*) Vui lòng nhập số giờ làm bằng chữ số",
      /^[0-9]+$/
    ) &&
    validation.kiemTraGioLamVaLuongCoBan(
      gioLam,
      "errorGioLam",
      "(*) Vui lòng nhập số giờ làm từ 80 đến 200",
      80,
      200
    );

  //tạo đối tượng nhanVien từ lớp đối tượng NhanVien
  //nếu đầu vào nhập đúng vượt qua validation thì mới tạo đối tượng nv
  if (isValid) {
    var nv = new NhanVien(
      taiKhoan,
      hoVaTen,
      email,
      matKhau,
      ngayLam,
      luongCoBan,
      chucVu,
      gioLam
    );
    nv.tinhTongLuong();
    nv.xepLoai();
    return nv;
  }
  return null;
}
function renderTable(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    var numberFormat = new Intl.NumberFormat("VN-vn");
    content += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoVaTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${numberFormat.format(nv.tongLuong)}</td>
        <td>${nv.loai}</td>
        <td>
        <button class='btn btn-success' data-toggle="modal" data-target="#myModal" onclick = "suaNV('${
          nv.taiKhoan
        }')">Sửa</button>
        <button class='btn btn-danger' onclick="xoaNV('${
          nv.taiKhoan
        }')">Xóa</button>
        </td>
        </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}
function themNhanVien() {
  var nhanvien = layThongTinNhanVien(true);
  if (nhanvien) {
    dsnv.themNhanVien(nhanvien);
    renderTable(dsnv.arr);
    setLocalStorage();
  }
}
//lưu dữ liệu vào local trên trình duyệt để khi reload lại thông tin nhập trước đó không mất
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}
//lấy dữ liệu đã lưu trước đó ở local và hiển thị ra lại sau khi reload
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV");
    var dataJson = JSON.parse(dataString);
    dsnv.arr = dataJson;
    renderTable(dsnv.arr);
  }
}
function xoaNV(taiKhoan) {
  dsnv._xoaNV(taiKhoan);
  //render lại table
  renderTable(dsnv.arr);
  //lưu lại localStorage
  setLocalStorage();
}
function suaNV(taiKhoan) {
  var nv = dsnv.layThongTinChiTietNV(taiKhoan);
  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoVaTen;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
  }

  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "inline-block";
}
getEle("btnCapNhat").onclick = function () {
  var nv = layThongTinNhanVien(false);
  if (nv) {
    dsnv.capNhatNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
  }
};
function searchNV() {
  var txtSearch = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNV(txtSearch);
  renderTable(mangTimKiem);
}
getEle("searchName").addEventListener("keyup", searchNV);
