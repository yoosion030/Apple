const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const scrollSize = document.querySelector('.scroll');
const product = document.querySelector('#product4');

product.addEventListener('mouseover', () => {
    console.log('asdsa');
    rightBtn.style = "opacity : 1;";
})

rightBtn.addEventListener('click', () => {
    scrollSize.style = "padding-left : 2vw ";
})
leftBtn.addEventListener('click', () => {
    scrollSize.style = "padding-left : 25vw ";
})