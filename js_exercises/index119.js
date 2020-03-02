// Exercise 119
// Create a new index119.js file
// Define the following array:
// const data = [42, true, function() {return 'The meaning of life is: '}];
// If the second item from data is true then show the following output using the first and last items from the data array:
// The meaning of life is: 42


const data = [
    42, 
    true, 
    function () {return 'The meaning of life is: '}
];

// this becomes the name of the function, and the variable becomes a function
const message = data[2];

var printF = function () {
    if (data[1] === true) {
        console.log(message() + data[0]);
    } else {
        console.log("data is false");
    }
}

printF();