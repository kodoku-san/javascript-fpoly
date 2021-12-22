function hienthi(){
    var tensp = document.getElementById("ten").innerText;
    var soluongsp = document.getElementById("qty");
    if (isNaN(soluongsp.value) || checkINT(soluongsp.value) || soluongsp.value <= 0) {
	    alert("Nhập sai rùi nha");
	    soluongsp.value = "1";
	} else {
		var giasp= document.getElementById("pro").getAttribute("data-price");
	    var tinhtien= giasp*soluongsp.value;
	    document.getElementById("name").innerText=tensp;
	    document.getElementById("amount").innerText="$"+tinhtien;
    }
}

function checkINT(str) {
	str = String(str).replace(",", ".");
    if (Math.ceil(parseInt(str)) < Number(str)) {
    	return true;
    } else {
    	return false;
    }
    
}