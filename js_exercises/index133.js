// Exercise 133
// Create a new index133.js file
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
// First part
// Iterate over the mutants items
// Show each mutant name
// Break the execution in case Magneto is part of the mutants list
// Second part
// Fin out Magneto position and remove it from the mutants array
// Iterate over the array without Magento on it and show each mutant name in upper case and the item position

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

mutantArray.forEach(function (mutant) {
            if (mutantArray.indexOf('Magneto') > -1) {
                    console.log(1);
                } else {
                    console.log(mutant);
                }

            
            })

            not done yet