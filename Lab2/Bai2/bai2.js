var n = new Date();
var gio = n.getHours();
if (gio < 12 ) {
	document.getElementById('chao').innerHTML = "Chào buổi sáng";
} else {
	document.getElementById('chao').innerHTML = "Chào buổi chiều";
}