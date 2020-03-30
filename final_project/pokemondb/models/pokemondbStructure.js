// mongoose implementation
const mongoose = require('mongoose');


// mongoose model
const PokemondbStructure = mongoose.model('PokemondbStructure',{
    number: String,
    name: String,
    type: String,
    hp: Number,
    attack: Number,
    defense: Number
});

module.exports = PokemondbStructure;