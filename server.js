var express = require("express");
var app = express();
var home = require('./routes/home.js');
var catalogue = require('./routes/catalogue.js');
const bodyParser = require('body-parser')
// const session = require('express-session');

//View Engine
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.json({ type: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true
//   }));

//To access resources in public folder
app.use("/public", express.static('public'));

app.use('/', home);
app.use('/', catalogue);

app.listen(8080);

console.log("Server started")