///////PARA ESO USO UNA BD en este caso se usara REDIS
var redis= require('redis');
var client = redis.createClient();//crear un cliente redis 

client.set("message1","hello, yes this is a dog");
client.set("message2","hello,no this is spider");

client.get("message1",function(err,reply){
	console.log(reply);

});

// REDIS LISTS: pushing
//add a string to the messages list
var message = "Hello, this is a spider";
client.lpush("messages",message,function(err,reply){// aqui estoy agregando message a la lista messages puede que lance un error o quiera ver lo que me trae de respuesta cuando se cumpla el evento
	console.log(reply); // la respuesta que dara es el numero de elementos de la lista en este caso 1
});
var message = "hello,no this is spider";
client.lpush("messages",message,function(err,reply){
	console.log(reply); // 2
});

//USING lpush with LTRIM
var message = "Hello, this is dog";
client.lpush("messages",message,function(err,reply){
	client.ltrim("messages",0,1); //trim keeps first two strings and removes the rest
});
//Retriveng from list
client.lrange("messages",0,-1, function(err,messages){
	console.log(messages); // replies with all strings in list
});

//Sets are lists of unique data
// add and remove members of the names set
client.sadd("names":"Dog");
client.sadd("names", "Spider");
client.sadd("names", "Gregg");
// to remove an item
client.srem("names","Spider");
// reply all the members of set
client.smembers("names", function(err, names){
	console.log(names);
});

///////////////////////////////////

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";
client.lpush("questions",question1,function(error,value){
	console.log(value);
});

////
var redis = require('redis');
var client = redis.createClient();

//Now that we have seeded the questions list, use the lrange() 
//command to return all of the items and log them.
client.lrange("questions",0,-1,function(error,value){
	console.log(value);
});