// Exercise 127
// Create a new index127.js file
// Define a iceCreamFlavors array with 10 flavors
// Remove the first 2 elements using shift
// Show the iceCreamFlavors items as output
// Show each removed flavor

const iceCreamFlavorsArray = [];

iceCreamFlavorsArray.push('1');
iceCreamFlavorsArray.push('2');
iceCreamFlavorsArray.push('3');
iceCreamFlavorsArray.push('4');
iceCreamFlavorsArray.push('5');
iceCreamFlavorsArray.push('6');
iceCreamFlavorsArray.push('7');
iceCreamFlavorsArray.push('8');
iceCreamFlavorsArray.push('9');
iceCreamFlavorsArray.push('10');

const one = iceCreamFlavorsArray.shift();
const two  = iceCreamFlavorsArray.shift();

console.log(iceCreamFlavorsArray);

console.log("removed items: " + one, two);