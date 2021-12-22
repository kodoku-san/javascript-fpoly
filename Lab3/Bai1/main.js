var p = /[a-z]/;
do{
	var a = prompt("Nhập số thứ nhất:");
	var b = prompt("Nhập số thứ hai:");	
} while(p.test(a) || p.test(b))
var pheptinh = prompt("Nhập phép tính:");

switch(pheptinh){
	case "+" :
		var kq = parseInt(a) + parseInt(b);
		document.write(a + " + " + b + " = " + kq);
		break;
	case "-" :
		var kq = parseInt(a) - parseInt(b);
		document.write(a + " - " + b + " = " + kq);
		break;
	case "*" :
		var kq = parseInt(a) * parseInt(b);
		document.write(a + " * " + b + " = " + kq);
		break;
	case "/" :
		var kq = parseInt(a) / parseInt(b);
		document.write(a + " / " + b + " = " + kq);
		break;
	default: 
		document.write("\"" + pheptinh + "\" không phải phép tính hợp lệ");
		break;
}