////PARA REUTILIZAR ESTA FUNCION SE HACE LO SIGUIENTE
var http = require('http');
var makeRequest = function(message){


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
}
//makeRequest("Here's looking at you, kid.");
module.exports = makeRequest; // y en el app.js

///// OTRO ARCHIVO high_five.js PARA EXPORTAR UNA FUNCION
var highfive = function() {
  console.log("smack!!");
};
modelo.exports =highfive;

///////////////////// EXPORTAR UNA FUNCION my_request.js
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
module.exports = myRequest;



//////////////////EJEMPLO DE MAS DE UNA FUNCION A EXPORTAR
exports.warn = function(message) {
  console.log("Warning: " + message);
};

exports.info = function(message) {
  console.log("Info: " + message);
};

exports.error = function(message) {
  console.log("Error: " + message);
};
