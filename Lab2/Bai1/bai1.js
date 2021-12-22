function tinhtuoi(ns){
	if (ns > 2021) {
		return 0;
	}
	var td = new Date();
	var n  = td.getFullYear();
	return n - ns;
}
var ht = prompt("Bạn tên là gì vậy?");
if (ht == '') {
	ht = "Hồ Hoàng Phú";
}
var ns = prompt("Bạn sinh năm bao nhiu??");
if (ns == '') {
	ns = 2002;
}
var t  = tinhtuoi(ns);
if (t == 0) {
	alert("Vui lòng nhập đúng năm sinh");
	document.getElementById('ht').innerHTML = "NaN";
	document.getElementById('ns').innerHTML = "NaN";
	document.getElementById('tuoi').innerHTML = "NaN";
} else {
	document.getElementById('ht').innerHTML = ht;
	document.getElementById('ns').innerHTML = ns;
	document.getElementById('tuoi').innerHTML = t;
}
