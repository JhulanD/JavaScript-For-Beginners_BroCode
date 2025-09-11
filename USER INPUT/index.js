// How to accept input from the user

//Easy way = window prompt
//professional way = HTML textbox

//window prompt
// let name = prompt("What is your name");
// console.log(name);

//HTML textbox
document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("username").value;
    document.getElementById("greeting").textContent = `Hello ${userName}!`;
}