var express = require('express');
var app = express();
app.get('/', function(request,response){ //definimos un end point, cuando llegue una peticion de root route que es '/'
	response.sendFile(__dirname + "/index.html");//__dirname escribe el directorio. Aqui lo que hace es enviar sendFile un archivo cuando alguien haga una peticion en la ruta root
});
app.listen(8080);
// $curl http://localhost:8080 ---> 200 OK


///// Construir un end point donde podamos enviar el twitter name, luego call out a twitter que me de los 10 ultimos twits y devolverlos al usuario (cliente)
var request = require('request');
var url = require('url');
var express = require('express');
var app = express();
app.get('/tweets/:username', function(){ //cuando llegue un request a /tweets/username
	var username = req.params.username;
	options = {
		protocol: 'http',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name : username, count: 10}
	}
	var twitterUrl = url.format(options);
	request(twitterUrl).pipe(response); //pipe the request to response
});

// $ node <archivo>.js
// $ curl -s http://localhost:8080/tweets/ellam
// lo que me devuelve es data pero si la queremos ver en formato json instalamos
// $ npm install prettyjson -g
// podemos usar la accion pipe con el modulo que hemos instalado global
// $ curl -s http://localhost:8080/tweets/eallam | prettyjson
// Para colocar el json (data) que me esta escribiendo en la respuesta a una pagina web debo instalar el modulo ejs
// $ npm install --save ejs ---> que me instalara el modelo y agregara su dependencia en package.json
// "dependencies":{
//		"express" : "4.9.6",
//		"ejs" : "1.0.0" 	//parece que esta dependencia busca los templates por defaults en el directorio /home/eric/my_app/views
// }
var request = require('request');
var url = require('url');
var express = require('express');
var app = express();
app.get('/tweets/:username', function(){ //cuando llegue un request a /tweets/username
	var username = req.params.username;
	options = {
		protocol: 'http',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name : username, count: 10}
	}
	var twitterUrl = url.format(options);
	request(url, function(err,res,body){
		var tweets = JSON.parse(body);
		response.locals = {tweets : tweets, name : username};
		response.render('tweets.ejs');
	});
});

// en el archivo tweets.ejs encontrare algo como esto
<h1> Tweets for @<%= name %></h1>
<ul>
	<% tweets.forEach(function(tweet){ %>
		<li><%= tweet.text %></li>
	<% }); %>
</ul>
	


///////////// Crear una ruta que acepte argumentos dinamicos en el URL y responda con el valor de la propiedad del objeto quotes

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name',function(request, response){
  var username = request.params.name;
  response.write(quotes[username]);	
  response.end();
});

app.listen(8080);

////////////// Ahora en vez de escribir la respuesta en el response, se usara un template para mostrar la respuesta
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.locals = {name : req.params.name, quote: quotes[req.params.name]};
  res.render('quote.ejs');
});

app.listen(8080);

///// template ---- quote.ejs
<h2>Quote by <%= name %></h2>

<blockquote>
  <%= quote  %>
</blockquote>


////////////////////////Construir un URL 
// primero hay que completar las URL options las cuales seran enviadas dentro del metodo de formato del modulo URL
// el URL que queremos construir es este http://search.twitter.com/search.json?q=codeschool
var url = require('url');

options = {
  // add URL options here
  protocol : 'http',
  host : 'search.twitter.com',
  pathname : 'search.json',
  query : {q : 'codeschool'}
};

var searchURL = url.format(options); //creamos el url http://search.twitter.com/search.json?q=codeschool
console.log(searchURL);


////// Ahora usaremos el modulo REQUEST para hacer un request y registramos la respuesta (response) en la consola
var req = require('request'); // requeremos el modulo request y lo asignamos a la variable req
req(searchURL,function(error, response, body){ //issue a request to searchURL aqui es como hacer una peticion 
												//al URL que le estamos pasando, cuando se haga el request se 
												//disparara el evento el ejecuta ej callback en donde puedo ver 
												//lo que se trajo error,response y body
	console.log(body);                        
});

//////////Ahora , vamos a crear un servidor de Express, que consulta por el término de búsqueda y luego devuelve el JSON .
var url = require('url');
var request = require('request');
var express = require('express');
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app; // Create server here
app = express();
app.get('/',function(req,resp){
  request(searchURL).pipe(resp); //en la ruta '/' se publica un request a searchURL y su respuesta se escribe en la respuesta de la peticion
});
app.listen(8080);