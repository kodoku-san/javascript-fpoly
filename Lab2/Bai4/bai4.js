var slx = sessionStorage.getItem('solanxem');
if (slx == null) {
	slx = 0;
}
slx++;
sessionStorage.setItem('solanxem', slx);
document.getElementById('slx').innerHTML = slx;