const btn = document.querySelector('.b1');
let div = document.querySelector('.out');

function f1(){
   for(let i = 0;i = 50; i++){
      div.textContent = i + ' ';
   }
}

btn.onclick = f1();
