var PTB2 = new Object();

PTB2.a, PTB2.b, PTB2.c, PTB2.delta;

PTB2.nhap = function () {
	this.a = prompt("Nhập hệ số a");
	this.b = prompt("Nhập hệ số b");
	this.c = prompt("Nhập hệ số c");
	var pt = /[a-z]/;
	if (this.a == 0 || pt.test(this.a) || pt.test(this.b) || pt.test(this.c)) {
		PTB2.nhap();
	}
	var ts = '';
	if (this.a != 1) {
		if (this.a == -1) {
			ts += "-";
		} else {
			ts += this.a ;
		}
	} 

	//write b;
	if (this.b > 0 ) {
		ts += "x<sup>2</sup> + ";
		if (this.b != 1) {
			ts += this.b;
		}
	} else {				
		ts += "x<sup>2</sup> - ";
		if (this.b != 1) {
			ts += this.b*(-1);
		}
	}

	//write c;
	if (this.c > 0) {
		ts += "x + ";
		ts += this.c;
	} else if (this.c < 0) {
		ts += "x - ";
		ts += this.c*(-1);
	} else {
		ts += "x";
	}
	ts += " = 0";
	this.delta = Math.pow(this.b, 2) - 4*this.a*this.c;
	document.getElementById('textShow').innerHTML = ts;
	document.getElementById('rs').innerHTML = '';
}

PTB2.giai = function () {
	var ts = '';
	if (this.delta < 0 ) {
		ts += "<p>Phương trình vô nghiệm!</p>";
	} else if (this.delta == 0) {
		var x = -this.b/(2*this.a);
		ts += "<p>Phương trình có nghiệm kép x<sub>0</sub> = " + x + "</p>";
	} else {
		var x1 = (-this.b + Math.sqrt(this.delta))/(2*this.a);
		var x2 = (-this.b - Math.sqrt(this.delta))/(2*this.a);
		ts += "<p>Phương trình có 2 nghiệm phân biệt: </p>";
		ts += "<p>x<sub>1</sub> = " + x1 + "</p>";
		ts += "<p>x<sub>2</sub> = " + x2 + "</p>";
	}
	document.getElementById('rs').innerHTML = ts;
}