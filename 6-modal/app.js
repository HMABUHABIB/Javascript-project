// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modal_Btn = document.querySelector('.modal-btn');
const modal_overlay = document.querySelector('.modal-overlay');
const close_Btn = document.querySelector('.close-btn');

modal_Btn.addEventListener('click',function(){
 modal_overlay.classList.add('open-modal');

})


close_Btn.addEventListener('click',function(){
 modal_overlay.classList.remove('open-modal');

})

document.body.addEventListener('click',function(e){
console.log(e.target);
if(e.target.classList.contains('modal-overlay')&&e.target.classList.contains('open-modal'))
{
 modal_overlay.classList.remove('open-modal');
}

})