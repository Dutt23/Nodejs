//Imports event module
var events = require('events');

//Creates event emitter object

var eventEmitter = new events.eventEmitter();


// Create an event handler as follows
var connectHandler = function (){
console.log('connection succesful.');
  
 //Emit an event
eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){

console.log('data received success!');
})

eventEmitter.emit('connection');

console.log('Program ended');
