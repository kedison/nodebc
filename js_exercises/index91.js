// Exercise 91
// Create a new index91.js file
// Copy and paste the code from exercise 81
// Refactor the code to use for instead of do/while


// let count = 0;
// let number = 9;

// do {
//     sum = number * count;
//     console.log(number, '*', count, sum);
//     count++;
// }
// while (count <= 10) {}

for (let count = 0, number = 9; count <= 10; count ++){
    sum = number * count;
    console.log(number, '*', count, sum);
}