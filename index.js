const cells = document.querySelector('.cells');
const playCell = document.getElementsByClassName('cell');
const content = document.querySelector('.content');
const stepContent = document.querySelector('.step-content');
const playWindow = document.querySelector('.play-window');
const playButton = document.querySelector('.play-btn');
const reloadButton = document.querySelector('.reload-button');
const tableItem = document.querySelector('.table-item');
/*const resultButton = document.querySelector('.result-btn');*/
const resultTable = document.querySelector('.result-table');
const closeTableButton = document.querySelector('.close-table');
const recordButton = document.querySelector('.record');

let step = 0;
let stepCount = 0;
let result = '';
let newarr = [];


function playAudio() {
  const audio = new Audio();
  audio.src = "assets/audio/knopka.mp3";
  audio.currentTime = 0;
  audio.play();
}
  
cells.addEventListener('click', event => {
  if (event.target.className = 'cell') {
    step % 2 === 0 ? event.target.innerHTML = 'x' : event.target.innerHTML = 'o';
    step++;
    stepCount++; 
    gameCheck();
    playAudio();
    checkFlag();
  }
})
let isFlag = true;
function gameCheck () {
  const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
for (i = 0; i < arr.length; i++) {
  if (playCell[arr[i][0]].innerHTML == 'x' && playCell[arr[i][1]].innerHTML == 'x' && playCell[arr[i][2]].innerHTML == 'x') {
    result = 'Х';
    isFlag = false;
    showWinner (result);
    newarr.push(`winner is X -  ${stepCount} steps`);
   
  } else if (playCell[arr[i][0]].innerHTML == 'o' && playCell[arr[i][1]].innerHTML == 'o' && playCell[arr[i][2]].innerHTML == 'o') {
    result = 'O';
    isFlag = false;
    showWinner (result);
    newarr.push(`winner is O -  ${stepCount} steps`);
   
  } 
} 
};

function checkFlag () {
  if (step == 9 && isFlag == true) {
    noWinner();
    newarr.push('no winner - 9 steps');
}
};

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
const ul = document.querySelector('ul')

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
};

playButton.addEventListener('click', function() {
  itemsArray.push(newarr);
  if (itemsArray.length >= 11) {
    itemsArray.shift();
  }
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(newarr);
 
 }); 

data.forEach(item => {
  liMaker(item)
});

/*reloadButton.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
});*/

function playAudioWin() {
  const audio = new Audio();
  audio.src = "assets/audio/window.mp3";
  audio.currentTime = 0;
  audio.play();
}

function showWinner (winner) {
  content.innerHTML = `Winner is ${winner}!`;
  stepContent.innerHTML = `Number of steps = ${stepCount}`;
  playWindow.style.display = 'block';
  playAudioWin();
 };

function noWinner () {
  content.innerHTML = 'No winner!!!';
  stepContent.innerHTML = 'Try again, please.';
  playWindow.style.display = 'block';
  playAudioWin();
};


function showResults() {
  resultTable.style.display = 'block';
}

function closeWindow () {
  location.reload();
  playWindow.style.display = 'none';
};

playButton.addEventListener('click', closeWindow);
reloadButton.addEventListener('click', closeWindow);
/*resultButton.addEventListener('click', () => {
showResults();
playWindow.style.display = 'none';
});*/
closeTableButton.addEventListener('click', closeWindow);
recordButton.addEventListener('click', showResults);




 
