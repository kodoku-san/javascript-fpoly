var listImg = [], totalImg = 8, index = 1;
function load(){
	for (var i = 1; i <= totalImg; i++) {
		listImg[i]     = new Image();
		listImg[i].src = "img/" + i + ".jpg";
	}
}

function First(){
	index = 1;
	document.getElementById('image').src = listImg[index].src;
	loadTotalText();
}

function Final(){
	index = totalImg;
	document.getElementById('image').src = listImg[index].src;
	loadTotalText();
}

function Next(){
	index++;
	if (index > totalImg) {
		index = 1;
	}
	document.getElementById('image').src = listImg[index].src;
	loadTotalText();
}

function Previous(){
	index--;
	if (index < 1) {
		index = totalImg;
	}
	document.getElementById('image').src = listImg[index].src;
	loadTotalText();
}

function loadTotalText(){
	document.getElementById('totalText').innerHTML = "Ảnh " + index;
}