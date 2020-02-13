// Exercise 104
// Create a new index104.js file
// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times

const fibonacci = function () {
    rangeLimit = 10;
    for (let n = 1, f = 0, f1 = -1, f2 = 1; n <= rangeLimit; n++) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
        if (n == rangeLimit) {
            console.log('end / divider');
        }
    }
}

fibonacci();
fibonacci();
fibonacci();