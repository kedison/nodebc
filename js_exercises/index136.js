// Exercise 136
// Create a new index136.js file
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
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names

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

var arrayString = [];

var searchMutant = function (name) {
    var c = 0;
    while (c <= mutantArray.length) {
        if (name == mutantArray[c]) {
            arrayString.push(name);
        }
        c++;
    }
}

searchMutant('Iceman');
searchMutant('Logan');
searchMutant('Phoenix');

console.log(arrayString.toString());


