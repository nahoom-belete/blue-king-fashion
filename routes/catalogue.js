const express = require('express');
const router = express.Router();
const { catalogueView, nextPage} = require("../controllers/catalogueLogic.js")


router.post('/catalogue', catalogueView);
router.post('/next', nextPage);

module.exports = router;

