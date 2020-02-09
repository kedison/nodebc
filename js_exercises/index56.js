// Exercise 56
// Create a new index56.js file
// Copy and paste the code from exercise 53
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator

let num = 11;

// if (num%2 ==0){
//     console.log(num, 'is an even number');
// }
// else {
//     console.log(num, 'is not an even number');
// }

let result = (num %2 == 0) ? (num + ' is an even number') : (num + ' is not an even number')

console.log(result);