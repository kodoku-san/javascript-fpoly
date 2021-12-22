function check(){
	var hotenlot = document.getElementsByName('firstname')[0].value;
	var ten = document.getElementsByName('lastname')[0].value;
	var nam = document.getElementsByName('webyear')[0].value;
	var comment = document.getElementById('comment').value;
	var check = document.getElementsByName('rules')[0].checked;
	if (hotenlot == "" || hotenlot.length < 2) {
		document.getElementById('er1').style = "color: red";
	} else document.getElementById('er1').style = "display: none";
	if (ten == "" || ten.length < 2) {
		document.getElementById('er2').style = "color: red";
	} else document.getElementById('er2').style = "display: none";
	if (isNaN(nam) || nam < 0 || nam == "") {
		document.getElementById('er3').style = "color: red";
	} else document.getElementById('er3').style = "display: none";
	if (comment == "") {
		document.getElementById('er4').style = "color: red";
	} else document.getElementById('er4').style = "display: none";
	if (!check) {
		document.getElementById('er5').style = "color: red";
	} else document.getElementById('er5').style = "display: none";
}