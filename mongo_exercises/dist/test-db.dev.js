"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
  var db = client.db('comics'); //use comics (similar commands in terminals)

  var collection = db.collection('superheroes'); //db.superheroes

  collection.find({}).toArray(function (error, documents) {
    console.log(documents);
  });
});