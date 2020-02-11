// Exercise 78
// Create a new index78.js file
// Copy and paste the code from exercise 68
// Refactor the code to use do/while instead of while

// let number = 0;

// while (number < 20) {
//     number++
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

let number = 0;

do {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}
while (
    number <= 20
) {}