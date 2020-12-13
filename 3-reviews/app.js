// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const btns = document.querySelectorAll('.fas');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const img = document.getElementById('person-img');
const random = document.querySelector('.random-btn');

let postion = 0;
update(postion);
btns.forEach(function(btn){
btn.addEventListener('click',function(e){
const style = e.target.classList;
if(style.contains('fa-chevron-left'))
  {
  
    if(postion > 0)
    {
      postion --;
      console.log('left');
      console.log(postion);
    }else{
      postion = reviews.length-1;
    }
  }

else
  {
  
    
    if(postion < reviews.length-1)
    {
      postion ++;
      console.log('right');
      console.log(postion);
    }else{
      postion = 0;
    }
  }
  
  update(postion);
})

})


random.addEventListener('click',function(){
  
  update(Math.floor(Math.random() * reviews.length));
  

})

// show person based on postion
function update(postion){
  console.log(postion);
  author.textContent = reviews[postion].name;
  job.textContent = reviews[postion].job;
  info.textContent = reviews[postion].text;
  img.src=reviews[postion].img;

}
