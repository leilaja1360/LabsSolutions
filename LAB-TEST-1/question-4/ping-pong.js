var events = require('events');
var moment = require('moment');

var counter=0;
//test for push
var myEmitter = new events.EventEmitter();
myEmitter.on('ping', function(){
    setTimeout(function () {
        console.log('ping!-- Count: '+counter+" -- Time: "+moment(new Date()).format("h:mm:ss a"));
        counter++;
        if(counter <= 15) {
            myEmitter.emit('pong');
        }
        else {
            console.log("Game Over!");
        }
    },1000);

});
myEmitter.on('pong', function(){
    setTimeout(function () {
        console.log('pong!-- Count: '+counter+" -- Time: "+moment(new Date()).format("h:mm:ss a"));
        counter++;
        if(counter<=15) {
            myEmitter.emit('ping');
        }
        else {
            console.log("Game Over!");
        }
    },1000);

});
myEmitter.emit('ping');
