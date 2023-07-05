function Validation() {
  this.kiemTraRong = function (value, errorId, mess) {
    if (value === "") {
      //show error để thông báo
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    //hide error
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };
  this.kiemTraDoDaiKiTu = function (value, errorId, mess, min, max) {
    if (min <= value.trim().length && value.trim().length <= max) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };
  //kiểm tra chuỗi kí tự
  this.checkPattern = function (value, errorId, mess, letter) {
    if (value.match(letter)) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };
  this.kiemTraTaiKhoanDaTonTai = function (value, errorId, mess, listNV) {
    var isExist = false;
    for (var i = 0; i < listNV.length; i++) {
      var nv = listNV[i];
      if (nv.taiKhoan == value) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };
  this.kiemTraChucVu = function (idSelect, errorId, mess) {
    var selectChucVu = document.getElementById(idSelect);
    if (selectChucVu.selectedIndex !== 0) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };
  this.kiemTraGioLamVaLuongCoBan = function (value, errorId, mess, min, max) {
    if (value < min || value > max) {
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    }
    getEle(errorId).innerHTML = "";
    getEle(errorId).style.display = "none";
    return true;
  };
}
