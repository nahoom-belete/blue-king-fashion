var express = require('express');
var router = express.Router();

router.get('/catalogue', function(req,res) {
    res.render('pages/catalogue');
});

router.post('/', function(req, res) {
    res.send('POST route on things');
});

module.exports = router;