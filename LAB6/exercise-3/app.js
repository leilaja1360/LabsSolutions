var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({name: String, status: String});
var User = mongoose.model('User', userSchema);
//lab6
var john = User({name: 'John', status: 'active'});
john.save(function(err){
  if (err) throw err;

  console.log('****** User Saved! ******');
})

var jane = User({name: 'Jane', status: 'active'});
jane.save(function(err){
  if (err) throw err;

  console.log('****** User2 Saved! ******');
})


mongoose.connect('mongodb://leilaja:Leila1360@ds129393.mlab.com:29393/leilatestdb');


var port = process.env.PORT || 3000;
app.listen(port);
