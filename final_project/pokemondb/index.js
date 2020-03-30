const express = require('express')
const app = express()
const port = 3000

// middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))


// modules
const homev = require ('./routes/home')
const aboutv = require ('./routes/about')
const adminIndexv = require ('./routes/admin/index')
const adminCreatev = require ('./routes/admin/create')
const adminDeletev = require ('./routes/admin/delete')
const adminUpdatev = require ('./routes/admin/update')


app.get('/', homev)
app.get('/about', aboutv)
app.get('/admin/index', adminIndexv)
app.get('/admin/create', adminCreatev)
app.get('/admin/delete', adminDeletev)
app.get('/admin/update', adminUpdatev)

app.listen(port, () => console.log(`Pokemon database is running on port ${port}!`))