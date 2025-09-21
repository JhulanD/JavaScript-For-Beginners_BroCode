// Random number generator
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum);


const myBtn = document.getElementById('btn');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;

myBtn.onclick = function() {
    randomNum =  Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}