// Exercise 101
// Create a new index101.js file
// Define a function named showUser that will output the following data:
// Your name
// Your age
// Your phone number
// Your street
// Your postal code
// If you're married or not (boolean)

let yourName = 'john rambo';
let yourAge = 50;
let yourPhoneNumber = '123-456-7890';
let yourStreet = '123 street';
let yourPostalCode = 'V1E 1E0';
let maritalStatus = false;

function showUser () {
    console.log('your name: ', yourName);
    console.log('your age: ', yourAge);
    console.log('your phone number: ', yourPhoneNumber);
    console.log('your street: ', yourStreet);
    console.log('your postal code: ', yourPostalCode);
    console.log('marital status: ', maritalStatus);
}

showUser();