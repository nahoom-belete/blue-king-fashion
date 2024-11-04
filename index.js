var express = require("express");
var app = express();

/* Get Routes*/
app.get('/hello', function(req, res) {
    res.send("Hello world!");
});


/* Post Routes */
app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });
 
var routes = require('./routes.js');

app.use('./routes', routes);

console.log("Server started")

app.listen(3000);