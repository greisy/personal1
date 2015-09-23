var fs = require('fs');

fs.readFile('index.html', function(error,contents){
	console.log(contents);
});

//para correrlo se coloca $ node file_read.js

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200); //response.writeHead(200, {'Content-Type' : 'text/html'});
  fs.readFile("index.html", function(error,contents){
  	response.write(contents);
    response.end();	//opcionalmente toma data como parametro, y puede omitirse response.write() --- response.end(contents)---response.end("hello, this is dog")
  });
  
}).listen(8080);
//se corre el archivo en este caso ellos lo llamaron en app.js
// $ node app.js
// y se usa curl para emitir una peticion
// $ curl http:localhost:8080

//OTRA MANERA DE HACER EL EVENTO REQUEST, para crear mas de una funcion en el objeto (SERVER)
var http = require('http'); //traigo un modulo de eventos

var server = http.createServer();// creo una instancia de la clase createServer
server.on('request', function(request,response){ //creo las funciones que se dispararan cuando el evento request ocurra
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

// $ node <archivo.js>
// $ curl http://localhost:8080


///CREANDO NUEVOS EVENTOS 
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {//es necesario settear que va a hacer si se dispara el evento
  chatlog.push(message);
});

chat.on('join', function(nickname) {//crear el evento y su callback
  users.push(nickname);
});

// Emit events here
chat.emit('join','Grey24');//Para admitir o lanzar el evento, le puedo pasar como segun parametro el message de la funcion callback
chat.emit("message","hola");//Para admitir o lanzar el evento 