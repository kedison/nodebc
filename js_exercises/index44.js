// Exercise 44
// Create a new index44.js file
// Define a text variable and assign the following value: HELLO
// Define a result variable
// Get each char from the text variable and revert the text assigning it to the result variable
// At the end you should be able to show the following text: OLLEH
// Once you reverted the text, transform it to lowercase
// Show the final output: the final result is: olleh
// It kind of sound spanish, right?.. ole!!! (lol)

const text = 'HELLO';
const lastCharacterPosition = text.length-1;
const result = text.charAt(lastCharacterPosition).toLowerCase() + text.charAt(lastCharacterPosition-1).toLowerCase() + text.charAt(lastCharacterPosition-2).toLowerCase() + text.charAt(lastCharacterPosition-3).toLowerCase() + text.charAt(lastCharacterPosition-4).toLowerCase();


console.log(result)
