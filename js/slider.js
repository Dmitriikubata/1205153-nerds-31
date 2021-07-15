const main_block = document.querySelector('.main-block');
const slide_1 = main_block.querySelector('.slide-1');
const slide_2 = main_block.querySelector('.slide-2');
const slide_3 = main_block.querySelector('.slide-3');
const slider_control_1 = main_block.querySelector('.slider-control-1');
const slider_control_2 = main_block.querySelector('.slider-control-2');
const slider_control_3 = main_block.querySelector('.slider-control-3');


slider_control_1.addEventListener('click', function(evt) {
    evt.preventDefault();
    slide_2.classList.remove('slider-item-current');
    slide_3.classList.remove('slider-item-current');
    slide_1.classList.add('slider-item-current');
    slider_control_2.classList.remove('slider-controls-current');
    slider_control_3.classList.remove('slider-controls-current');
    slider_control_1.classList.add('slider-controls-current');
});

slider_control_2.addEventListener('click', function(evt) {
    evt.preventDefault();
    slide_1.classList.remove('slider-item-current');
    slide_3.classList.remove('slider-item-current');
    slide_2.classList.add('slider-item-current');
    slider_control_1.classList.remove('slider-controls-current');
    slider_control_3.classList.remove('slider-controls-current');
    slider_control_2.classList.add('slider-controls-current');
});

slider_control_3.addEventListener('click', function(evt) {
    evt.preventDefault();
    slide_1.classList.remove('slider-item-current');
    slide_2.classList.remove('slider-item-current');
    slide_3.classList.add('slider-item-current');
    slider_control_1.classList.remove('slider-controls-current');
    slider_control_2.classList.remove('slider-controls-current');
    slider_control_3.classList.add('slider-controls-current');
});