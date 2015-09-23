var messages =[]; //almacenar los mensajes en un array
var storeMessages = function(name,data){
	messages.push({name: name,data: data});
	if(messages.length > 10){ // siempre que llegue aqui y vea que los mensajes son mayores que 10 va a quitar el primero de la lista, que seria el primero que entro
		messages.shift();
	}
}


io.sockets.on('connection',function(client){
	client.on('join', function(name){ //cuando un nuevo cliente se una al chat pueda ver los mensajes antes enviados
		messages.forEach(function(message){
			client.emit("messages",message.name+ ": "+ message.data);//iterate through messages array and emit a message on the connecting client for each one
		});

		//client.set('nickname',name);
		//client.broadcast.emit('chat'+ name + "joined the chat");
	});
	client.on("message",function(message){
		client.get("nickname",function(error,name){
			client.broadcast.emit("messages",name+": "+message);
			client.emit("messages",name+": "+message);
			storeMessages(name, message); // when client sends a message call storeMessage
		});
	});
});


/////////////////////AHORA CUANDO SE CIERRE LA CONEXION TODOS LOS MENSAJES SERAN BORRADOS
///////PARA ESO USO UNA BD en este caso se usara REDIS
var redisClient = redis.createClient();
var storeMessage = function(name,data){
	var message = JSON.stringify({name: name, data: data});//need to turn object into string to store in redis
	redisClient.lpush("messages",message,function(err,reply){
		redisClient.ltrim("messages",0,9);// keep newest 10 items
	});
};
io.sockets.on('connection',function(client){
	client.on('join', function(name){
		redisClient.lrange("messages",0,-1,function(err,reply){
			messages = messages.reverse();// reverse so they are emitted in the correct order

			messages.forEach(function(message){
				message = JSON.parse(message);// parse into JSON object
				client.emit("messages", message.name+ ": "+	);
			});
		});
	});
});
////////////////////MOSTRAR QUIENES ESTAN CONECTADOS
var redisClient = redis.createClient();
var storeMessage = function(name,data){
	var message = JSON.stringify({name: name, data: data});//need to turn object into string to store in redis
	redisClient.lpush("messages",message,function(err,reply){
		redisClient.ltrim("messages",0,9);// keep newest 10 items
	});
};
io.sockets.on('connection',function(client){
	client.on('join', function(name){
		client.broadcast.emit("add chatter", name); //notify other clients a chatter has joined
		
		redisClient.smembers('names',function(err,names){
			names.forEach(function(name){
				client.emit('add chatter',name);//emit all the currently logged in chatters to the newly connected client
			});
		});
		redisClient.sadd("chatters",name); // add name to chatters set
		redisClient.lrange("messages",0,-1,function(err,reply){
			messages = messages.reverse();// reverse so they are emitted in the correct order

			messages.forEach(function(message){
				message = JSON.parse(message);// parse into JSON object
				client.emit("messages", message.name+ ": "+	);
			});
		});
	});
	client.on('disconnect', function(name){
		client.get('nickname',function(err,name){
			client.broadcast.emit("remove chatter", name);
			redisClient.srem("chatters",name);
		});
	});
});



///////////////////// EJERCICIOS // add the question to the list here
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      // add the question to the list here
      redisClient.lpush("questions",question);//Agrego la pregunta a la lista de preguntas
    }
  });
});

//Now that we have questions stored in redis, 
//let's emit them whenever a new client connects to the server through socket.io.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange("questions",0,-1,function(error,value){
    value.forEach(function(question){
    	client.emit("question",question);
    });
  });
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question,function(){//Add a callback to lpush that will be used to limit the size of the list down to a max of 20.
      	redisClient.ltrim("questions",0,19);
      });
    }
  });
});