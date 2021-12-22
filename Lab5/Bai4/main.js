function chon(){
	var arr = document.getElementsByName('me');
	var kq  = document.getElementById('ketqua');
	kq.innerHTML = "";
	var t = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].checked) {
			var vl   = arr[i].value;
			var text = document.createTextNode(vl);
			var tagp = document.createElement("p");
				tagp.appendChild(text);
				kq.appendChild(tagp);
				t++;
		}
		if (t == 5) {
			var text = document.createTextNode("Với con ba là tất cả!");
			var tagp = document.createElement("p");
				tagp.appendChild(text);
				kq.appendChild(tagp);
		}
	}
	if (t > 0) {
		kq.className = "checked";
	} else {
		kq.className = "notCheck";
		kq.innerHTML = "Bạn chưa chọn cái gì hết!";
	}
}