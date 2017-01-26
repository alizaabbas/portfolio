var pg = require('pg');
var express = require('express');
var app = express();

var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use(express.static('style'));
var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/portfolio';
// loads portfolio page
app.get('/portfolio' , function(req, res){
	res.render('portfolio');
})

app.get('/mood' , function(req, res){
	res.render('mood');
})

app.get('/moodsad' , function(req, res){
	res.render('moodsad');
})
app.get('/moodAngry' , function(req, res){
	res.render('moodAngry');
})

app.get('*' , function(req,res){
	res.send("The website URL is not valid!...plesae try again!");
})

app.listen(3000, function() {
	console.log("listening to port 3000...");
})