const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");

    const db = client.db('comics'); //use comics (similar commands in terminals)
    const collection = db.collection('superheroes'); //db.superheroes

    collection.find({}).toArray((error, documents) => {
        console.log(documents);
    })
});