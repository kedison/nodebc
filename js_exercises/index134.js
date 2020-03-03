// Exercise 134
// Create a new index134.js file
// Define a numbers array
// Assign values between 1 and 1000
// Iterate over the numbers array and add all numbers items
// On each iteration show the partial result
// 1
// 3
// 6
// ... so on
// If the final result equals 500500 then show the following output: Good job!!!
// Else show: Take a look to see if something is wrong 


const numberArray = [];

let sum = 0;
let result = 500500;

var numbersFunction = function (start, end) {
    while (start <= end) {
        console.log(sum += start);
        start++;
        numberArray.push(sum);
    }

    if (sum === result) {
        console.log('good job!');
    } else {
        console.log('Take a look to see if something is wrong');
    }
}

numbersFunction(1,1000);

console.log('array length: ' + numberArray.length);
// console.log('array list: ' + numberArray);