// mongoose implementation
const mongoose = require('mongoose');
const PokemondbStructure = require('../models/pokemondbStructure');

const homev = async (req, res) => {
    // mongodb://pokemondb:<password>@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
    let uri ="mongodb://pokemondb:pokemondb1234@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/pokdemondb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 
    const pokemondb = await PokemondbStructure.find().exec();

    res.render('home', { pokemondb })

    // sort function by pokemon number not by ID
    // pokemondbArray.sort(function (a, b) {
    //     return parseInt(a.number, 10) - parseInt(b.number, 10);
    // })
}

module.exports = homev;