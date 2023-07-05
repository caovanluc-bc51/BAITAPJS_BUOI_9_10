function DSNV() {
  this.arr = [];
  this.themNhanVien = function (nv) {
    this.arr.push(nv);
  };
  this._timViTri = function (taiKhoan) {
    var index = -1;
    for (var i = 0; this.arr.length; i++) {
      var nv = this.arr[i];
      if (nv.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  this._xoaNV = function (taiKhoan) {
    var index = this._timViTri(taiKhoan);
    if (index !== -1) {
      //xóa phần tử của mảng
      this.arr.splice(index, 1);
    }
  };
  this.layThongTinChiTietNV = function (taiKhoan) {
    //tim vị trí
    var index = this._timViTri(taiKhoan);
    if (index !== -1) {
      var nv = this.arr[index];
      return nv;
    }
  };
  this.capNhatNV = function (nv) {
    var index = this._timViTri(nv.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };
  this.timKiemNV = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      var keywordLowerCase = keyword.toLowerCase();
      var loaiNVLowerCase = nv.loai.toLowerCase();
      if (loaiNVLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    }
    return mangTimKiem;
  };
}
