var express = require("express");
var app = express();

app.get('/helloworld', function(req, res) {
    res.send("Hello world!");
});

app.listen(3000);