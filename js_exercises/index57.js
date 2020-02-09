// Exercise 57
// Create a new index57.js file
// Copy and paste the code from exercise 54
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator


const username = 'pepe2017';
const password = '12345';

const inputUsername = 'pepe2017';
const inputPassword = '0000';

// if (inputUsername === username && inputPassword === password){
//     console.log('Logged in user, show user home page');
// }
// else {
//     console.log('Sorry, there has been a problem, please try it again.');
// }

const result = (inputUsername === username && inputPassword === password) ? 
('Logged in user, show user home page') :
('Sorry, there has been a problem, please try it again.');

console.log(result);