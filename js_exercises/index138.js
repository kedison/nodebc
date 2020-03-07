// Exercise 138
// Create a new index138.js file
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
// Iterate over the mutants array
// Add <3 symbol before the mutant name if the iterated name is one of the following:
// Professor X
// Logan
// Phoenix
// Gambit
// Show the original mutant array items as output
// Show the updated mutant array items as output

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


// addHeart.forEach(function (mutant, index) {
//     console.log('index-', index, 'mutant-', mutant);
// });

var array1 = [];

var searchMutant = function (name) {
    var c = 0;
    while (c <= mutantArray.length) {
        if (name == mutantArray[c]) {
            const aop = mutantArray.map(x => "<3 " + x);
            array1.push(aop);
        }

        c++;
    }
}

searchMutant('Iceman');
searchMutant('Logan');
searchMutant('Phoenix');

console.log(array1);