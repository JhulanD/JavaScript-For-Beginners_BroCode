// Variables & Data Types
// ---------------------------

// numbers

let age = 25;
let price = 10.99;
let gpa = 9;

console.log(`You are ${age} years old!`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);
console.log(typeof age);

// Strings

let firstName = 'Jhulan';
let email = 'jhulan@hotmail.com';

console.log(firstName);
console.log(`My first name is ${firstName}`);
console.log(`My email is: ${email}`);

// Booleans

let online = false;
let forSale = true;
let isCitizen = false;


console.log(online);
console.log(typeof online);
console.log(`I m online right now: ${online}`);

console.log(`Is the car for sale? - ${forSale}`);

console.log(`Is this person a citizen of our country: ${isCitizen}`);

// Variables

// Variable = A container that stores a value.
// It bahaves as if it were the value it contains.

let myName = 'Jhulan Dey';     // strings
let myAge = 47;                // number
let statusWork = false;        // boolean

document.getElementById("p1").textContent = `My name is ${myName}.`;
document.getElementById('p2').textContent = `My age is ${myAge}.`;
document.getElementById('p3').textContent = `Am I working right now: ${statusWork}`;

