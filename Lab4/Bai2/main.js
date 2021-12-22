var Student = new Object();


Student.hocluc;
Student.hoten = prompt("Nhập họ và tên SV"); 
var pt = /[a-z]/;
do {
	Student.diem = prompt("Nhập điểm");
} while (Student.diem > 10 || Student.diem < 0 || pt.test(Student.diem))

Student.xuat = function() {
	if (this.hoten == '') {
		this.hoten = 'Hồ Hoàng Phú';
	}
	if (this.diem == '') {
		this.diem = 10;
	}


	if (this.diem >= 5) {
		this.hocluc = "Đậu nhé!";
	} else {
		this.hocluc = "Rớt rồi :( Lần sau cố lên nhé";
	}
	document.getElementById('ht').innerHTML = this.hoten;
	document.getElementById('dtb').innerHTML = this.diem;
	document.getElementById('hocluc').innerHTML = this.hocluc;
	document.getElementsByClassName('box')[0].style = '';
	document.getElementById('bt').style = 'display: none;';
}