// Counter Program

const decreaseBtn = document.getElementById("decrementBtn");
const increaseBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    let count = 0;
    countLabel.textContent = count;
}