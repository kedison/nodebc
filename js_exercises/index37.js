// Exercise 37
// Create a new index37.js file
// Define an average variable and assign the following value: 6
// Define a studentAverage variable and assign the following value: 4
// Show the following output:
// This student has a greater or equal average required to pass: true/false
// This student is missing %points% to pass

let average = 6;
let studentAverage = 4;

let result = (studentAverage >= average);
let missingPoints = (result === false);

console.log('pass = ', result);
console.log('missing points = ', missingPoints);