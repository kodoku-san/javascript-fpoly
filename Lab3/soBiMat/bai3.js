so_bi_mat=Math.round(Math.random()*100);
while(true){
    var so=prompt("nhập vô số đoán");
    if(so==so_bi_mat){
        alert("Chức mừng");
    }else if(so<so_bi_mat){
        alert("Số  bí mật lớn hơn")
    }else if(so>so_bi_mat){
        alert("Số  bí mật nhỏ hơn")
    }
}