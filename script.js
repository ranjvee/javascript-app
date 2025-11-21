let num1 = 6 ;
let num2 = 3 ;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
function add() {
  let sum = num1+ num2;
  console.log(sum);
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}
document.getElementById("add-btn").addEventListener("click",add);
function sub(){
  let sub = num1-num2;
  document.getElementById("sum-el").textContent = "Sum: " + sub;
}
document.getElementById("subtract-btn").addEventListener("click",sub);
function mul(){
  let mul = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + mul;
}
document.getElementById("multiply-btn").addEventListener("click",mul);
function div(){
  let div = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + div;
}
document.getElementById("divide-btn").addEventListener("click",div);