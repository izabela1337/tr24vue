var express = require('express');
var router = express.Router();

var productList = require('../db/products.json');
var Datastore = require('nedb');
var db = new Datastore();
db.insert(productList);

const getSomeItems = function(query){
  let result = {
    name: new RegExp(query.name, 'i'),
    price: new RegExp(query.price, "i"),
    desc: new RegExp(query.desc, 'i')
  };
  return result;
};

const searchNames = function(query){
  let result = {
    name: new RegExp(query, 'i')
  };
  return result;
};

const singleItem = function(query){
  let result = {
    _id: new RegExp(query, 'i')
  }
}

const tagSearch = function(query){
  let result = {
    categories: new RegExp(query, 'i')
  }
}

//search products
router.get('/search/:nameQuery', function(req, res, next) {
  db.find(searchNames(req.params.nameQuery), function(err, response) {
    console.log(req.params.nameQuery)
    res.send(response);
  })
});

//get all with limit, offset and sorting
router.get('/', function(req, res, next) {
  console.log(req.query.limit);
  console.log(req.query.offset);
  db.find(getSomeItems(req.query)).skip(req.query.offset).limit(req.query.limit).sort({name: 1}).exec(function(err, response) {
    res.send(response);
  })
});

//get one product (/item page)
router.get('/item/:itemID', function(req, res, next) {
  db.find(singleItem(req.params.itemID).exec(function(err, response) {
    res.send(response);
  }))
});

//get results based on tags
router.get('/category/:cat', function(req, res, next) {
  console.log(req.params.cat);
  db.find({$elemMatch: {categories: ["akcesoria", "pisanie"]}}, function(err, response) {
    res.send(response);
  })
});

module.exports = router;
