let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
console.log (countEl);
function increment() {
  count += 1;
  countEl.innerText=count ;
  console.log(count);
}
document.getElementById('increment-btn').addEventListener('click', increment);
function save() {
 let countStr = count + "-" ;
  saveEl.textContent += countStr ;
  countEl.textContent = 0
  count = 0
}
document.getElementById('save-btn').addEventListener('click', save);