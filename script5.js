let button = document.getElementById('button')
let deletoll = document.getElementById('deletoll')
let input = document.getElementById('input')
let text1 = document.getElementById('p1')
let text2 = document.getElementById('p2')
let text3 = document.getElementById('p3')
let text4 = document.getElementById('p4')
let text5 = document.getElementById('p5')

let counter = 1;

button.addEventListener('click',lockalstoreg)

deletoll.addEventListener('click',deletall)

text1.textContent = localStorage.getItem('inputValue');
text2.textContent = localStorage.getItem('inputValue1');
text3.textContent = localStorage.getItem('inputValue2');
text4.textContent = localStorage.getItem('inputValue3');
text5.textContent = localStorage.getItem('inputValue4');

function lockalstoreg(){
if(counter == 1){
    localStorage.setItem('inputValue', input.value)
    text1.textContent = localStorage.getItem('inputValue');
    counter++
} else if(counter == 2){
    localStorage.setItem('inputValue1', input.value)
    text2.textContent = localStorage.getItem('inputValue1');
    counter++
} else if(counter == 3){
    localStorage.setItem('inputValue2', input.value)
    text3.textContent = localStorage.getItem('inputValue2');
    counter++
} else if(counter == 4){
    localStorage.setItem('inputValue3', input.value)
    text4.textContent = localStorage.getItem('inputValue3');
    counter++
} else if(counter == 5){
    localStorage.setItem('inputValue4', input.value)
    text5.textContent = localStorage.getItem('inputValue4');
    counter++
}else{
alert('eror')
}
}

function deletall(){
localStorage.clear()
text1.textContent = '';
text2.textContent = '';
text3.textContent = '';
text4.textContent = '';
text5.textContent = '';
counter = 1;
}

function delet1(){
    localStorage.removeItem('inputValue')
    text1.textContent = localStorage.getItem('inputValue');
    counter--
}
function delet2(){
    localStorage.removeItem('inputValue1')
    text2.textContent = localStorage.getItem('inputValue1');
    counter--
}
function delet3(){
    localStorage.removeItem('inputValue2')
    text3.textContent = localStorage.getItem('inputValue2');
    counter--
}
function delet4(){
    localStorage.removeItem('inputValue3')
    text4.textContent = localStorage.getItem('inputValue3');
    counter--
}
function delet5(){
    localStorage.removeItem('inputValue4')
    text5.textContent = localStorage.getItem('inputValue4');
    counter--
}

console.log(counter)