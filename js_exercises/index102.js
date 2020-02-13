// Exercise 102
// Create a new index102.js file
// Define a showName variable and assign a function as value
// When the showName function get executed it will print your name with the following output format:
// ===========
// = Nicolás =
// ===========
// Call the showName at least 2 times


let name = 'Nicolás';
let line = '=';

function showName () {
    console.log(line.repeat(11));
    console.log(line, name, line);
    console.log(line.repeat(11));
}

showName();
showName();