var express = require('express');
var router = express.Router();
const { getProductImageList } = require("../public/scripts/catalogue_server.js")


router.get('/catalogue', function(req,res) {
    var pList = getProductImageList("footwear")
    console.log(typeof(pList))
    res.render('pages/catalogue', {
        img1: "./public/images/catalogue/footwear/" + pList[0],
        img2: "./public/images/catalogue/footwear/" + pList[1],
        img3: "./public/images/catalogue/footwear/" + pList[2],
        img4: "./public/images/catalogue/footwear/" + pList[3],
        img5: "./public/images/catalogue/footwear/" + pList[4]
    });
});

router.get('/', function(req, res) {
    res.send(
        
    )
})

router.post('/', function(req, res) {
    res.send('POST route on things');
});

module.exports = router;

