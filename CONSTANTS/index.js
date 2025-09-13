// Constants = values that never change

const PI = 3.14159;
const gravity = 9.81;

let radius;
let circumference;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}
