let timer = document.getElementById('timer');
let time = 120;

setInterval(limer, 1000)

function limer(){
let sec = time % 60;
let min = Math.floor(time / 60)   
timer.innerHTML = min + ':' + sec;
time--;
console.log(time)
}
