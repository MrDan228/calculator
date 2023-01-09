let button1 = document.getElementById('b1');
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');
let button4 = document.getElementById('b4');
let button5 = document.getElementById('b5');
let button6 = document.getElementById('b6');
let button7 = document.getElementById('b7');
let button8 = document.getElementById('b8');
let button9 = document.getElementById('b9');
let button0 = document.getElementById('b0');
let button10 = document.getElementById('b10');
let button11 = document.getElementById('b11');
let button12 = document.getElementById('b12');
let button13 = document.getElementById('b13');
let button14 = document.getElementById('b14');
let buttonac = document.getElementById('bac');
let buttonc = document.getElementById('bc');

let display = document.getElementById('p');
let cn = 0;
let num1 = 0;
let num2 = 0;
let num3;
let sumboll;

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
button3.addEventListener('click', func3);
button4.addEventListener('click', func4);
button5.addEventListener('click', func5);
button6.addEventListener('click', func6);
button7.addEventListener('click', func7);
button8.addEventListener('click', func8);
button9.addEventListener('click', func9);
button0.addEventListener('click', func0);
button10.addEventListener('click', func10);
button11.addEventListener('click', func11);
button12.addEventListener('click', func12);
button13.addEventListener('click', func13);
button14.addEventListener('click', func14);
buttonac.addEventListener('click', funcAC);
buttonc.addEventListener('click', funcC);
function func1(){
display.textContent += 1;
}
function func2(){
display.textContent += 2;
}
function func3(){
display.textContent += 3;
}
function func4(){
display.textContent += 4;
}
function func5(){
display.textContent += 5;
}
function func6(){
display.textContent += 6;
}
function func7(){
display.textContent += 7;
}function func8(){
display.textContent += 8;
}
function func9(){
display.textContent += 9;
}
function func0(){
display.textContent += 0;
}
function func10(){
if(display.textContent.length == 0){
display.textContent = 'Eror';
}else{
num1 = display.textContent;
display.textContent += '+';
sumboll = 0;
}
}
function func12(){
if(display.textContent.length == 0){
display.textContent = 'Eror';
}else{
num1 = display.textContent;
display.textContent += '-';
sumboll = 1;
}
}
function func13(){
    if(display.textContent.length == 0){
    display.textContent = 'Eror';
    }else{
    num1 = display.textContent;
    display.textContent += '/';
    sumboll = 2;
    }
    }
    function func14(){
        if(display.textContent.length == 0){
        display.textContent = 'Eror';
        }else{
        num1 = display.textContent;
        display.textContent += '*';
        sumboll = 3;
        }
        }
function func11(){
if(sumboll == 0){
num2 = display.textContent.replace('+', '').replace(num1, '');
num3 = Number(num1) + Number(num2)
display.textContent = num3;
} else if(sumboll == 1){
num2 = display.textContent.replace('-', '').replace(num1, '');
num3 = Number(num1) - Number(num2)
display.textContent = num3;
}else if(sumboll == 2){
    num2 = display.textContent.replace('/', '').replace(num1, '');
    num3 = Number(num1) / Number(num2)
    display.textContent = num3;
    }else if(sumboll == 3){
        num2 = display.textContent.replace('*', '').replace(num1, '');
        num3 = Number(num1) * Number(num2)
        display.textContent = num3;
        }
}
function funcAC(){
display.textContent = ' ';
}
function funcC(){
for(let i = display.textContent.length; i <= 0;i++){
display.textContent.replace(display.textContent[i], '')
console.log(i)
}
}