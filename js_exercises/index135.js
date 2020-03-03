// Exercise 135
// Create a new index135.js file
// Define a mutants array and assign the following values
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over each mutants item using forEach
// Show the mutant name and position


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

mutantArray.forEach(function (mutant, index) {
    console.log('index-', index, ' name-', mutant);
})