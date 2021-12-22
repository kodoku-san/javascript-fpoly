function add(){
	var arr = document.getElementsByName('tasks')[0].value;
	var kq  = document.getElementById('ketqua');
	var text = document.createTextNode(arr);
	
	if (arr == "") {
		alert("Nhập gì đó đi bro!");
	} else {
		var tagp = document.createElement("li");
			tagp.appendChild(text);
			kq.appendChild(tagp);
	}
}