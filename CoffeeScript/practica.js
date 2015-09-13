//Coffeescript is a little language that compiles into javascript para que el navegador lo entienda
//c por ejemplo se compila a lenguaje ensamblador para que la computadora lo entienda

Variables Coffee
message = "Ready for some coffeScript?" // no se declara la variable coffeescript lo hara por nosotros
alert(message) //no tiene ;
//Variables en javascript
var message;
message= "Ready for some coffeescript?";
alert(message);

//Funciones en javascript
// Named functions
function coffee(){
	return confirm("Ready for some coffeScript?");
}
// function expressions
var coffee = function(){
	return confirm("Ready for some coffeescript?");
};
// llamar a la funcion coffee();

//Funciones en coffeescript ---- todas las funciones en coffeescript siempre retornan un valor, 
//incluso sino se usa la palabra reservada return, es decir asumir que la ultima instruccion es la que se va a enviar como respuesta
coffee = -> // -> convierte a funcion lo que esta identado
	answer = confirm "Ready for some coffeescript?"
	"Your answer is" + answer
	//OR
	"Your answer is #{answer}" //el lenguaje cf lo convierte de igual forma en codigo javascript

coffee = (message) ->
	answer = confirm message
	"Your answer is #{answer}"
//Llamar a la funcion
// sin parametros
coffee()
//con un parametro
coffee "Yo" //OR
coffee("Yo")
//con dos o mas parametros
coffee("Yo",2)
coffee "Yo",2

//Default parametros
coffee = (message = "Ready for coffeeScript?") ->
	answer = confirm message
	"Your answer is #{answer}"
