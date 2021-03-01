let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

const updateMargin = () => {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}


const goPrev = () => {
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = totalSlides - 1;
  }

  updateMargin();
}

const goNext = () => {
  currentSlide++;
  if(currentSlide > (totalSlides-1))
    currentSlide = 0;
  updateMargin();
}

setInterval(goNext, 4000);

/* Btn hamburguer */

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuBtn.style.position= 'absolute';
    menuBtn.style.marginLeft = '430px';
    body.style.overflowX = 'hidden';
    header.style.height = '220px';
    header.style.marginTop = '-60px';
    nav.style.display = 'flex';
    nav.style.flexDirection ='column';
    nav.style.marginLeft= '13px';
    logo.style.display = 'none';
    nav.style.marginTop = '105px';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBtn.style.position= 'absolute';
    menuBtn.style.marginLeft = '430px';
    header.style.height = '80px';
    header.style.marginTop = '0px';
    nav.style.display = 'none';
    nav.style.marginLeft= '0px';
    logo.style.display = 'none';
    
    menuOpen = false;
  }
});

window.onresize = function(){
  location.reload();
};