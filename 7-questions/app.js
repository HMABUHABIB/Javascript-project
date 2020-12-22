//using selectors inside the element
//traversing the dom



const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');
//console.log(questions[0].classList.add('show-text'));

btns.forEach(function(btn){

btn.addEventListener('click',function(e){
 if(e.currentTarget.parentElement.parentElement.classList.contains('show-text'))
 {
  
  e.currentTarget.parentElement.parentElement.classList.remove('show-text');
  console.log(e.currentTarget.parentElement.parentElement.classList);
 }else
 {
  questions.forEach(function(item){
   item.classList.remove('show-text');

  })
  
  console.log(e.currentTarget.parentElement.parentElement.parentElement.classList);
  e.currentTarget.parentElement.parentElement.classList.add('show-text');
  
 }
 
})

});
