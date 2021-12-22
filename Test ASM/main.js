function tinh(){
	// giá trị loại 1 2 3
	var loai1 = document.getElementById('loai1').value;
	var loai2 = document.getElementById('loai2').value;
	var loai3 = document.getElementById('loai3').value;
	// giá trị loại 1 2 3

	// lấy giá trị từ select khu vực
	var khuvuc = document.getElementById('khuvuc').value;

	if (loai1 != "" && loai2 != "" && loai3 != "" && khuvuc != "") { // nếu đã chọn hết thì mới mở
		document.getElementById('rs').style = ""; // mở lại thông tin kết quả style =""
	}

	var tongsl = Number(loai1) + Number(loai2) + Number(loai3);
	// tổng 3 loại: trước khi cộng, ép kiểu lại thành number

	// thanh value của input tongsl lại thành tổng của 3 loại
	document.getElementById('tongsl').value = tongsl;


	//tính tiền vận chuyển, 
	// tongsl < 100 => 10 phần trăm
	if (tongsl < 100) {
		document.getElementById('tienvc').value = '10 phần trăm';
	} else if (tongsl < 200) { // 100 <= tongsl < 200 => 5 phần trăm
		document.getElementById('tienvc').value = '5 phần trăm';
	} else { // ngược lại => free
		document.getElementById('tienvc').value = 'free';
	}


	// tính tiền thưởng 
	if (khuvuc == "1") {
		document.getElementById('tienthuong').value = '100000';
	} else if (khuvuc == "2") {
		document.getElementById('tienthuong').value = '50000';
	} else {
		document.getElementById('tienthuong').value = '0';
	}
}