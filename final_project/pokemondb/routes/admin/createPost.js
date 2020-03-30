const adminCreatev = (req, res) => {
    console.log("Number: ", req.body.number)
    console.log("Name: ", req.body.name)
    console.log("HP: ", req.body.hp)
    console.log("Attack: ", req.body.attack)
    console.log("Defense: ", req.body.defense)



    // mongoose implementation
    const mongoose = require('mongoose');
    // mongodb://pokemondb:<password>@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
    let uri ="mongodb://pokemondb:pokemondb1234@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/pokdemondb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // mongoose model (Work as a Schema)
    const PokemondbStructure = mongoose.model('PokemondbStructure',{
        number: String,
        name: String,
        type: String,
        hp: Number,
        attack: Number,
        defense: Number
    });

    const newPokemon = {
        number: req.body.number,
        name: req.body.name,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense
    }

    const pokemon = new PokemondbStructure(newPokemon).save()
    console.log("New Pokemon: ", pokemon)
    res.redirect('/admin/index');
}

module.exports = adminCreatev;