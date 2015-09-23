var express = require('express');// coloco las funcionalidades del framework o module express en una variable, a traves de esta podemos crear un servidor que responda a las peticiones de los usuarios
var mongoose = require('mongoose');//almacenamos las funcionalidades de mongoose dentro de una variable 
var bodyParser = require('body-parser');//guardo en bodyParser los metodos expuestos en la libreria bodyParser

var app = express();//crear un servidor, aqui lo que hacemos es crear un objeto

//conectarme a la BD
mongoose.connect("mongodb://localhost/primera_pagina"); //url es mongodb://localhost esto nos conecta a mongodb como gestor 

//decirle a express que los datos que vengan del requesta van a ser parceados
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

										 //de BD y el localhost hace referencia a donde se encuentra la BD, despues colocamos el nombre de la BD 'primera_pagina'
// definir el esquema de nuestros productos
// que basicamente es como definir la tabla 
var productSchema = {
	title: String,
	description: String,
	imageUrl: String,
	pricing: Number
};
//Ahora que tenemos un esquema podemos crear los modelos
var Product = mongoose.model("Product", productSchema);//Product es el grupo de registros que se van a guardar en mongodb

app.set("view engine", "jade");// aqui le decimos que el motor de render va a ser JADE

// servir los assets, ya que no tenemos XAMPP que servia los archivos, las paginas web, las imagenes.. 
app.use(express.static("public"));//usamos una carpeta estatica que es donde vamos a guardar todo aquello
								  // que no se vaya a mover y que utilizamos como recurso para construir nuestra pagina
								  //definimos una carpeta publica, por lo que se puede acceder a los archivos utilizando 
								  // urls relativas a la carpeta public o al home app.js	

// aceptamos una peticion por el metodo get a la ruta root
app.get("/",function(solicitud,respuesta){ // accedo a los metodos que me dio el objeto express.
	//respuesta.send(":3");// cuando mando una respuesta con el metodo send estoy enviando informacion pero no estoy diciendo que termine de enviar informacion
	// el comportamiento de express es que send tambien envia y termina la peticion pero en condiciones normales debo agregar el end
	//respuesta.end("Hola mundo");// si no coloco una respuesta, el navegar se quedara esperando una respuesta, 
	
	respuesta.render("index");//no colocamos la extension porque colocamos que el engine era jade
	/*var data = {
		title: "Mi primer super producto",
		description: "Una mega super hiper compra",
		imageUrl:"data.png",
		pricing:10
	};	
	var product = new Product(data);
	product.save(function(error){
		console.log(product);
	});*/

	// cuando coloco el metodo END le decimos al navegador que ya termine de enviarte informacion ahora si puedes mostrarle al usuario la pagina 
	// la solicitud trae informacion por ejemplo, que parametros mando el usuario,
	// que encabezados traia la peticion, de que navegador viene
	// la respuesta es lo que vamos a responder una vez se haya procesado su peticion
	// puede ser responder con una pagina Web, con un string 

});
app.listen(8080);

///// Recibir los recursos del formulario de productos
app.post('/menu',function(request,response){
	//console.log(request);
	//console.log(request.bodyParser);
	if(request.body.password == 123456){
		var data = {
		title: request.body.title, // las claves title,description,pricing son los nombres colocados en los names de los input del formulario
		description: request.body.description,
		imageUrl:"data.png",
		pricing: request.body.pricing
		};	
		var product = new Product(data);
		product.save(function(error){
			console.log("------>>"+product);
			response.render('index');
		});
	}else{
		response.render('menu/new');
	}
});

//////////////////////////////Definir la ruta donde se van a crear los productos
app.get("/menu/new",function(request,response){
	response.render("menu/new");
});




// HTTP es el protocolo en el que se comunica internet y tiene varios metodos
	// Metodos
		//GET
		//POST
// ejecutamos el archivo $ node app.js
// este archivo lo que hace es que espera de una peticion por lo que necesitamos ir al brownser y hacer la peticion
// http://localhost:808 //enviamos una peticion con el metodo get
// Cada vez que guarde debo correr o ejecutar el archivo