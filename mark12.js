const inputs=document.querySelectorAll(".angle-input")
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const output=document.querySelector("#output")

function calculatesumOfAngles(angle1,angle2,angle3){

    const sumofangles=angle1+angle2+angle3
        return sumofangles
 }

function isTrangle(){
    const sumofangles=calculatesumOfAngles

    (Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))

     if (sumofangles===180){
        output.innerText="yes,it is triangle";
        
     }
    else{
        output.innerText="oh oh! the angles dont form a triangle";
        
    }
 }
isTriangleBtn.addEventListener("click",isTrangle)
