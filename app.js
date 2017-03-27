'use strict'
const express  = require("express"),
  nodemailer   = require("nodemailer"),
  bodyParser   = require("body-parser"),
  cookieParser = require('cookie-parser'),
  logger       = require("morgan"),
  mongoose     = require("mongoose"),
  path         = require('path');	  

const app = express();
//middleware
app.use('/static', express.static(__dirname + '/public'));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

//templates
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');




//main routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('/work', function(req, res){ 
		res.render('work');	
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
