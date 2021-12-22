var daysT = '';
for (var i = 1; i < 32; i++) {
	if (i == 16) {
		daysT = daysT +
		'<option selected="selected" value="' + i + '">' + i + '</option>';
	} else {
		daysT = daysT +
		'<option value="' + i + '">' + i + '</option>';
	}
}
document.getElementById('days').innerHTML = daysT;

var mothsT = '', i = 1;

while(i != 12) {
	if (i == 9) {
		mothsT = mothsT +
		'<option selected="selected" value="' + i + '">' + i + '</option>';
	} else {
		mothsT = mothsT +
		'<option value="' + i + '">' + i + '</option>';
	}
	i++;
}
document.getElementById('months').innerHTML = mothsT;

var yearsT = '', i = 1970;

do {
	if (i == 2002) {
		yearsT = yearsT +
		'<option selected="selected" value="' + i + '">' + i + '</option>';
	} else {
		yearsT = yearsT +
		'<option value="' + i + '">' + i + '</option>';
	}
	i++;
} while(i != 2022)
document.getElementById('years').innerHTML = yearsT;