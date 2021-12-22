var a = prompt("Nhập số a:");
var b = prompt("Nhập số b:");
var c = prompt("Nhập số c:");
var patt = /[a-z]/;
if (patt.test(a)) {
    a = 0;
}
if (patt.test(b)) {
    b = 0;
}
if (patt.test(c)) {
    c = 0;
}
var delta = Math.pow(b, 2) - 4*a*c;