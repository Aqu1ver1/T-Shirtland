let position = 0;
const slider_wrapper = document.querySelector('.slider-wrapper');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const item = document.querySelector('.new-col-photo1');
const container = document.querySelector('.slider-overflow');
let slidesToShow = (Math.round(container.clientWidth / item.clientWidth));
const itemCount = document.querySelectorAll('.new-col-photo1').length;
const sliderWidth = itemCount * item.clientWidth;

arrowNext.addEventListener('click', function (){
    let slidesToShow = (Math.round(container.clientWidth / item.clientWidth));
    position = position - item.clientWidth;
    if(-position > sliderWidth - (slidesToShow * item.clientWidth)){
        position = 0;
    }
    slider_wrapper.style.left = position +'px';
})

arrowPrev.addEventListener('click', function (){
    let slidesToShow = (Math.round(container.clientWidth / item.clientWidth));
    position = position + item.clientWidth;
    if(-position < 0){
        position = -(sliderWidth - (slidesToShow * item.clientWidth));
    }
    slider_wrapper.style.left = position +'px';
})

btnNext.addEventListener('click', function (){
    let slidesToShow = (Math.round(container.clientWidth / item.clientWidth));
    position = position - item.clientWidth;
    if(-position > sliderWidth - (slidesToShow * item.clientWidth)){
        position = 0;
    }
    slider_wrapper.style.left = position +'px';
})

btnPrev.addEventListener('click', function (){
    let slidesToShow = (Math.round(container.clientWidth / item.clientWidth));
    position = position + item.clientWidth;
    if(-position < 0){
        position = -(sliderWidth - (slidesToShow * item.clientWidth));
    }
    slider_wrapper.style.left = position +'px';
})

