
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}


let AGE = document.write(getAge("5/8/1999"));


myAge = AGE;
console.log(getAge("5/8/1999"));


let First = document.getElementById("intro");
let Second = document.getElementById("second");
let Third = document.getElementById("third");

First.innerHTML = "Hello, my name is Bryon Pectol. I am a student, studying at Utah Valley University. My major is Web and App Development.";
Second.innerHTML = "I plan to get my Bachelor's degree from UVU and hopefully nail my first job in the development industry. I will then work on getting my graduate degree as I am working as an entry level Front End Developer. I hope that with my graduate degree I can become a DevOps and work within the government for web safety and security.";
Third.innerHTML = "I am " + getAge("5/8/1999") + " years old. I currently live in Orem, Utah, USA. I come from a big family of 8 including me. I have quite a few interests and hobbies. My favorite hobby to pass the time is developing websites or building video games. I also really like 3D design. Some outdoor activities I like are mountain biking, snowboarding, and I like to play basketball or soccer. I also served a mission for the Church of Jesus Christ of Latter Day Saints in 2018. I served in Guayaquil, Ecuador, and it was there that I learned to speak Spanish. I am currently employed at RC Willey as a technology salesperson. I got married to my wife, Makenna, in January 2020.";