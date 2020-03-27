const express = require('express')
const app = express()
const port = 3000

// middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

// modules
const homev = require ('./routes/home')

app.get('/', homev)

app.listen(port, () => console.log(`Pokemon database running on port ${port}!`))