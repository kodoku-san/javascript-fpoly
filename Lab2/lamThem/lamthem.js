function tinhtien(sl, dongia){
	var patt = /[a-z]/;
	if (patt.test(sl)) {
		return -1;
	}
	if (patt.test(dongia)) {
		return -2;
	}
	return sl * dongia;
}
var ngay = prompt("Nhập ngày hđ");
var ten = prompt("Nhập tên hàng");
var sl = prompt("Nhập số lượng");
var dongia = prompt("Nhập đơn giá");
var tongtien = -1;
while(tongtien == -1 || tongtien == -2){	
	var tongtien = tinhtien(sl, dongia);
	if (tongtien == -1) {
		alert("Vui lòng nhập đúng định dạng số lượng sản phẩm!");
		var sl = prompt("Nhập số lượng");
	} else if (tongtien == -2) {
		alert("Vui lòng nhập đúng định dạng đơn giá sản phẩm!");
		var dongia = prompt("Nhập đơn giá");		
	}
}
document.getElementById('ngay').innerHTML = ngay;
document.getElementById('ten').innerHTML = ten;
document.getElementById('sl').innerHTML = sl;
document.getElementById('dongia').innerHTML = dongia;
document.getElementById('tongtien').innerHTML = tongtien;