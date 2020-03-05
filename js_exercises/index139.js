// Exercise 139
// Create a new index139.js file
// Define a numbers array with values between 1000 and 1
// Iterate over the numbers array and filter the following values creating new arrays for each type:
// Even numbers
// Odd numbers
// Show the last 10 odd numbers as output
// Show the first 20 even numbers as output



const numberArray = [];

var n = 1;
var m = 100;

while (n <= m) {
    // console.log(m);
    numberArray.push(m);
    m--;
}

// const evenNumbers = numberArray.filter(function(value){
//     return value %2 == 0;
// });

const evenNumbers = numberArray.filter(value => value %2 == 0);
const oddNumbers = numberArray.filter(value => value %2 != 0);

console.log(evenNumbers);
console.log(oddNumbers);

