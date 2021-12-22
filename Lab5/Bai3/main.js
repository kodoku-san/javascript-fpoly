var flag = true; 
var count = 0; 
function mark(index){ 
    var button = document.getElementsByTagName("button")[index];
    button.innerText = flag ? "X" : "O";
    button.style.backgroundColor = flag ? "#d1c6ff" : "#ffef9b";
    button.setAttribute("disabled", "true");
    flag = !flag;
    count++; 
    if(count == 8){
        alert("Game over!");
        location.reload();
    }
}