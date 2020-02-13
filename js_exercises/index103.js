// Exercise 103
// Create a new index103.js file
// Define a evenNumbers variable and assign a function as value
// When executed the evenNumbers function will print even numbers between 0 and 100 as output
// Execute this function 5 times

let rangeLimit = 100;

const evenNumbers = function () {
    for (let evenNumber = 0; evenNumber <= rangeLimit; evenNumber++) {
        if (evenNumber % 2 == 0) {
            console.log(evenNumber);
        }
        if (evenNumber == rangeLimit) {
            console.log('end / divider');
        }
    }
}

evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();