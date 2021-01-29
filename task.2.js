const btn = document.querySelector('.b1');
let div = document.querySelector('.out');

let count = 0;

function f1(){
  if(count < 50 ){
     div.innerHTML = count;
     count++;

  }
}

btn.onclick = f1();
