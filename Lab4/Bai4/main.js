var w;

function moWin(){
	w = window.open("thongtin.html", "tt", "witd=400, height=200, top=50, left=600");
	w.focus();
}

function dongWin(){
	w.close();
}

function diChuyenMotChut(){
	w.moveBy(5,10);
	w.focus();
}

function diChuyenToiDiem(){
	var x = prompt("Nhập tọa độ điểm x");
	var y = prompt("Nhập tọa độ điểm y");
	w.moveTo(x, y);
	w.focus();
}

function inAn(){
	w.print();
}
