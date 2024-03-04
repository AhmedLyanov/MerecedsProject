setTimeout(() => {
    let endSite = document.querySelector('#BodySite');
    endSite.classList.add('BodyEnd');
    
}, 6000);

setTimeout(() => {
    window.location.href = 'main/main.html'
}, 9000);



const backgroundElement = document.querySelector('.BackgroundImg');


setTimeout(() => {
    
    if (backgroundElement) {
        backgroundElement.style.display = 'block';
    }
}, 2000);


