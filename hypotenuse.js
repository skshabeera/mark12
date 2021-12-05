const side=document.querySelectorAll(".side-input")
const hypotenusebtn=document.querySelector("#hypotenuse-btn")
const outputE1=document.querySelector("#output")

function CalculateSumOfSquares(a,b){
    const SumOfSquares=a*a+b*b
    return SumOfSquares
}
function CalculateHypotenuse(){
    const SumOfSquares=CalculateSumOfSquares(Number(side[0].value),Number(side[1].value))
    const LengthOfHypotenuse=Math.sqrt(SumOfSquares);
    outputE1.innerText =" The length of the hypotenus is "+LengthOfHypotenuse


}
hypotenusebtn.addEventListener("click",CalculateHypotenuse)