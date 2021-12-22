var nf = new Intl.NumberFormat();
function tinhtien(){
	var nl_arr = document.getElementsByClassName('nl');
	var te_arr = document.getElementsByClassName('te');
	var tien_arr = document.getElementsByClassName('tien');
	var tongnl = 0, tongte = 0, tongtien = 0;
	for (var i = 0; i < nl_arr.length; i++) {
		var anl = (nl_arr[i].innerText == '') ? 0 : nl_arr[i].innerText;
		var ate = (te_arr[i].innerText == '') ? 0 : te_arr[i].innerText;
		var sonl = parseInt(anl);
		var sote = parseInt(ate);

		tongnl    += sonl;
		tongte    += sote;
		var tienGd = sonl * 1000000 + sote * 600000;
		tongtien  += tienGd;
		
		tien_arr[i].innerText = nf.format(tienGd);
	}
	document.getElementById('tongnl').innerHTML   = tongnl;
	document.getElementById('tongte').innerHTML   = tongte;
	document.getElementById('tongtien').innerHTML = nf.format(tongtien);
}
function tien(object_row){
	var row = object_row.parentNode, flag = true, flag1 = true;
	sonl = row.children[1].innerText;
	sote = row.children[2].innerText;
	if (isNaN(sonl) || checkINT(sonl) || sonl < 0) {
	    row.children[1].innerText = '';
	    flag = false;
	}
	if (isNaN(sote) || checkINT(sote) || sote < 0) {
	    row.children[2].innerText = '';
	    flag1 = false;
	}
	if (!flag) {
		sonl = 0;
	}
	if (!flag1) {
		sote = 0;
	}

	sonl = (sonl == '') ? 0 : sonl;
	sote = (sote == '') ? 0 : sote;

	row.children[3].innerText = nf.format(sonl * 1000000 + sote * 600000);
	tinhtien();
}
function anhien(){
	var arr = document.getElementsByClassName('row');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].style.display == 'none') {
			document.getElementById('sh').innerHTML = 'Ẩn DS';
			arr[i].style.display = '';
		} else {
			document.getElementById('sh').innerHTML = 'Hiện DS';
			arr[i].style.display = 'none';
		}
	}
}
function tg() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	document.getElementById('dongho').innerHTML = h + ":" + m + ":" + s;
}

tg();
setInterval("tg()", 1000);

function checkINT(str) {
	str = String(str).replace(",", ".");
    if (Math.ceil(parseInt(str)) < Number(str)) {
    	return true;
    } else {
    	return false;
    }
    
}