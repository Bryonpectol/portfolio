// Alert

// alert("This Page is still being worked on.");

// Main

let PArea = document.getElementById("parea");

let One = document.getElementById("one").value;
let Two = document.getElementById("two").value;
let Three = document.getElementById("three").value;
let Four = document.getElementById("four").value;
let Five = document.getElementById("five").value;
let Six = document.getElementById("six").value;
let Seven = document.getElementById("seven").value;
let Eight = document.getElementById("eight").value;
let Nine = document.getElementById("nine").value;
let Zero = document.getElementById("zero").value;

let Plus = document.getElementById("plus").value;
let Equals = document.getElementById("equals").value;
let Minus = document.getElementById("minus").value;
let Times = document.getElementById("times").value;
let Divide = document.getElementById("divide").value;
let Clear = document.getElementById("clear").value;
let Point = document.getElementById("decimal").value;


let OutputArea = document.getElementById("output");




function onE() {
  PArea.value += One;
}


function twO() {
  PArea.value += Two;
}

function threE() {
  PArea.value += Three;
}

function fouR() {
  PArea.value += Four;
}

function fivE() {
  PArea.value += Five;
}

function siX() {
  PArea.value += Six;
}

function seveN() {
  PArea.value += Seven;
}

function eighT() {
  PArea.value += Eight;
}

function ninE() {
  PArea.value += Nine;
}

function zerO() {
  PArea.value += Zero;
}

function pluS() {
  PArea.value += Plus;
}

function minuS() {
  PArea.value += Minus;
}

function timeS() {
  PArea.value += Times;
}

function dividE() {
  PArea.value += Divide;
}

function poinT() {
  PArea.value += Point;
}

function equalS() {
 
  let inputVal = PArea.value;
  let res = eval(inputVal);
  PArea.value = res;
}

function cleaR() {
  PArea.value = "";
}