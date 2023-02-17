let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el")

num1 = 8;
num2 = 2;


function add(){
    let result = num1 + num2
    sumEl.innerHTML = "Sum: " + result
}
function subtract(){
    let result = num1 - num2
    sumEl.innerHTML = "Sum: " + result
}
function divide(){
    let result = num1 / num2
    sumEl.innerHTML = "Sum: "+ result
}
function multiply(){
    let result =num1 * num2
    sumEl.innerHTML = "Sum: " + result
}
