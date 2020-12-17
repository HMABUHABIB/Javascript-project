const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
 // get random number between 0 - 3 
const randomNumber = 2;

document.body.style.background = colors[getRandomNumber()];
color.textContent = colors[getRandomNumber()];
//console.log(getRandomNumber());
})


function getRandomNumber(){

 return Math.floor(Math.random() * colors.length);
}