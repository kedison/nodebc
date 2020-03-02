// Exercise 124
// Create a new index124.js file
// Define a movies array with at least 10 movies that you really like
// Show the first and last movie name from the movies array
// To show the last item you need to use the movies lenght property to make it dynamic


const movieArray = ['movieFirst','movie2','movie3','movie4','movieLast' ];

const firstMovie = movieArray[0];
const lastMovie = movieArray[movieArray.length-1];

console.log(firstMovie, lastMovie);