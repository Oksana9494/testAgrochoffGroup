let elem = document.querySelector('.slider');
let thumb = document.querySelector('.slider__thumb');
let progress = document.querySelector('.slider__progress');
let valueText = document.querySelector('.slider__value-text');
let sliderValue;
let sliderMaxValue = 150;


elem.addEventListener('pointerdown', onPointerDown);

function onPointerDown (event) {
    event.preventDefault();
    elem.addEventListener('pointermove', onPointerMove);
    elem.addEventListener('pointerup', onPointerUp);
}
 
function onPointerMove (event) {
    event.preventDefault();

    let newLeft = calcLeftByEvent(event);

    thumb.style.left = `${newLeft * 100}%`;
    progress.style.width = `${newLeft * 100}%`;

    sliderValue = Math.round(sliderMaxValue * newLeft);
    valueText.innerHTML = sliderValue + ' м&#xB2;';
}
function calcLeftByEvent(event) {
    let newLeft = (event.clientX - elem.getBoundingClientRect().left) / elem.offsetWidth;

    if (newLeft < 0) {newLeft = 0;}
    if (newLeft > 1) {newLeft = 1;}

    return newLeft;
}

function onPointerUp() {
    elem.removeEventListener('pointermove', onPointerMove);
    elem.removeEventListener('pointerup', onPointerUp);
}
elem.ondragstart = function() {
    return false;
};


