var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'FaceBros' });
});

router.post('/users/submit', function(req, res, next){
	var id = req.body.id;
	res.redirect('/users/'+ id);
});

module.exports = router;
