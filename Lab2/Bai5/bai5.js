const PI = 3.14;
var bankinh = prompt("Nhập bán kinh");

var chuvi = 2*PI*bankinh;
var dientich = PI*bankinh*bankinh;
document.getElementById('bk').innerHTML = bankinh;
document.getElementById('cv').innerHTML = Math.round(chuvi * 100) / 100;
document.getElementById('dt').innerHTML = Math.round(dientich * 100) / 100;