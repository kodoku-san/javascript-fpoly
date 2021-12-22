function otherFavorite(){
	var c = document.getElementsByName('favorite');
	if (c[7].checked) {
		c[8].style = "margin-top: 10px;";
	} else {
		c[8].style = "margin-top: 10px;display: none;";
	}
	
}

function res(){
	if (document.getElementsByName('hoten')[0].value == '') {
		alert("Vui lòng nhập họ và tên của bạn!")
		return false;
	} 

	if(document.querySelector('input[type="date"]').value == ''){
		alert("Vui lòng nhập ngày sinh của bạn!")
		return false;
	}

	var s = document.getElementsByName('phonenumber');
	if (s[0].value == '') {
		alert("Vui lòng nhập số đt của bạn!")
		return false;
	} else if(/[a-z]/.test(s[0].value)){
		alert("Vui lòng không nhập số đt là chữ!");
		s[0].value = "";
		return false;
	} else if (s[0].value.length < 10 || s[0].value.length > 11) {
		alert("Vui lòng nhập số đt 10 hoặc 11 số!");
		s[0].value = "";
		return false;
	}

	var s = document.getElementsByName('sex');
	if (!s[0].checked && !s[1].checked) {
		alert("Vui lòng chọn giới tính!")
		return false;
	}

	var f = document.getElementsByName('favorite');
	if (f[f.length - 2].checked) {
		if (f[f.length - 1].value == "") {
			alert("Vui lòng nhập sở thích của bạn!")
			return false;
		}
	} else {
		var flag = false;
		for (var i = 0; i < f.length - 1; i++) {
			if (f[i].checked) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			alert("Vui lòng chọn ít nhất một sở thích!")
			return false;
		}
	}
	
	alert("Chúc mừng bạn đăng kí thành công!");
}