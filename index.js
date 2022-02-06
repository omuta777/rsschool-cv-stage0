
const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('audio');
const navLinks = document.querySelectorAll('.nav-link');
const mainImage = document.querySelector('.main');
const navLink = document.querySelector('.nav-link');
const navList = document.querySelector('.nav-list');



playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('pause');
  playAudio();
});

let isPlay = false; 

function playAudio() {
  if(isPlay === false) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true; 
  } else if (isPlay === true) {
    audio.pause();
    isPlay = false; 
  }
};

function changeImage(event) {
  if((event.target.classList.contains('nav-link'))) {
    mainImage.style.backgroundImage = `url('./assets/img/${event.target.dataset.item}.jpg')`;
    audio.src = `./assets/audio/${event.target.dataset.item}.mp3`;
    isPlay = false; 
    playAudio(); 

    navLinks.forEach((element) => {
      element.classList.remove('active');
      })
      navList.addEventListener('click', (event) => {
      event.target.classList.add('active');
      })

    }       
};

navLinks.forEach((el) => el.addEventListener('click', changeImage));
navLinks.forEach((el) => el.addEventListener('click', () => {
  playBtn.classList.add('pause');
}));

