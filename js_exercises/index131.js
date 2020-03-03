// Exercise 131
// Create a new index131.js file
// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for

const femaleStu = ['f3', 'f1', 'f2', 'f5', 'f4'];
const maleStu = ['m5', 'm2', 'm4', 'm1', 'm3'];

const combineStu = femaleStu.concat(maleStu);
const sortCombineStu = combineStu.sort();


console.log(femaleStu[0]);
console.log(femaleStu[1]);
console.log(femaleStu[2]);
console.log(femaleStu[3]);
console.log(femaleStu[4]);
console.log(femaleStu[5]);


var c = 0;

while (maleStu.length >= c) {
    console.log(maleStu[c]);
    c++;
}


for (var i = 0; sortCombineStu.length >= i; i++) {
    console.log(combineStu[i]);
}