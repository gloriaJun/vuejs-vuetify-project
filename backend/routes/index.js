const express = require('express');
const formidable = require('formidable');
const util = require('util');
const router = express.Router();

/* GET home page. */
router.post('/upload', function(req, res, next) {
  let form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    res.json({fields: fields, files: files});
  })
});

module.exports = router;
