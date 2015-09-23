var http = require('http');
var message = "Here's looking at you, kid";
var options = {
	host: 'localhost', port: 8080, path:'/', method: 'POST'
}
var request = http.request(options, function(response){
	response.on('data', function(data){
		console.log(data);
	});
;});
request.write(message); //begins request
request.end(); //finish request

var makeRequest = require('./make_request');
makeRequest("Here's looking at you, kid.");


////// ejemplo de llamar a un modulo con una sola funcion
var highfive = require('./high_five.js');
highfive();

/////OTRO EJEMPLO de llamar a un modulo con una sola funcion
var myRequest = require('./my_request');
myRequest('Hello, this is dog.');


///////////otro ejemplo para llamar a un modulo con multiples funciones
var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');


/////////////////////////////////////////////////////////AGREGAR DEPENDENCIAS AL package.json file
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "connect": "~2.2.1",
    "underscore": "~1.3.3" //colocamos el ~ para buscar the patch-level mas actuales
  }
}
