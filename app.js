'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//rutas

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS

//Rutas

app.post('/test/:id', (req,res) => {

    console.log(req.params.id); //Para parametros que vienen en la url
    console.log(req.query.web); // Para
    console.log(req.body.nombre);  //Es el cuerpo de la peticion

    res.status(200).send({
        message: "Hola mundo desde mi API de nodejs"
    });
});

// exportar
module.exports = app;