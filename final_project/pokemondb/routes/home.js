const homev = (req, res) => {

    const pokemondbArray = [{
            id: 1,
            number: "001",
            name: "Bulbasaur",
            type: "Grass / Poison",
            hp: 45,
            attack: 49,
            defense: 49
        },
        {
            id: 2,
            number: "012",
            name: "Ivysaur",
            type: "Grass / Poison",
            hp: 60,
            attack: 62,
            defense: 63
        },
        {
            id: 3,
            number: "003",
            name: "Venusaur",
            type: "Grass / Poison",
            hp: 80,
            attack: 82,
            defense: 83
        }
    ]


    res.render('home', {
        pokemondbArray
    })

    // sort function by pokemon number not by ID
    // pokemondbArray.sort(function (a, b) {
    //     return parseInt(a.number, 10) - parseInt(b.number, 10);
    // })
}

module.exports = homev;