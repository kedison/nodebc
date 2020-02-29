// Exercise 114
// Create a new index114.js file
// Define a revert function that accepts a string parameter
// This function shows the reverted text parameter
// For example if you call the revert function with 'hello' the function will show: olleh
// Call this function using at least 5 different words :)


const revertFunc = function (text) {
    var newText = "";
    var arrayBucket = [];


    if (typeof (text) == 'string') {
        for (var i = text.length - 1; i >= 0; i--) {
            newText += text[i];
            arrayBucket.push(newText);

            if (i == 0) {
                // console.log(arrayBucket[arrayBucket.length-1]);
                return arrayBucket[arrayBucket.length-1];
            }
        }
    } else {
        console.log(`please input a string of text only`);
    }
}

// revertFunc("hello");

console.log(revertFunc('one'));
console.log(revertFunc('two'));
console.log(revertFunc('three'));
console.log(revertFunc('four'));
console.log(revertFunc('five'));
console.log(revertFunc('hello its done'));