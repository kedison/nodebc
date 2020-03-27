const express = require('express')
const app = express()
const port = 3000

// middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))

// modules
const homev = require ('./routes/home')
const aboutv = require ('./routes/about')

app.get('/', homev)
app.get('/about', aboutv)

app.listen(port, () => console.log(`Pokemon database running on port ${port}!`))