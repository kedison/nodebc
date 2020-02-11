// Exercise 70
// Create a new index70.js file
// Use while structure to only sum odd numbers between 0 and 1000
// Show the partial result as output too

let i = 1;
let sum = 0;

while (i <= 1000) {
    if (i % 2 != 0) {
        console.log(sum += i);
    }
    i++;
}