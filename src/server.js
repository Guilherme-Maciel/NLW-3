//import dependences
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//turn on the framework 'express' 
const server = express()
server
//utilizar body do req
.use(express.urlencoded({ extended: true }))

//using the static archives
.use(express.static('public'))

//setting template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//create roate
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//turn on the server
server.listen(5500)
