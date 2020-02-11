// Exercise 72
// Create a new index72.js file
// Show the following output using while:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

// let star = '';
// while(star.length <= 10){
//     star = star + '*';
//     console.log(star);
// }

// or 

// let count = 0;
// let star = '';

// while (count <= 10){
//     star = star + '*';
//     console.log(star);
//     count++;
// }

// or


let count = 1;

while (count <= 10) {
    star = "*";
    console.log(star.repeat(count));
    count++;
}