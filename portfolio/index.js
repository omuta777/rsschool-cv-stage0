const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-title-1': 'Standard',
    'price-title-2': 'Premium',
    'price-title-3': 'Gold',
    'price-description-1-div-1': 'One location',
    'price-description-1-div-2': '120 photos in color',
    'price-description-1-div-3': '12 photos in retouch',
    'price-description-1-div-4': 'Readiness 2-3 weeks',
    'price-description-1-div-5': 'Make up, visage',
    'price-description-2-div-1': 'One or two locations',
    'price-description-2-div-2': '200 photos in color',
    'price-description-2-div-3': '20 photos in retouch',
    'price-description-2-div-4': 'Readiness 1-2 weeks',
    'price-description-2-div-5': 'Make up, visage',
    'price-description-3-div-1': 'Three locations or more',
    'price-description-3-div-2': '300 photos in color',
    'price-description-3-div-3': '50 photos in retouch',
    'price-description-3-div-4': 'Readiness 1 week',
    'price-description-3-div-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Опыт',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Нанять',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-title-1': 'Стандарт',
    'price-title-2': 'Премиум',
    'price-title-3': 'Золотой',
    'price-description-1-div-1': 'Одна локация',
    'price-description-1-div-2': '120 цветных фото',
    'price-description-1-div-3': '12 отретушированных фото',
    'price-description-1-div-4': 'Готовность через 2-3 недели',
    'price-description-1-div-5': 'Макияж, визаж',
    'price-description-2-div-1': 'Одна-две локации',
    'price-description-2-div-2': '200 цветных фото',
    'price-description-2-div-3': '20 отретушированных фото',
    'price-description-2-div-4': 'Готовность через 1-2 недели',
    'price-description-2-div-5': 'Макияж, визаж',
    'price-description-3-div-1': 'Три локации и больше',
    'price-description-3-div-2': '300 цветных фото',
    'price-description-3-div-3': '50 отретушированных фото',
    'price-description-3-div-4': 'Готовность через 1 неделю',
    'price-description-3-div-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
};

const text = document.querySelectorAll('[data-i18]');
const langSwitcherRu = document.querySelector('.ru');
const langSwitcherEn = document.querySelector('.en');
const langSwitcher = document.querySelectorAll('.switch_lng');

langSwitcherEn.classList.add('active');

function getTranslate(lang) {
    text.forEach((element) => {
      element.textContent = i18Obj[lang][element.dataset.i18]});
};

langSwitcherRu.addEventListener('click', () => {
  getTranslate('ru');
  langSwitcherRu.classList.add('active');
  langSwitcherEn.classList.remove('active');
});

langSwitcherEn.addEventListener('click', () => {
  getTranslate('en');
  langSwitcherEn.classList.add('active');
  langSwitcherRu.classList.remove('active');
});


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

    
  const portfolioBtn = document.querySelector('.portfolio-btn');
  const portfolioBtnAll = document.querySelectorAll('.portfolio-btn');
  const portfolioImages = document.querySelectorAll('.portfolio-image');
  const portfolioBtns = document.querySelector('.portfolio-buttons');
  const autumnBut = document.querySelector('.btn_port1');

 autumnBut.classList.add('active');

 function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    portfolioBtnAll.forEach((element) => {
      element.classList.remove('active');
      })
      portfolioBtns.addEventListener('click', (event) => {
      event.target.classList.add('active');
      })
  }
};
portfolioBtns.addEventListener('click', changeImage);


const themeSwitcher = document.querySelector('.theme_switcher'); 
 
const changeElements = ['#skills', '#portfolio', '#video', '#price', '.skills-container', '.title', '.title1', '.section-title', '.item', '.about_item', '.portfolio-buttons', '.portfolio-items', '.btn_port', '.video-player', '.price-items', '.price_title', '.price_include', '#tablet', '.nav-link', '.line1', '.line3'];

function changeTheme() {

  changeElements.forEach((item) => { 
    const changeItems = document.querySelectorAll(item);
    changeItems.forEach((elements) => {
      elements.classList.toggle('light-theme');
    });
  });  
};

themeSwitcher.addEventListener('click', () => {
themeSwitcher.classList.toggle('open');
changeTheme();
});


 

