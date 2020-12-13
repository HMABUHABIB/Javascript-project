// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

/*
btn.addEventListener('click',function(e){
if(links.classList.contains('show-links')){
 links.classList.remove('show-links');
 console.log(links.classList);
 console.log(e.target);

}else
{
 links.classList.add('show-links');
 console.log(links.classList);
 console.log(e.target);

}


})
*/


btn.addEventListener('click',function(e){
 links.classList.toggle('show-links')
})

