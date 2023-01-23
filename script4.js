let button = document.getElementById('button')
let mesh = document.getElementById('mesh')
let counter = 0;

addEventListener('click', func1)

function func1(){
if(counter == 0){
mesh.style.display = 'block';
button.classList.add('da')
button.classList.remove('button')
button.textContent = 'закрыть!';
counter = 1;
}else{
mesh.style.display = 'none';
counter = 0;
button.classList.remove('da')
button.textContent = 'открыть!';
}
}