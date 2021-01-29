const btn = document.querySelector('.b1');
let div = document.querySelector('.out');
const btn2 = document.querySelector('.b2');
let div2 = document.querySelector('.out2');
let count = 0;

btn.onclick = function () {
   if(count < 51){
      div.innerHTML =  count;
      count++;
   }
}

btn2.onclick = () => {
   for(let i = 0;i < 51;i++){
      if(count < i){
         div.innerHTML = count + ' ';
         count++;
      }
   }
}
