let Arrowup = document.getElementById("arrowup");
let Arrowdown = document.getElementById("arrowdown");
let Navul = document.getElementById("navul");

function clickDown() {
    Arrowdown.className = "arrownone";
    Navul.className = "navul";
    Arrowup.className = "arrowup";
}

function clickUp() {
    Arrowdown.className = "arrowdown";
    Navul.className = "arrownone";
    Arrowup.className = "arrownone";
}