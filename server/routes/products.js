var express = require('express');
var router = express.Router();

var productList = require('../db/products.json');
var Datastore = require('nedb');
var db = new Datastore();
db.insert(productList);

var getSomeItems = function(query){
  let result = {
    name: new RegExp(query.name, 'i'),
    price: new RegExp(query.price, "i")
  };
  return result;
};

// var searchItems = function(query){
//   let result = {
//     ca
//   }
// }

/* GET users listing. */
router.get('/kek', function(req, res, next) {
  db.find({categories: 'akcesoria' }, function(err, response) {
    res.send(response);
  })
});

router.get('/', function(req, res, next) {
  db.find(getSomeItems(req.query), function(err, response) {
    res.send(response);
  })
});

module.exports = router;
