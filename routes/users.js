var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Users page');
});

router.get('/:id', function(req, res, next){
	res.send('Visited user page of ' + req.params.id);
});

module.exports = router;
