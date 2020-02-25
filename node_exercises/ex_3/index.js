// Exercise 3
// Create the following folder/file structure:
// /ex_3
//   |-- index.js
// Init an NPM project inside the ex_3 folder
// Use ex_3 as project name
// Read the logplease module documentation and learn to use it
// Install the logplease module as dev dependency
// Configure the start script so it runs index.js
// index.js
// Show the following output using the logplease module
// Hello Node.js (use debug method)
// Node.js is great!! (use info method)
// Warning, Warning, I think we have a Warning (use warn method)
// Mayday Mayday, we have an errro, repeat.. we have an error (use error method)

const options = {
    useColors: true,     // Enable colors
    // color: Colors.White, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: true, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };

const Logger = require('logplease');
const logger = Logger.create('utils', options);
logger.debug(`Hello Node.js`);
// logger.log(`This is a log message`); // alias for debug()
logger.info(`Node.js is great!!`);
logger.warn(`Warning, Warning, I think we have a Warning`);
logger.error(`Mayday Mayday, we have an errro, repeat.. we have an error`);



