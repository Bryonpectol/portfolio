let avatarsother = ["/images/icons/january.png", "/images/icons/february.png", "/images/icons/march.png", "/images/icons/april.png", "/images/icons/may.png", "/images/icons/june.png", "/images/icons/july.png", "/images/icons/august.png", "/images/icons/september.png", "/images/icons/october.png", "/images/icons/november.png", "/images/icons/december.png"];


let d = new Date();
let n = d.getMonth();

let dateint = n;


let FavImg = document.getElementById("favimg");

FavImg.setAttribute("href", avatarsother[dateint]);
console.log(avatarsother + " : " + n);