const questionBox = document.querySelectorAll('.questionBox');
const accoridion = document.querySelectorAll('.accordion');
const img = document.querySelector('img');
const answerBox = document.querySelectorAll('.answerBox');

let haha = 'down';

function answer(i){
    console.log(i);
    if(haha === 'down'){
        haha = 'up';
        accoridion[i].src = "/images/chevron-up-solid.svg";
        answerBox[i].style = "display:block";
    }
    else {
        haha = 'down';
        accoridion[i].src = "/images/chevron-down-solid.svg";
        answerBox[i].style = "display:none";
    }
    
}

