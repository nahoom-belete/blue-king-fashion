const express = require('express');
const router = express.Router();
const { catalogueView} = require("../controllers/catalogueLogic.js")


router.post('/catalogue', catalogueView);

module.exports = router;

