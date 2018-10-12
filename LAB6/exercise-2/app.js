var express = require('express');
var app = express();
//lab6
var requestTime = function(req, res,next){
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/greet', function(req,res){
  console.log('GET recieved: ' + req.requestTime);
  res.send('hello world!');
});


app.post('/greet', function(req,res){
  console.log('GET recieved: ' + req.requestTime);
  res.send('hello world!');
});

app.put('/greet', function(req,res){
  console.log('GET recieved: ' + req.requestTime);
  res.send('hello world!');
});

app.delete('/greet', function(req,res){
  console.log('GET recieved: ' + req.requestTime);
  res.send('hello world!');
});


app.listen(3000);
