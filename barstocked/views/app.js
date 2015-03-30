var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/static', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
    io.emit('first_load', bar);
  socket.on('disconnect', function(){

    console.log('user disconnected');
  });
  socket.on('uncheck', function(msg){
    io.emit('uncheck', msg);
    bar[msg] = true;
    console.log(msg);

  });
  socket.on('check', function(msg){
    io.emit('check', msg);
    bar[msg] = false;
    console.log(msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});


var bar = {
"cb21" : false,
"cb22" : false,
"cb23" : false,
"cb24" : false,
"cb25" : false,
"cb26" : false,
"cb27" : false,
"cb28" : false,
"cb29" : false,
"cb30" : false,
"cb31" : false,
"cb32" : false,
"cb33" : false,
"cb34" : false,
"cb35" : false,
"cb36" : false,
"cb37" : false,
"cb38" : false
}

