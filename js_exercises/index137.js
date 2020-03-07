// Exercise 137
// Create a new index137.js file
// Define a numbers array with values between 1 and 1000
// Iterate over each numbers item using map and increment the value in 10
// If value is 1 then it should be 11
// If value is 2 then it should be 12
// and so on..
// Show the following output for each element:
// index: 1, original number: 1, incremented value: 11

const numberArray = [];

var n = 0;
var m = 10;

while (n <= m) {
    numberArray.push(n);
    n++;
}

const numberAddTen = numberArray.map(x => x + 10);

numberAddTen.forEach(function (result, index) {
    console.log('index-', index, 'original-', numberArray[index] , 'incremented value-', result);
});