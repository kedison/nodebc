// Exercise 9
// Create the following folder/file structure:
// /ex_9
//   |-- index.js
// index.js
// Create a Express web server using port 3000
// Execute an HTTP request to the server using the browser
// The server will send the following text as response:
// Congrats you're using your first Node.js and Express as Web Server
// When the server starts it needs to show the following message:
// This HTTP server is running on port %port%
// In case there's an error show the following message:
// Unable to start the server on port %port%
// Also update the server listen method to use logplease module

// require the express module
const express = require('express');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function (request, response) {
  response.send('Hello Node.js World!');
});

app.get('/', (request, response) => response.send('Hello Node.js World!'));
app.get('/about', (request, response) => response.send('This is my about page'));
app.get('/contact', (request, response) => response.send('Ths is my contact page'));

// configure the port that express is going to listen to
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});