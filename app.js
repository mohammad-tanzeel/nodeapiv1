var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booksdb');
var db =  mongoose.connection;

app.get('/',function(req, res){
   res.send('Hello Books'); 
});

app.listen('3000');
console.log('Server Started');