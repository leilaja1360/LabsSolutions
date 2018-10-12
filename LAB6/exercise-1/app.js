var express = require('express');
var app = express();
//lab6
app.get('/html', function(req, res){
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/json', function(req, res){
  res.json({firstname: 'John', lastname: 'Smith'});
});


app.get('/toronto?[a-z*?]+?team', function(req, res){
  res.send('<html><head></head><body><h1>Go Toronto!' + req.param() + '</h1></body></html>');
});

app.listen(3000);
