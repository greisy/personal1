var http = require('http'); //how we require modules

http.createServer(function(request, response){ //el parametro response es el callback
	response.writeHead(200); //status code in header
	response.write("Hello, this is dog"); //response body
	response.end(); //close the connection
}).listen(8080);
console.log('listening on port 8080');
