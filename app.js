let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");
let side3 = document.getElementById("side3");
console.log(side1);

let check = document.querySelector("button");
console.log(check);
let type = document.querySelector("#scr");
console.log(scr.innerText);


check.addEventListener("click", () => {

    let a = parseInt(side1.value);
    let b = parseInt(side1.value);
    let c = parseInt(side3.value);

    if (a <= 0 || b <= 0 || c <= 0) {
        alert("Every Sides have to be a positive Number");
    }
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            type.innerText = "The Triangle is equilateral";
        } 
        if (a === b || a === c || b === c) {
            type.innerText = "The Triangle is isosceles";
        } 
        if(a != b || a != c || b!= c){
            type.innerText = "The Triangle is sceles";
        }
    }else{

        type.innerText = "Invalid Values";
 }
side1.display ="none";
side2.display="none";
side3.display ="none";
});

