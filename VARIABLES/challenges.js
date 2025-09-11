// 🎯 Challenge: Coffee Shop Order
// 1 - Declare three variables:
        // coffeeType → store the name of the coffee (string).
        // cups → store the number of cups ordered (number).
        // pricePerCup → store the price per cup (number).
// 2 - Create a new variable totalCost that calculates the total order price.
// 3 - Print out a sentence like:
    // "You ordered 2 cups of Latte. Total cost is ₹300."

    let coffeType = ' Latte';
    let cups = 15;
    let pricePerCup = 9.99;

    let totalCost = cups * pricePerCup;
    console.log(`You ordered ${cups} cups of ${coffeType}. Total cost is ${totalCost}`)


// 🎯 Challenge 2: Student Grades
// 1 - Create variables:
        // studentName → a string with the student’s name.
        // mathScore, scienceScore, englishScore → numbers for marks.

// 2 - Create a variable averageScore that calculates the average of the three subjects.

// 3 - Print:
        // "Rahul's average score is 85."


let studentName = 'Olive';
let mathScore = 40;
let scienceScore = 75;
let englishScore = 80;

let averageScore = (mathScore + scienceScore + englishScore) / 3;

console.log(`Olive's average score is ${averageScore}`);