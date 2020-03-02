// Exercise 130
// Create a new index130.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Beast
// Phoenix
// Sort the list
// Reverse the sorted list
// Join all mutants name using the following text: '* '
// Show the following output:
// Original mutants list
// Sorted mutants list
// Reversed mutants list
// Mutants name separated by *


const mutantArray = [];

mutantArray.push('Professor X');
mutantArray.push('Cyclops');
mutantArray.push('Iceman');
mutantArray.push('Angel');
mutantArray.push('Beast');
mutantArray.push('Phoenix');

console.log(mutantArray);

const sort = mutantArray.sort();
console.log(sort);

const reverse = mutantArray.reverse();
console.log(reverse);

const join = mutantArray.join(' * ');
console.log(join);

