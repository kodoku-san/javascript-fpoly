var slx = localStorage.getItem('solanxem');
if (slx == null) {
	slx = 0;
}
slx++;
localStorage.setItem('solanxem', slx);
document.getElementById('slx').innerHTML = slx;