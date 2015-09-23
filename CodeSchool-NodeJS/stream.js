var htpp = require('http');
http.createServer(function(request, response){
	response.writeHead(200);
	request.on('readable',function(){ //escuchamos al evento readable hasta que se cumpla entonces lanzo el callback 
		var chunk = null;
		while(null !== (chunk = request.read())){
			response.write(chunk);//chunk son buffer que almacenan data que puede ser binaria entonces la paso a toString ---console.log(chunk.toString();)
			//si se coloca console.log(chunk.toString(); en vez de response lo que hacemos es solo colocar en la consola lo que esta llegando de entrada, 
			//pero si escribo en el objeto de respuesta --response.write el chunk, estoy enviadole al cliente lo que me acaba de enviar	
		}
	});
	request.on('end',function(){ //escuchamos al evento end cuando la data se termine de transferir se dispara la funcion que termina la respuesta
		response.end();
	})
}).listen(8080);

//PODEMOS SUSTITUIR EL CODIGO DE ARRIBA CON LO SIGUIENTE
var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	request.pipe(response);//esta funcion lo que hace es sustituirme el evento readable con la lectura y escritura de los chunks
}).listen(8080);

//run from the terminal
// $ curl -d 'hello' http://localhost:8080 ----> va a devolver 'hello' de regreso

///OTRO EJEMPLO DE STREAM. LEER DE UN ARCHIVO Y ENVIARLO A OTRO ARCHIVO
var fs = require('fs');
var file = fs.createReadStream('readme.md'); //guardamos el contenido del archivo en la variable file, ReadStream creamos un canal de lectura
var newFile = fs.createWriteStream("readme_coypy.md");//creamos un canal de escritura al archivo readme_copy que se guarda en la variable newFile

file.pipe(newFile);//coloco el canal de respuesta que en este caso es newFile como argumento,
				   // el objeto que llama a la funcion tiene que ser un streamRead canal de lectura

// $ node <archivo.js>
/////COMBINAR EL STREAM READ del evento request CON EL STREAM write para un archivo

var fs = require('fs');
var http = require('http');
http.createServer(function(request, response){
	var newFile = fs.createWriteStream('readme_copy.md');
	request.pipe(newFile);
	request.on('end', function(){
		response.end('uploaded!');
	});
}).listen(8080);
//run from the terminal 
// $ node <archivo.js>
// $ curl --upload-file readme.md http://localhost:8080


//////FILE UPLOADING WITH PROGRESS
//cuando se sube un archivo desde la consola se realiza de la siguiente manera
var http = require('http');
var fs= require('fs');
http.createServer(function(request,response){
	var newFile = fs.createWriteStream("readme_copy.md");
	var fileBytes = request.headers['content-length']; //para saber el tama;o del archivo de entrada que viene del request
	var uploadedBytes = 0; //esta variable es para saber cuantos bytes se estan cargando
	request.on('readable', function(){
		var chunk = null;
		while(null !== (chunk = request.read())){
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes)*100;
			response.write("progress:"+ parseInt(progress,10)+"%\n"); //parseInt es para redondear
		}
	});
	request.pipe(newFile);
});
// $ node <archivo.js>
// $ curl --upload-file file.jpg http://localhost:8080
