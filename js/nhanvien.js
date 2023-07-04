function NhanVien(
  _taiKhoan,
  _hoVaTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loai = "";
  this.tinhTongLuong = function () {
    var slcChucVu = document.getElementById("chucvu");
    if (slcChucVu.selectedIndex === 1) {
      this.tongLuong = this.luongCoBan * 3;
    } else if (slcChucVu.selectedIndex === 2) {
      this.tongLuong = this.luongCoBan * 2;
    } else if (slcChucVu.selectedIndex === 3) {
      this.tongLuong = this.luongCoBan;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.loai = "Xuất Sắc";
    } else if (this.gioLam >= 176) {
      this.loai = "Giỏi";
    } else if (this.gioLam >= 160) {
      this.loai = "Khá";
    } else {
      this.loai = "Trung Bình";
    }
  };
}
