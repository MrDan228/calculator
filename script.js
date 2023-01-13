// let k1 = document.getElementById('lol1').textContent;
// let k2 = document.getElementById('lol2');

// function lol () {
// k2.innerHTML = k1;
// }
let hum = document.getElementById('hum')
let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let hum1 = document.getElementById('hum1')
let humtxt1 = document.getElementById('hum2')
let img = document.getElementById('img1');
let imgArr = ['photo/1.png','photo/2.jpeg']
let button1 = document.getElementById('button2')
let button2 = document.getElementById('button1')

//event lisener
button1.addEventListener('click', func1)
button2.addEventListener('click', func2)
hum.addEventListener('click', func3)


// // counter
let cn = 0;
let cn1 = 1;

//setInterval
// setInterval(func11(), 5000);

//function
// function func11(){
//     if(cn == imgArr.length - 1){
//         cn = -1;
//     }
//     img.src = imgArr[cn + 1];
//     cn++
//     console.log(cn)
// }
function func1(){
    if(cn == imgArr.length - 1){
        cn = -1;
    }
    img.src = imgArr[cn + 1];
    cn++
    console.log(cn)
}
function func2(){
    if(cn == imgArr.length - 1){
        cn = -1;
    }
    img.src = imgArr[cn + 1];
    cn++
    console.log(cn)
}
function func3(){
if(cn1 == 0){
hum1.style.display = 'none';
hum.style.left = '95%';
cn1 = 1
} else{
hum1.style.display = 'block';
hum.style.left = '85%';
cn1 = 0
}
}