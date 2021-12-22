function thuhien(){
	var pass = document.getElementById('pass').value;
	var rs = document.getElementById('rs');
	var td = document.getElementById('thongdiep');

	if (pass.toLowerCase() == 'ps17588') {
		rs.innerHTML = "Đúng pass rồi!"
		rs.style = "color: #35f36b";
		td.style = "display: block";
	} else if (pass != '') {
		rs.innerHTML = "Sai pass rồi! Nhập lại đêi"
		rs.style = "color: #ff7f79";
		td.style = "display: none";
	}
}