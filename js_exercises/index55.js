// Exercise 55
// Create a new index55.js file
// Copy and paste the code from exercise 52
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator


let firstNum = 10;
let secondNum = 5;

// if (firstNum > secondNum) {
//     console.log('First number', firstNum, 'is bigger than second number', secondNum);
// }
// else {
//     console.log('Second number', secondNum, 'is bigger than first number', firstNum);
// }

let result = (firstNum > secondNum) ? ('First number ' + firstNum + ' is bigger than second number '+ secondNum) : ('Second number ' + secondNum + ' is bigger than first number ' + firstNum)

console.log(result);
