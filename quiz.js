const quizform=document.querySelector(".quiz-form")
const submitAnswerBtn=document.querySelector("#submit-answer-btn")
const outputE1=document.querySelector("#output")

const correctAnsweres=["90°","right angled"]
function calculatescore(){
    let score=0
    let index=0
    const formResult=new FormData(quizform);
    for (let value of formResult.values()){
        if(value===correctAnsweres[index]){
            score=score+1;
        }
        index=index+1
    }
    console.log(score)
    outputE1.innerText="your score is"+score


}
submitAnswerBtn.addEventListener("click",calculatescore)
