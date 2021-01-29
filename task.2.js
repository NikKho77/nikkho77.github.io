const btn = document.querySelector('.b1');
let div = document.querySelector('.out');

let count = 0;

btn.onclick = function () {
   if(count != 50){
      div.innerHTML = count;
      count++;
   }
}
