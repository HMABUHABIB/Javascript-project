const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorClass = document.querySelector(".color");

let colorCode='#';


btn.addEventListener('click',function(){
let colorCodeFinal = color();
console.log(colorCodeFinal);
colorClass.textContent = colorCodeFinal;
document.body.style.backgroundColor = colorCodeFinal;
colorCode='#';
})

function randNumber(){
 return Math.floor(Math.random() * hex.length);
}

function color(){
 
 for(i=0; i<6 ;i++){
  colorCode =  colorCode.toString() + hex[randNumber()];
  
 }
 return colorCode;
}