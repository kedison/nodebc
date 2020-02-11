// Exercise 90
// Create a new index90.js file
// Copy and paste the code from exercise 80
// Refactor the code to use for instead of do/while

// let i = 1;
// let sum = 0;

// do {
//     if (i % 2 != 0) {
//         console.log(sum += i);
//     }
//     i++;
// }

// while (i <= 1000) {}

for (let i = 1, sum = 0; i <=1000; i++){
    if (i % 2 != 0) {
        console.log(sum += i);
    }
}