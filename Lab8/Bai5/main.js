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
        document.getElementById('button').innerHTML = 'Dừng';
    } else {
        clearInterval(dh);
        dh = null;
        document.getElementById('button').innerHTML = 'Chạy';
    }
}

function xembaihoc(){
    var url =  document.getElementById("baihoc").value;
    if (url=="") alert("Chưa chọn bài học mà");
    else document.location=url;
}



