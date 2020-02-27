const greet = (first, last, callback) =>{
    console.log(`hi ${first} ${last}`, typeof first, typeof last, typeof callback);
    callback();
    console.log('this is a very importrant piece of logic')
}

const callbackFunction = () => console.log('This code gets executed after the greet function call');


module.exports = greet;