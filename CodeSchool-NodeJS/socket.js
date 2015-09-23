var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);// me permite escuchar una peticion
io.on('connection', function(client){
	console.log('Client connected...');	

	client.emit("messages",{hello:world});///ver el lado del cliente donde esta el listen de esa funcion
	client.on('messages', function(data){
		console.log(data);
	});
});

app.get('/',function(req,res){
	res.sendFile(__dirname+ 'index.html');
});
server.listen(8080);

// $ node socket.js
// $ curl http://localhost:8080

// BROADCASTING MESSAGES, enviar el mensaje a multiples clientes
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);// me permite escuchar una peticion
io.on('connection', function(client){
	console.log('Client connected...');	

	client.emit("messages",{hello:world});///ver el lado del cliente donde esta el listen de esa funcion
	client.on('messages', function(data){
		client.broadcast.emit("messages", data);//broadcast message to all other clients connected
	});
});

app.get('/',function(req,res){
	res.sendFile(__dirname+ 'index.html');
});
server.listen(8080);

////////////////////// QUIEN ENVIA EL MENSAJE
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);// me permite escuchar una peticion
io.on('connection', function(client){
	console.log('Client connected...');	
	client.on('join',function(name){ // cuando se active el evento join se asumira que alguien esta enviando el nickname
		client.nickname = name; // aqui seteamos el nickname asociado al objeto client, es decir, creamos una propiedad
		// si seteamos la variable de esta manera nos aseguramos que podamos verla desde el lado del cliente como del servidor 
	});
 
	client.on('message',function(data){
		var nickname =client.nickname;//aqui se asigna a una variable porque el client.nickname va a cambiar cada vez que se cree una conexion
		client.broadcast.emit("messages", nickname + ": "+data);//broadcast message to all other clients connected
		client.emit("messages", nickname+ ": "+data);// reenvio el mismo mensaje que acaba de mandar al servidor solo para que el cliente que lo mando vea que mando
	});
});

app.get('/',function(req,res){
	res.sendFile(__dirname+ 'index.html');
});
server.listen(8080); 
// $ node socket.js
// vamos al browser y en el url escribimos http://localhost:8080



//////////////////////EJECICIOS
var express = require('express');
var app = express();
var http = require('http').createServer(app);// create an new http server and pass the express
    			 //app as the listener for that new server.
var io = require('socket.io')(http); //Using the socket.io module, listen for requests on the http server. Store the return object 
            //of this operation in a variable called io.
io.on('connection',function(client){
	console.log("The client is connected");
}); //Use the object stored in io to listen for client 'connection' events. Remember, the callback function takes one argument,
      							 //which is the client object that has connected.
http.listen(8080);//we want to tell our http server to listen to requests on port 8080.


/////////////BROADCASTING QUESTIONS
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question',function(data){ //In the server, listen for 'question' events from clients.
  	client.broadcast.emit('question',data);

  });
  
});

server.listen(8080);

//In our real-time Q&A app, we want to allow each client only one question at a time, but
// how do we enforce this rule? We can use socket.io's ability to save data on the client, 
//so whenever a question is asked, we first want to check the question_asked value on the client.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
   
    if(!client.question_asked){ // antes que el cliente emita una pregunta a los demas clientes conectados veo si ya hay una pregunta
    	client.question_asked = true; // aun no hay ninguna pregunta, entonces puedo setear el valor de question_asked de este cliente a true
      	client.broadcast.emit('question', question);//emito la pregunta en broadcast
    }
    
  });
});

server.listen(8080);


//////Clients can also answer each other's questions, so let's build that feature by first listening for the 'answer'
// event on the client, which will send us both the question and answer, which we want to broadcast out 
//to the rest of the connected clients.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");
  // listen for answers here
  client.on('answer', function(question,answer){ // el cliente cuando emita la pregunta desde el archivo .html enviara dos parametros la pregunta y la respuesta
    client.broadcast.emit('answer',question,answer);//emito en broadcast los dos parametros
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);