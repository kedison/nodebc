const indexv = async (req, res) => {
    // mongoose implementation
    const mongoose = require('mongoose');
    const uri = "mongodb://pokemondb:pokemondb1234@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/pokemondb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // mongoose model
    const pokemondbStructure = mongoose.model('pokemondbStructure',{
        number: String,
        name: String,
        type: String,
        hp: Number,
        attack: Number,
        defense: Number
    });

    const pokemondb = await pokemondbStructure.find().exec();


    res.render('admin/index', {
        pokemondb
    })

    // sort function by pokemon number not by ID
    // pokemondbArray.sort(function (a, b) {
    //     return parseInt(a.number, 10) - parseInt(b.number, 10);
    // })
}

module.exports = indexv;