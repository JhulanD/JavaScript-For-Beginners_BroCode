// ARROW FUNCTIONS - ES6
    // Arrow funcstions are a shorter way to write functions. They are easier to read.
    // They are also more efficient than regular functions.
    // A conscise way towrite functions expressions. Good for simple functions that you use only once.
    //The formula is: (parameters) => expression

    // Normal way
    function hello() {
        console.log("Hello World");
    }
    hello();

    // Arrow function
    const arrowFunction = (name) => console.log(`Arrow Function for ${name}`);
    arrowFunction('JD');

    // Shorter way
    const arrowFunction2 = name => console.log(`Arrow Function for ${name}`);
    arrowFunction2('JD');

    const arrowFunc = (daughter, age) => console.log(`My daughter's name is ${daughter} and she is ${age} years old`);
    arrowFunc('Olive', 14);

// Arrow functions with setTimeout
setTimeout(function sayhello(){
    console.log('Hey there!');
}, 3000);

//shorter version
setTimeout( () => console.log('Hello there!'), 2000);

// Arrow functions with map method
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(num => num * 2);
console.log(newNumbers);

// Arrow functions with filter method
const numbers2 = [1, 2, 3, 4, 5, 6]; // even numbers
const newNumbers2Even = numbers2.filter(num => num % 2 === 0); // filter even numbers
console.log(newNumbers2Even); // 2, 4, 6
const nuwNumbers2Odd = numbers2.filter(num => num % 2 != 0); // filter odd numbers
console.log(nuwNumbers2Odd); // 1, 3, 5