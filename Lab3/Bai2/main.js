for (var i = 0; i < 10; i++) {
	var f = f0 + f1;
	f0 = f1;
	f1 = f;
	document.write("<span>" + f + "</span>");
}