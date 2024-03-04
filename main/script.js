//Сообщение
const topRightMessage = document.querySelector('.top-right-message');


setTimeout(() => {

    topRightMessage.style.display = 'block';
}, 5000); 

setTimeout(() => {
    topRightMessage.style.animation = 'hideMessage 3s forwards';
    setTimeout(() => {
        topRightMessage.remove();
    }, 3000);
}, 15000);

const closeButton = document.createElement('span');

closeButton.innerHTML = '&times;';

closeButton.classList.add('close-button');

topRightMessage.appendChild(closeButton);

closeButton.addEventListener('click', () => {
    topRightMessage.style.animation = 'hideMessage 3s forwards';
    setTimeout(() => {
        topRightMessage.remove();
    }, 3000);
});
//Сообщение








//Встроенный перевод текста
const wordsTranslations = {
    'Login': 'Регистрация',
    'English': 'Английский',
    'Russian': 'Русский',
    'Welcome': 'Добро пожаловать',
    'WelcomeText': 'Вы находитесь на официальном сайте Mercedes-Benz, чтобы ознакомиться со всем, перейдите по этой ',
    'WordNawOne': 'Искусство и культура',
    'WordNawTwo':'Устойчивость',
    'WordNawThree': 'Дизайн',
    'WordNawFour':'Инновация',
    'WordNawFive':'Эксклюзивный',
    'WordNawSix':'Транспортные средства'
    
};

function TranslateWords() {
    for (const word in wordsTranslations) {
        const elements = document.querySelectorAll(`*[data-i18n="${word}"]`);
        const ColorText = document.getElementById('Russian')
        for (const element of elements) {
            element.innerText = wordsTranslations[word];
            ColorText.style.color = "white"; 
        }
    }

}

const translateButton = document.querySelector('.Text-Navigation-type-2');

translateButton.addEventListener('click', () => {
    TranslateWords();
});
//Встроенный перевод текста



















//Анимация hover на кнопках в nav
function changeColor(element) {
    let allElements = document.getElementsByClassName('color-change');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] === element) {
            element.style.color = 'white';
        } else {
            allElements[i].style.color = 'gray';
        }
    }
}

function resetColor() {
    let allElements = document.getElementsByClassName('color-change');
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = 'white';
    }
}
//Анимация hover на кнопках в nav








//Анимация появления текста на фоне видео
setTimeout(() => {
    let animationtext = document.getElementById('TextAnimationH1Button');
    if(animationtext) {
        animationtext.classList.add('IntroVideoText');
        animationtext.style.display = 'block';
    }
}, 1000);
//Анимация появления текста на фоне видео







//Плавное появление блоков после видео
const imageElement = document.querySelector('.DivBannerOne');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement.style.display = 'block';
    imageElement.classList.add('fade-in-left');
  }
});




const imageElement2 = document.querySelector('.DivBannerTwo');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement2.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement2.style.display = 'block';
    imageElement2.classList.add('fade-in-right');
  }
});






const imageElementTwo = document.querySelector('.DivBannerTwoDiv');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElementTwo.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElementTwo.style.display = 'block';
    imageElementTwo.classList.add('fade-in-left');
  }
});




const imageElement2Two = document.querySelector('.DivBannerTwoDiv2');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = imageElement2Two.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    imageElement2Two.style.display = 'block';
    imageElement2Two.classList.add('fade-in-right');
  }
});

//Плавное появление блоков после видео DivBannerTwoDiv







//Плавное появлене текста в Footer

const TextElement2Two = document.querySelector('.FooterTextOne');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = TextElement2Two.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    TextElement2Two.style.display = 'block';
    TextElement2Two.classList.add('FooterTextAnimation');
  }
});












const TextElement2 = document.querySelector('.FooterTextOne2');

window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset;

  const imageTop = TextElement2.getBoundingClientRect().top;

  if (scrollTop >= imageTop) {
    
    setTimeout(() => {
        TextElement2.style.display = 'block';
        TextElement2.classList.add('FooterTextAnimation');
    }, 1000);
    
  }
});
//Плавное появление текста в Footer






