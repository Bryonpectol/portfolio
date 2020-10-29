let Img1 = document.getElementById("firstimg");
let overLay1 = document.getElementById("overlay1");

function bigImg() {
    Img1.style.display = "none";
    overLay1.style.display = "inline";
  }
  
  function normalImg() {
    Img1.style.display = "inline";
    overLay1.style.display = "none";
  }