const questionBox = document.querySelectorAll('.questionBox');
const accordion = document.querySelectorAll('.accordion');
const answerBox = document.querySelectorAll('.answerBox');
const toggleBtn = [0, 0, 0, 0, 0, 0, 0, 0];

function answer(i) {
    if (toggleBtn[i] === 0) {
        toggleBtn[i] = 1;
        accordion[i].src = "/images/chevron-up-solid.svg";
        $(answerBox[i]).slideDown(500,function(){
            style = "display:block";
        });
    } else {
        toggleBtn[i] = 0;
        accordion[i].src = "/images/chevron-down-solid.svg";
        // setTimeout(() => {
        //     accordion[i].src = "/images/chevron-down-solid.svg";
        // }, 200);
        $(answerBox[i]).slideUp(500,function(){
            style = "display:none";
        });
    }
}