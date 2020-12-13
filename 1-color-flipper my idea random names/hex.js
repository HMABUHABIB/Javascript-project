const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const names = ['husam','ahmad','khaled','yosef','mohamad'];

const btn = document.getElementById("btn");
const colorClass = document.querySelector(".color");
const nameClass = document.querySelector(".name");
let colorCode='#';
let rank = 1;

btn.addEventListener('click',function(){

if(btn.textContent == 'Restart'){
 location.reload();
}

if(names.length > 0)
{
  printRandomName();
}
else
{
 nameClass.textContent = 'No names anymore';
 btn.textContent = 'Restart';

}

let colorCodeFinal = color();
colorClass.textContent = colorCodeFinal;
document.body.style.backgroundColor = colorCodeFinal;
colorCode='#';

})

function randNumber(length){
 return Math.floor(Math.random() * length);
}

function color(){
 
 for(i=0; i<6 ;i++)
 {
  colorCode =  colorCode.toString() + hex[randNumber(hex.length)];
 }
  return colorCode;
}

function printRandomName(){
 
 
   let random = randNumber(names.length);
   nameClass.textContent = rank+'. '+names[random];
   console.log(names);
   names.splice(random,1);
   console.log(names);
   rank ++;
 

 }
