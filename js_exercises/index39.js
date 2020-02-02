// Exercise 39
// Create a new index39.js file
// Define a firstName variable and assign your name as it's value
// Define a lastName variable and assign your last name as it's value
// Show the following output:
// My first name is %firstName% and it is %nameCharacters% characters long
// My last name is %lastName% and it is %lastNameCharacters% characters long
// The character difference between my first name and last name is %charsDiff%
// My first name is longer than my last name: true or false

var firstName = 'Jane';
var lastName = 'Westwood';

var firstTem ='My first name is ' + firstName + ' and it is ' + firstName.length + ' characters long.';
var secondTem ='My last name is ' + lastName + ' and it is ' + lastName.length + ' characters long.';

console.log(firstTem);
console.log(secondTem);

console.log('first name longer = ', firstName.length >= lastName.length);
console.log('character difference = ', firstName.length - lastName.length);