// Exercise 100
// Create a new index100.js file
// Define a function that will show even numbers from 0 to 100 as output



function showEvenNumbers() {
    for (let n = 0; n <= 100; n++) {
        if (n % 2 == 0) {
            console.log(n)
        }
    }
}

showEvenNumbers();