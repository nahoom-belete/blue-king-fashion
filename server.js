var express = require("express");
var app = express();
var homeRoutes = require('./routes/homeRoutes.js');
var catalogueRoutes = require('./routes/catalogueRoutes.js');

app.set('view engine', 'ejs');

//To access resources in public folder
app.use("/public", express.static('public'));

app.use('/', homeRoutes);
app.use('/', catalogueRoutes);

app.listen(8080);

console.log("Server started")