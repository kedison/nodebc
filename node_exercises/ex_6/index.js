// Exercise 6
// Create the following folder/file structure:
// /ex_6
//   |-- index.js
// Init an NPM project inside the ex_6 folder
// Use ex_6 as project name
// Add a start script to run the index.js file
// index.js
// Define a greet function using Arrow Function syntax
// This functions accepts 2 parameter
// First parameter is a string that represents a person first name
// Second parameter is a string that represents a person last name
// This functions shows the following message when it's called
// Hi %firstname% %lastname%
// Call the function and pass your first and last name as parameters
// Extra
// Add a third parameter to the greet function
// This parameter is a function that we'll use as callback
// This callback will get executed after greeting the person
// This callback function will show the following output:
// This code gets executed after the greet function call
// Run the script again to see the new feature


const greet = (first, last, callback) =>{
    console.log(`hi ${first} ${last}`, typeof first, typeof last, typeof callback);
    callback();
    console.log('this is a very importrant piece of logic')
}

const callbackFunction = () => console.log('This code gets executed after the greet function call');

greet('john', 'rambo', callbackFunction)