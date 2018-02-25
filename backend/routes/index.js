var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/upload', function(req, res, next) {
  console.log(req);
  res.json({status: 'ok'})
});

module.exports = router;
