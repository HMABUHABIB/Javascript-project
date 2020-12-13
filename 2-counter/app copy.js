const value = document.getElementById('value');
const decrease = document.getElementsByClassName('btn decrease');
const reset = document.getElementsByClassName('btn reset');
const increase = document.getElementsByClassName('btn increase');

const btns = document.querySelectorAll('.btn');

let count = 0;
value.textContent = count;

//decrease.

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
 const styles = e.currentTarget.classList;
 if(styles.contains('decrease')){
  console.log('decrease');
  count++;
 }
 else if(styles.contains('reset')){
  console.log('reset');
  count = 0;
 }
 else if(styles.contains('increase')){
  console.log('increase');
  count--;
 }



value.textContent = count;
})

 

})