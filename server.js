var express = require("express");
var app = express();
var homeRoutes = require('./routes/homeRoutes.js');
var catalogueRoutes = require('./routes/catalogueRoutes.js');

app.set('view engine', 'ejs');

app.use("/public", express.static('public'));

app.use('/', homeRoutes);
app.use('/', catalogueRoutes);

app.listen(3030);

console.log("Server started")