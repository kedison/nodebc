// Exercise 80
// Create a new index80.js file
// Copy and paste the code from exercise 70
// Refactor the code to use do/while instead of while

// let i = 1;
// let sum = 0;

// while (i <= 1000) {
//     if (i % 2 != 0) {
//         console.log(sum += i);
//     }
//     i++;
// }

let i = 1;
let sum = 0;

do {
    if (i % 2 != 0) {
        console.log(sum += i);
    }
    i++;
}

while (i <= 1000) {}