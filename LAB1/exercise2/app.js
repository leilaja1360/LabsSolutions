var ft = require('./sportsteam');
var comp = require('./comparer');
var calc = require('./calculator');

//set module property
ft.teamname = 'Leafs';

//call module method
ft.Cheer();

var num1 = 5;
var num2 = 5;
var result = (comp.AreNumberEqual(num1, num2))? 
calc.Add(num1, num2): 
calc.Subtract(num1, num2);

console.log(result);

// Exercise 3
var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('call me');
}

eventEmitter.on('call', fn);
eventEmitter.emit('call');