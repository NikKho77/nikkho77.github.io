console.log('Nik');
console.log(1999);
console.log('dobro' + ' ' + 'pozhalovat');
let a = 7;
let b = 9;
console.log(a*b);
let c = 7;
let d = 9;
console.log(c/d);
let e = 3;
let f = 5;
console.log(e+f);

const b1 = document.querySelector('.b-1');
let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
const b2 = document.querySelector('.b2');
let out2 = document.querySelector('.out2');
let i31 = document.querySelector('.i31');
let i32 = document.querySelector('.i32');
const b3 = document.querySelector('.b3');
let out3 = document.querySelector('.out3');

b1.onclick = () => {
    if(i1 == 4){
        out1.value = 'true';
    }else{
        out1.value = 'false';
    }
}

let a21 = 1;
let a22 = 2;

b2.onclick = () => {
    if (a21 > a22){
        out2.value = a21;
    }else{
        out2.value = a22;
    }
}

b3.onclick = () => {
    if(i31.value > i32.value){
        out3.value = +i31.value;
    }else{
        out3.value = +i32.value;
    }
}


