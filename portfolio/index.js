const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


  document.querySelector('.hamburger').addEventListener('click', function() {
    document.getElementById('tablet').classList.toggle('open'); 
  });


  const navLinks = document.querySelectorAll('.nav-link');
  function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
      document.getElementById('tablet').classList.remove('open');
      hamburger.classList.remove('open');
    }
  };
  
  navLinks.forEach((el) => el.addEventListener('click', closeMenu));


  console.log("Самооценка проекта: 85 баллов. Вёрстка соответствует макету. Ширина экрана 768px +48 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n На ширине экрана 768рх и меньше реализовано адаптивное меню +22);

