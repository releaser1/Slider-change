const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlides = document.querySelector('.main-slide');
const numberMainSlides = mainSlides.querySelectorAll('div').length;

let indexActiveSlide = 0;

sidebar.style.top = `-${(numberMainSlides - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    moveSlides('up');
});

downBtn.addEventListener('click', () => {
    moveSlides('down');
});

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
        moveSlides('up');
    } else if (event.key === 'ArrowDown') {
        moveSlides('down'); 
    }
})

function moveSlides(direction) {    
    if(direction === "up") {
        indexActiveSlide++;

        if(indexActiveSlide === numberMainSlides) {
            indexActiveSlide = 0;
        }
    }  else if (direction === 'down') {
        indexActiveSlide--;

        if (indexActiveSlide < 0) {
            indexActiveSlide = numberMainSlides - 1;
        }
    }

    const height = container.clientHeight;

    mainSlides.style.transform = `translateY(-${indexActiveSlide * height}px)`; 
    sidebar.style.transform = `translateY(${indexActiveSlide * height}px)`; 
}