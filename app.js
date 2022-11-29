var display=document.getElementById("display");
function SetDataToScreen(a) {

    document.getElementById("display").innerHTML += a; // es se agy value rkhta rahy ga 
}
function calculateval() {
    var a = eval(display.innerHTML); // evaluate calculation krdeta hai 
   
    document.getElementById("display").innerHTML= a;
}
function clearAll() {
    document.getElementById("display").innerHTML = "";
}

