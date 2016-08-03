
var express = require("express");
var path = require("path");

var index = require('./routes/index.js');
var input = require('./routes/input.js');
var bodyParser = require('body-parser');

var app = express();


// set views path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('json spaces', 2);



// use public directory for stylesheets
app.use(express.static(path.join(__dirname, 'public')));



index(app);
input(app);


var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("Listening on port " + port + "...");
});