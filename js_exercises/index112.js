// Exercise 112
// Create a new index112.js file
// Define a showNumbers function that accepts two numeric parameters: start and end
// The showNumbers function will show all the numbers between the start and end numbers
// If start is bigger than the second one show the numbers from higher to lower
// If start is smaller than the second one then show the numbers from lower to higher
// Call the showNumbers function using the following parameters:
// start: 0, end: 1000
// start: 1000, end: 0
// start: 100, end: 100
// start: "100", end: 300
// Find a way to deal with the following scenarios:
// start and end are the same number
// parameters that aren't numbers


var showNumbers = function (start, end) {
    if (typeof (start) == 'number' && typeof (end) == 'number') {
        if (start < end) {
            while (start <= end) {
                console.log(start);
            }
        } else if (start >= end) {
            while (start >= end) {
                console.log(start);
                start--;
            }
        }
    } else {
        if (typeof (start) != 'number'&& typeof (end) != 'number') {
            console.log("both start and end are not numbers, please try again");
        } else if (typeof (end) != 'number') {
            console.log("end is not a number please input a number");
        } else {
            console.log("start is not a number please input a number")
        }
    }
}
showNumbers(100, 0);