var express = require('express');
var router = express.Router();

var productList = require('../db/products.json');
var Datastore = require('nedb');
var db = new Datastore();
db.insert(productList);

var getSomeItems = function(query){
  let result = {
    name: new RegExp(query.name, 'i'),
    price: new RegExp(query.price, "i"),
    desc: new RegExp(query.desc, 'i')
  };
  return result;
};

var searchNames = function(query){
  let result = {
    name: new RegExp(query, 'i')
  };
  return result;
};

//search products
router.get('/search/:nameQuery', function(req, res, next) {
  db.find(searchNames(req.params.nameQuery), function(err, response) {
    console.log(req.params.nameQuery)
    res.send(response);
  })
});

router.get('/', function(req, res, next) {
  console.log(req.query.limit);
  console.log(req.query.offset);
  db.find(getSomeItems(req.query)).skip(req.query.offset).limit(req.query.limit).sort({name: 1}).exec(function(err, response) {
    res.send(response);
  })
});

module.exports = router;
