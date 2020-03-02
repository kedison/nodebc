// Exercise 128
// Create a new index128.js file
// Define a iceCreamFlavors array with 10 flavors
// Remove the last 4 elements using pop
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

const last1 = iceCreamFlavorsArray.pop();
const last2 = iceCreamFlavorsArray.pop();
const last3 = iceCreamFlavorsArray.pop();
const last4 = iceCreamFlavorsArray.pop();


console.log(iceCreamFlavorsArray);

console.log('removed items: '+ last1, last2, last3, last4);