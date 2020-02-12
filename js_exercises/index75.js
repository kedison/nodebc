// Exercise 75
// Create a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers


let n = 1;
let f = 0;
let f1 = -1;
let f2 = 1;

while (n <= 10) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n++;
}