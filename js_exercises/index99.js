// Exercise 99
// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output



for (let i = 0, s = 0, c = 0; i <= 1000; i++) {
    if (i % 2 == 0) {
        c++;
        s += i;
        console.log(s);
    }
    if (c == 20) {
        break;
    }

}