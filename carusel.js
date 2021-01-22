const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');
const nextBtn = document.querySelector('#next');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';

nextBtn.addEventListener('click',() => {
    if(counter >= carouselSlide.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImg[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
    if(carouselImg[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';
    }
});
