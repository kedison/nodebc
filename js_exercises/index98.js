// Exercise 98
// Create a new index98.js file
// Add all the numbers bettwen 0 and 1000 using for statement
// The iteration must break if the partial result is bigger than 400
// Show the result as output

for (let i = 0, s = 0; i <= 1000; i++) {
    s += i;
    console.log(s);
    if (s >= 400) {
        break;
    }
}