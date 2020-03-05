// Exercise 140
// Create a new index140.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Filter the list using the filter method and remove the following mutants:
// Magneto
// Iceman
// Gambit
// Show the filtered list as output

const mutantArray = [];

mutantArray.push('Professor X');
mutantArray.push('Cyclops');
mutantArray.push('Iceman');
mutantArray.push('Angel');
mutantArray.push('Magneto');
mutantArray.push('Beast');
mutantArray.push('Phoenix');
mutantArray.push('Logan');
mutantArray.push('Gambit');

const mutantFilter = mutantArray.filter(value => value === 'Magneto' || value === 'Gambit' || value === 'Iceman');
console.log(mutantFilter);
