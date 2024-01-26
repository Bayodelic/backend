'use strict'

var express = require('express');
var bodyParser = require('body-parser');
//Cargar archivo de rutas
const router = require('./routes/project');

var app = express();


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS

//Rutas
app.use('/api',router);


// exportar
module.exports = app;