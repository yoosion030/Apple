const questionBox = document.querySelectorAll('.questionBox');
const accoridion = document.querySelectorAll('.accordion');
const answerBox = document.querySelectorAll('.answerBox');

let toggleBtn = [0, 0];

function answer(i) {
    if (toggleBtn[i] === 0) {
        toggleBtn[i] = 1;
        accoridion[i].src = "/images/chevron-up-solid.svg";
        answerBox[i].style = "display:block";
    } else {
        toggleBtn[i] = 0;
        accoridion[i].src = "/images/chevron-down-solid.svg";
        answerBox[i].style = "display:none";
    }
}