// Exercise 132
// Create a new index132.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Beast
// Phoenix
// Logan
// Show the following message only if Logan and Professor X are mutants items:
// We love X-Men
// Show the following message only if Gambit is not a mutants items:
// X-Men sucks


const mutantArray = [];

mutantArray.push('Professor X');
mutantArray.push('Cyclops');
mutantArray.push('Iceman');
mutantArray.push('Angel');
mutantArray.push('Beast');
mutantArray.push('Logan');

if(mutantArray.indexOf('Logan') > -1 && mutantArray.indexOf('Professor X') > -1 ){
    console.log('search logan and professor x: we love x-men');
}
else {
    console.log('did not find logan and professor x: x-men sucks')
}

if(mutantArray.indexOf('Gambit') > -1){
    console.log('search gambit: we love x-men');
}
else {
    console.log('did not find gambit: x-men sucks')
}