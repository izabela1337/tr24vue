var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("index site of tr24 shop API");
});

module.exports = router;
