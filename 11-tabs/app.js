const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
 const idTarget = e.target.dataset.id;
 if (idTarget != undefined) {
  btns.forEach(function (btn) {
   btn.classList.remove('active');
   e.target.classList.add('active');

  });

  articles.forEach(function (article) {
   if (article.id == idTarget) {
    article.classList.add('active');
   } else {
    article.classList.remove('active');
   }
  });
 }
});

