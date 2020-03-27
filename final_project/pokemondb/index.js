const express = require('express')
const app = express()
const port = 3000


// modules
const homex = require ('./home')

app.get('/', homex)

app.listen(port, () => console.log(`Pokemon database running on port ${port}!`))