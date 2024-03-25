


//nav
setTimeout(() => {
    let animationNav = document.getElementById('AnimationNav')
    animationNav.classList.add('Navigation-For-Model-Class')
}, 1000);







const nav = document.getElementById("AnimationNav");


setTimeout(function() {
  
  nav.style.display = "block";
}, 2000);

//nav



//animationText

let scrollEnabled = false;

document.querySelector('.banner').addEventListener('wheel', function(event) {
    if (!scrollEnabled) {
        event.preventDefault();
    } else {
        return;
    }

    let heading = document.querySelector('.banner h1');
    let fontSize = window.getComputedStyle(heading).getPropertyValue('font-size');
    let currentFontSize = parseFloat(fontSize);
    let newFontSize = currentFontSize * 1.5;

    if (newFontSize <= 1450.56) {
        heading.style.fontSize = newFontSize + 'px';
        let video = document.querySelector('.banner video');
        video.style.opacity = (newFontSize - currentFontSize) / 100;
        
        if (event.deltaY < 0 && currentFontSize > 100) {
            newFontSize = currentFontSize / 1.5;
            if (newFontSize < 100) {
                newFontSize = 100;
            }
            heading.style.fontSize = newFontSize + 'px';
            video.style.opacity = (newFontSize - currentFontSize) / 100;
        }
    } else {
        heading.style.display = 'none';
        let video = document.querySelector('.banner video');
        video.style.opacity = 1;
        scrollEnabled = true;
        document.querySelector('.content').classList.remove('hidden');
    }

    if (newFontSize > 1400.56) {
        heading.style.display = 'none';
        let video = document.querySelector('.banner video');
        video.style.opacity = 1;
        scrollEnabled = true;
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('main').style.display = 'block';
    }
});


document.querySelector('.content').addEventListener('wheel', function(event) {
    if (!scrollEnabled) {
        event.preventDefault();
    }
});


//animationText
const imageDiv = document.querySelector('.ImageDiv');
let currentWidth = 1000;
let currentHeight = 520;
const animationImageScrolles = document.querySelector('.ImageDiv');

animationImageScrolles.addEventListener('wheel', function(e) {
    e.preventDefault();

    if (e.deltaY > 0) {
        if (currentWidth < 1948.72 && currentHeight < 1013.33) {
            currentWidth *= 1.1;
            currentHeight *= 1.1;
        }
    } else {
        currentWidth = 1000;
        currentHeight = 520;
    }

    imageDiv.style.width = `${currentWidth}px`;
    imageDiv.style.height = `${currentHeight}px`;

    if (currentWidth === 1948.72 && currentHeight === 1013.33) {
       
        imageDiv.style.position = 'absolute';
    } else {
        imageDiv.style.position = 'static';
    }

    
});




