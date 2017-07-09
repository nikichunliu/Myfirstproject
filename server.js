
// Mean Stack

/*
    Mongo JS - Database
    Express - WebServer
    Angular / React - Interface
    NodeJS - Logic
*/

// import express library
var express = require('express');

// declare instance of express
var app = new express();
app.use(express.static('styles'));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/about', function(req, res){
    res.sendFile(__dirname + '/about.html');
});

app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/profile.html');
});

// turn on server on port 8000
app.listen(8000,function(){
    console.log("server started on port 8000");
});

