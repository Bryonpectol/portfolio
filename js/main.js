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




// function getAge(DOB) {
//     var today = new Date();
//     var birthDate = new Date(DOB);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();

//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age = age - 1;
//         let Age = getAge("5/8/1999");
//     }

//     return age;
// }


// let AGE = document.write(getAge("5/8/1999"));
// let myAge = document.getElementById("age").innerHTML = Date();


// myAge = AGE;
// console.log(getAge("5/8/1999") + " : " + AGE);
