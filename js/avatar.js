const avatars = ["/images/icons/january.png", "/images/icons/february.png", "/images/icons/march.png", "/images/icons/april.png", "/images/icons/may.png", "/images/icons/june.png", "/images/icons/july.png", "/images/icons/august.png", "/images/icons/september.png", "/images/icons/october.png", "/images/icons/november.png", "/images/icons/december.png"];


var d = new Date();
var n = d.getMonth();

let dateint = n;

let AvatarImg = document.getElementById("imgmeid");

let FavImg = document.getElementById("favimg");

AvatarImg.setAttribute("src", avatars[dateint]);
FavImg.setAttribute("href", avatars[dateint]);
console.log(avatars + " : " + n);