var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	res.send('Test page without id');
});

router.get('/:id', function(req, res, next) {
	res.render('test', {output: req.params.id});
});

module.exports = router;