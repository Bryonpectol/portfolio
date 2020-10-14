import { projects } from "../js/projectsdata.js";

const mainContainer = document.getElementById("container");

const allCars = projects.map(myCar => {
  let carsYeah = projects.find(CAR => {
    return CAR.name === myCar.name;
  });

  return {
    // this is how the script finds the item in the array.
    //   nAME: myCar.name,
    mAKE: carsYeah.name,
    Id: carsYeah.id,
    Tier: carsYeah.tier,
    image: carsYeah.image,
    weight: carsYeah.weight,
    runSpeed: carsYeah.runspeed,
    dashSpeed: carsYeah.dash,
    fallSpeed: carsYeah.fallingspeed,
    Link: carsYeah.link,
  };
});

allCars.forEach(myCar => {
    //br's
    let br3 = document.createElement("br");
    let br1 = document.createElement("br");
    let abilBr1 = document.createElement('br');
    let abilBr2 = document.createElement('br');
    let abilBr3 = document.createElement('br');
    let abilBr4 = document.createElement('br');
    let abilBr5 = document.createElement('br');
    let abilBr6 = document.createElement('br');
    let abilBr7 = document.createElement('br');
    let abilBr8 = document.createElement('br');
    let abilBr9 = document.createElement('br');
    let abilBr10 = document.createElement('br');
    let abilBr11 = document.createElement('br');
    let abilBr12 = document.createElement('br');
    let abilBr13 = document.createElement('br');
    let br2 = document.createElement("hr");
  
    // this section is to create the html elements.
    let makeElement = document.createElement("div");
    let roleElement = document.createElement("p");
    let imageElement = document.createElement("img");
    let typeElement = document.createElement("p");
    let tierElement = document.createElement("p");
    let weightElement = document.createElement("p");
    let runElement = document.createElement("p");
    let dashElement = document.createElement("p");
    let linkElement = document.createElement("a");
    let fallspeedElement = document.createElement("p");
    let ability1Element = document.createElement("p");
    let ability2Element = document.createElement("p");
    let ability3Element = document.createElement("p");
    let ability4Element = document.createElement("p");
    let ability5Element = document.createElement("p");
    let ability6Element = document.createElement("p");
    let ability7Element = document.createElement("p");
    let ability8Element = document.createElement("p");
    let ability9Element = document.createElement("p");
    let ability10Element = document.createElement("p");
    let ability11Element = document.createElement("p");
    let ability12Element = document.createElement("p");
    let ability13Element = document.createElement("p");
    let abilDiv = document.createElement("p");
    let nameElement = document.createElement("div");
  
  
    //buttons
    let ability1button = document.createElement("button");
    // let ability2button = document.createElement("button");
    let x = document.createElement('button');
    let otherAbil = document.createElement('button');
    let weighthtml = document.createElement("p");
    let runhtml = document.createElement("p");
    let dashhtml = document.createElement("p");
    let fallspeedhtml = document.createElement("p");
    let anotherimg = document.createElement("img");
  
    ability1button.innerHTML = "View";
    // ability2button.innerHTML = "Ability 2";
    x.innerHTML = "X";
    otherAbil.innerHTML = "Other Abilities";
    weighthtml.innerHTML = "Weight:"
    runhtml.innerHTML = "Run Speed:"
    dashhtml.innerHTML = "Dash Speed:"
    fallspeedhtml.innerHTML = "Fall Speed:"
  
  
    // assigning classes.
    makeElement.className = "box";
    abilDiv.className = "bolso";
    imageElement.className = "imagecard";
    roleElement.className = "role";
    typeElement.className = "role";
    ability1Element.className = "roles";
    ability1button.className = "ability1button";
    otherAbil.className = "ability1button";
    ability2Element.className = "roles";
    ability3Element.className = "roles";
    ability4Element.className = "roles";
    ability5Element.className = "roles";
    ability6Element.className = "roles";
    weightElement.className = "roles";
    ability7Element.className = "roles";
    ability8Element.className = "roles";
    ability9Element.className = "roles";
    ability10Element.className = "roles";
    ability11Element.className = "roles";
    ability12Element.className = "roles";
    ability13Element.className = "roles";
    anotherimg.className = "imagecardyes";
    // ability2button.className = "ability2button";
    x.className = "exit";
    // abilDiv.className = "roles";
    nameElement.className = "roles";
  
  
    makeElement.textContent = myCar.mAKE;
    tierElement.textContent = myCar.Tier;
    roleElement.textContent = myCar.role;
    imageElement.src = myCar.image;
    // ability1button.href = myCar.Link;
    linkElement.href = myCar.Link;
    anotherimg.src = myCar.image;
    typeElement.textContent = myCar.type;
    weightElement.textContent = myCar.weight;
    runElement.textContent = myCar.runSpeed;
    dashElement.textContent = myCar.dashSpeed;
    fallspeedElement.textContent = myCar.fallSpeed;
    ability1Element.textContent = myCar.ability1Element;
    ability2Element.textContent = myCar.ability2;
    ability3Element.textContent = myCar.ability3;
    ability4Element.textContent = myCar.ability4;
    ability5Element.textContent = myCar.ability5;
    ability6Element.textContent = myCar.ability6;
    ability7Element.textContent = myCar.ability7;
    ability8Element.textContent = myCar.ability8;
    ability9Element.textContent = myCar.ability9;
    ability10Element.textContent = myCar.ability10;
    ability11Element.textContent = myCar.ability11;
    ability12Element.textContent = myCar.ability12;
    ability13Element.textContent = myCar.ability13;
    abilDiv.textContent = myCar.mAKE;
    nameElement.textContent = myCar.ability1;
  
    mainContainer.appendChild(makeElement);
    makeElement.appendChild(br2);
    // makeElement.appendChild(tierElement);
    makeElement.appendChild(typeElement);
    makeElement.appendChild(roleElement);
    makeElement.appendChild(br1);
    makeElement.appendChild(imageElement);
    makeElement.appendChild(br3);
    makeElement.appendChild(ability1button);
    // linkElement.setAttribute('href', linkElement);  

    // makeElement.appendChild(otherAbil);
    // makeElement.appendChild(ability2button);
  
  
    ability1button.onclick = function() {
      Ability1();
    };
  
    function Ability1() {
      // makeElement.appendChild(ability1Element);
      window.location.href = linkElement; 
      
      
    }
  
    x.onclick = function() {
      exit();
    };
  
    function exit () {
      mainContainer.removeChild(abilDiv);
    }
  
    
    
  });
  
  document.body.appendChild(mainContainer);
  
  console.log(projects);