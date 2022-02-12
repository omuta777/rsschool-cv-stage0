const jokesImage = document.querySelector('.jokes-image');
const jokesBtn = document.querySelector('.jokes-btn');
const jokesColor = document.querySelector('body');


const url = 'https://api.icndb.com/jokes/random';
const textJoke = document.querySelector('.text-content');

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}

function showData(data) {
  textJoke.textContent = data.value.joke;
}

jokesBtn.addEventListener('click', () => {
  jokesImage.classList.toggle('grow');
  jokesColor.classList.toggle('change');
    if (langSwitcherRu.classList.contains('active')) {
    showQuotes();
  } else {
    getData();
  }
});

/*async function getQuotes() {  
 
  const quotes = 'quote.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data);
  showQuotes(data);
}*/


function showQuotes() {
  let randomNum = Math.floor(Math.random() * arrQuotes.length);
  textJoke.textContent = arrQuotes[randomNum].text;
}

const i18Obj = {
  'en': {
    'jokes-button': 'Make me laugh, Chuck!',
  },
  'ru': {
    'jokes-button': 'Заставь меня улыбнуться, Чак!',
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
  jokesImage.classList.toggle('grow');
  jokesColor.classList.toggle('change');
  showQuotes();
  langSwitcherRu.classList.add('active');
  langSwitcherEn.classList.remove('active');
 });

langSwitcherEn.addEventListener('click', () => {
  getTranslate('en');
  jokesImage.classList.toggle('grow');
  jokesColor.classList.toggle('change');
  getData();
  langSwitcherEn.classList.add('active');
  langSwitcherRu.classList.remove('active');
 });

window.addEventListener('load', getData);
 
const arrQuotes = [
  {
    "text": "Чак Норрис может сжать пальцы в кулак даже на ноге",
    "author": "Неизвестен"
  },
  {
    "text": "Однажды Чак Норрис съел именинный торт, прежде чем друзья успели сказать, что внутри сидит стриптизерша​",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис засунул пальцы в разетку и убил ток",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис перемалывает кофейные зерна зубами и кипятит воду на внутренней ярости",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис любую посуду делает одноразовой",
    "author": "Неизвестен"
  },
  {
    "text": "Клонирование запретили, поскольку если клонировать Чака Норриса, то появится вероятность, что удар ногой с разворота одного Чака столкнется с ударом ногой с разворота другого. Физики утверждают, что это станет концом Вселенной",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис зарегистрировался ВКонтакте и удалил страницу Павла Дурова",
    "author": "Неизвестен"
  },
  {
    "text": "При прохождении IQ теста отвечайте на все вопросы «Чак Норрис» – и вы заработаете максимальное количество баллов",
    "author": "Неизвестен"
  },
  {
    "text": "Таксист подвозивший Чака Норриса намазал спасибо на хлеб!",
    "author": "Неизвестен"
  },
  {
    "text": "Основной экспортируемый продукт Чака Норриса — страдания",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис — единственный человек, который обыграл стену в теннис",
    "author": "Неизвестен"
  },
  {
    "text": "Нет никакой теории эволюции Дарвина. Есть список существ, которых Чак Норрис пощадил",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис досчитал до бесконечности. Дважды",
    "author": "Неизвестен"
  },
  {
    "text": "Пульс Чака Норриса измеряется по шкале Рихтера",
    "author": "Неизвестен"
  },
  {
    "text": "Плутон — это на самом деле вращающийся вокруг Солнца отряд британских солдат времён Войны за независимость США, которых Чак отправил в космос ударом в морду ногой с разворота",
    "author": "Неизвестен"
  },
  {
    "text": "У дома Чака Норриса нет дверей. Он проходит сквозь стены",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис построил Эверест при помощи ведерка и лопатки",
    "author": "Неизвестен"
  },
  {
    "text": "Последняя цифра числа пи — Чак Норрис",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может заставить воду течь под лежачий камень",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может захлопнуть вращающуюся дверь",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может выжать апельсиновый сок из лимона",
    "author": "Неизвестен"
  },
  {
    "text": "Чака Норриса исключили из соревнований по родео после того, как он проехал на быке 1346 км, чтобы забрать вещи из химчистки",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис не играет в карманный бильярд, он играет в карманный боулинг",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может убить два камня одной птицей",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может слепить снеговика из дождя",
    "author": "Неизвестен"
  },
  {
    "text": "У Чака Норриса нет часов, он сам решает, сколько сейчас времени",
    "author": "Неизвестен"
  },
  {
    "text": "Если вы спросите у Чака Норриса: «Который час?», он всегда отвечает: «Две секунды до». После того как вы спросите: «Две секунды до чего?», вы получите по лицу знаменитый удар ногой с разворота",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может ударить циклопа между глаз",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может удалить корзину",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис не пользуется полотенцем, вода сама убегает с его тела",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис принимает снотворное, чтобы моргать”",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может довести до оргазма резиновую женщину",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может разлочить iPhone, не вынимая его из коробки",
    "author": "Неизвестен"
  },
  {
    "text": "У Чака Норриса две скорости: «Идти» и «Убивать»",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис может заставить плакать лук",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис бросил гранату и убил 50 человек. А потом она взорвалась",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис никогда не спит. Он выжидает",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис разговаривает исключительно матом. Потому что любое слово, произнесенное Чаком, автоматически переходит в разряд матерных",
    "author": "Неизвестен"
  },
  {
    "text": "Чак Норрис взламывает любой шифр с первой попытки, потому что даже шифр не смеет возразить Чаку",
    "author": "Неизвестен"
  }
];