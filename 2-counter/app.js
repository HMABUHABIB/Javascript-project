let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
const style = e.currentTarget.classList;
style.contains('decrease')? count++:
style.contains('reset')? count=0:count--;
value.textContent = count;
count > 0 ? value.style.color = 'green':
count < 0 ? value.style.color = 'red':value.style.color = '#222';

})


});


//
