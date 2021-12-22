var so1, so2, pheptinh, kq;

function ganSo(so){
	if (so1 == null) {
		so1 = so;
		document.getElementById('s1').innerHTML = so1;
	} else if (pheptinh == null) {
		alert("Nhập theo thứ tự: số thứ nhất -> phép tính -> số thứ hai");
	} else {
		so2 = so;
		document.getElementById('s2').innerHTML = so2;
	}
	console.log("1: " + so1);
	console.log("2: " + so2);
}
function mathL3(pt){
	if (so1 == null) {
		alert("Nhập theo thứ tự: số thứ nhất -> phép tính -> số thứ hai");
	} else{
		pheptinh = pt;
		switch(pt) {
			case "+" :
				pt = "+";
				break;
			case "-" :
				pt = "-";
				break;
			case "*" :
				pt = "x";
				break;
			case "/" :
				pt = ":";
				break;
			default  :
				alert("Đã có lỗi xãy ra!");
				return false;
		}
		document.getElementById('pt').innerHTML = pt;
	}
}

function result(){
	if (so2 == null) {
		alert("Chưa nhập đủ số cần tính!");
	} else {
		switch(pheptinh) {
			case "+" :
				kq = parseInt(so1) + parseInt(so2);
				break;
			case "-" :
				kq = parseInt(so1) - parseInt(so2);
				break;
			case "*" :
				kq = parseInt(so1) * parseInt(so2);
				break;
			case "/" :
				kq = parseInt(so1) / parseInt(so2);
				break;
			default  :
				alert("Đã có lỗi xãy ra!");
				return false;
		}
		document.getElementById('rs').innerHTML = kq;
	}
}
function clearL3(){
	pheptinh = null;
	so1      = null;
	so2      = null;
	kq       = null;
	document.getElementById('s1').innerHTML = "...";
	document.getElementById('s2').innerHTML = "...";
	document.getElementById('pt').innerHTML = "...";
	document.getElementById('rs').innerHTML = "...";
}