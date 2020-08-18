var express = require('express');
var router = express.Router();

var configFile = require('../db/config.json');
var Datastore = require('nedb');
var db = new Datastore();
db.insert(configFile);

router.get('/', function(req, res, next) {
    db.find({}).exec(function(err, response) {
        res.json(response)
    })
});

module.exports = router;