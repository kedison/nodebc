// Exercise 4
// Create the following folder/file structure:
// /ex_4
//   |-- index.js
// Init an NPM project inside the ex_4 folder
// Use ex_4 as project name
// Read the one-liner-joke module documentation and learn to use it
// Install the one-liner-joke module
// Configure the start script so it runs index.js
// index.js
// Show a random joke as output
// Show the joke category as output
// Tip: the getRandomJoke returns an object that has a body property with the joke and a tags one with the categories

var oneLinerJoke = require('one-liner-joke');
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)


// var getRandomJoke = oneLinerJoke.getRandomJoke({
//     'exclude_tags': ['life', 'racist', 'marriage']
//   });
// console.log(getRandomJoke)


var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('racist');
console.log(getRandomJokeWithTag)

