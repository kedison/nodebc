// Exercise 88
// Create a new index88.js file
// Copy and paste the code from exercise 78
// Refactor the code to use for instead of do/while

// let number = 0;

// do {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }
// while (
//     number <= 20
// ) {}

for (let number = 0; number <= 20; number++){
    if (number % 2 === 0) {
        console.log(number);
    }
}