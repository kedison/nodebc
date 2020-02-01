// Exercise 30
// Create a new index30.js file
// Calculate and show the area of a square
// Side length is 5
// Show a descriptive message to show the square area and side length

const lengthOfSides = 5;
const numberOfSides = 4;

const totalPerimeter = lengthOfSides * numberOfSides;
const totalArea = lengthOfSides ** 2;
const diagonal = lengthOfSides*Math.sqrt(2);

console.log('square perimeter/area/diagonal calucation');
console.log('----------------------')
console.log('number of sides = ' + numberOfSides);
console.log('length of sides = ' + lengthOfSides);
console.log('----------------------')
console.log('perimeter = ' + totalPerimeter);
console.log('area = ' + totalArea);
console.log('diagonal = ' + diagonal);