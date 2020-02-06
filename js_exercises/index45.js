// Exercise 45
// Create a new index45.js file
// Define a playerName variable with the following value: Patrik Laine is lame
// Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
// Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
// Use the slice method to get the following words or phrases from the previous variables:
// Patrik Laine is
// jets
// the best
// , Go
// Use a template variable to create the final result
// Change the first jets character to be Capitalized
// Create all the variables that you might need to accomplish this objective
// The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!

const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg';

// patrik laine is
const phrase1 = playerName.slice(0,16);
// jets
const phrase2 = teams.slice(46,50);
// the best
const phrase3 = message.slice(12,21)
// , Go
const phrase4 = message.slice(34,39)


const result = phrase1.toUpperCase().slice(0,13) + phrase1.slice(13) + phrase3 + phrase2 + phrase4 + phrase2 + '!!';

console.log(result);