let avatarsother = ["/images/icons/january.ico", "/images/icons/february.ico", "/images/icons/march.ico", "/images/icons/april.ico", "/images/icons/may.ico", "/images/icons/june.ico", "/images/icons/july.ico", "/images/icons/august.ico", "/images/icons/september.ico", "/images/icons/october.ico", "/images/icons/november.ico", "/images/icons/december.ico"];


let d = new Date();
let n = d.getMonth();

let dateint = n;


let FavImg = document.getElementById("favimg");

FavImg.setAttribute("href", avatarsother[dateint]);
console.log(avatarsother + " : " + n);

let today = new Date();

let toDay = document.getElementById("date");


var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
toDay.innerHTML = "Accessed bryonpectol.dev on: " + today;