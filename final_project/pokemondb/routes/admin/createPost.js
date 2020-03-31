// mongoose implementation
const mongoose = require('mongoose');
const PokemondbStructure = require('../../models/pokemondbStructure');


// mongodb://pokemondb:<password>@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
let uri = "mongodb://pokemondb:pokemondb1234@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/pokdemondb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const adminCreatev = async (req, res) => {
    const newPokemon = {
        number: req.body.number,
        name: req.body.name,
        type_1: req.body.type1,
        type_2: req.body.type2,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense
    }

    const pokemon = await new PokemondbStructure(newPokemon).save()
    console.log("New Pokemon: ", pokemon)
    res.redirect('/admin/index');
}

module.exports = adminCreatev;