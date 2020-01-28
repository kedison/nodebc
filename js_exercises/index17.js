// Exercise 17
// Create a new index17.js file
// Define the variable series name (camel case) and assign the string value: Game of Thrones
// Define the following variables and assign the corresponding values
// variable name: dragon1, value: Drogon
// variable name: dragon2, value: Rhaegal
// variable name: dragon3, value: Viserion
// Create a template variable with the following value: In %seriesName% the dragons name are: %dragon1%, %dragon2% & %dragon3%
// Use console.log to output the interpolated template value
// The final result must be: In Game of Thrones the dragons name are: Drogon, Rhaegal & Viserion

var seriesName = 'Game of Thrones';
var dragon1 = 'Dragon';
var dragon2 = 'Rhaegal';
var dragon3 = 'Viserion';

var template = `In ${seriesName} the dragons name are: ${dragon1}`;

console.log(template + `, ` + dragon2 + ' & ' + dragon3);