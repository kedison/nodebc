// Exercise 32
// Create a new index32.js file
// Define a height variable and assig the following value: 10
// Define a base variable and assig the following value: 4
// Calculate the perimiter of the rectangular
// Calculate the area of the rectangular
// Show both calculation results, height and base length
// Use a descriptive message to show all the values

const w = 4;
const h = 10;


const perimeter = (2*(w+h));
const area = w*h;
const diagonal = Math.sqrt((w**2)+(h**2));

console.log('rectangle perimeter calculation');
console.log('perimeter = ' + perimeter);
console.log('----------------------')
console.log('rectangle area calculation');
console.log('area = ' + area);
console.log('----------------------')
console.log('rectangle diagonal calculation');
console.log('diagonal = ' + diagonal);