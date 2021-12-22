function checkNNH(f){
    if (f) {
    	document.getElementById('inputPVC').style = "text-align: center;";
    } else {
    	document.getElementById('inputPVC').style = "display: none;";
    }
}

function datmua(){
	var listID  = ['inputSP', 'loaisp', 'inputDonGia'];
	var listNID = ['Sản Phẩm', 'Loại Sản Phẩm', 'Đơn giá SP'];
 	for (var i = 0; i < listID.length; i++) {
		var vl = document.getElementById(listID[i]);
		if (i == 2) {
			if (Number(vl.value) <= 0) {
				alert("Vui lòng nhập " + listNID[i] + " lớn hơn 0");
				vl.value = '';
				return false;
			}
		}
		if (vl.value == '') {
			alert("Vui lòng nhập " + listNID[i]);
			return false;
		}
	}
	var check = document.getElementsByName('noinh');
	if (!check[0].checked && !check[1].checked) {
		alert("Vui lòng chọn nơi giao hàng");
		return false;
	}
	alert("Đặt hàng thành công bạn nhé!");
}