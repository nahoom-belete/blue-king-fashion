var express = require('express');
var router = express.Router();
const { homeView } = require("../controllers/homeLogic.js")

router.get('/', homeView);

module.exports = router;