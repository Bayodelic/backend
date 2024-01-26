'use strict'

var express = require('express');
const controller = require('../controllers/project');

var router = express.Router();

router.get('/home', controller.home);

router.post('/test',controller.test);

module.exports = router;