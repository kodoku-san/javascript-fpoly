var dh = null;
function tg() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	document.getElementById('dongho').innerHTML = h + ":" + m + ":" + s;
}

tg();
dh = setInterval("tg()", 1000);

function StartStopDH() {
	if (dh == null) {
		dh = setInterval("tg()", 1000);
	} else {
		clearInterval(dh);
		dh = null;
	}
}

setInterval("document.getElementsByClassName('hello')[0].style = '';", 10000);