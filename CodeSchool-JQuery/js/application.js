$(document).ready(function(){
	var lista = $("li");
	console.log(lista);
	$("#destinations");
	$(".promo");
	//------------------descendant-------------
	//buscar todos los hijos de destionations
	//destionations es el padre y li son los descendientes
	//descendant selector
	$('#destinations li');

	//como buscar solo los hijos(pero no los hijos de los hijos) de destionations
	//si usamos $('destionations li') traera todos los hijos incluyendos los nietos li
	//para eso usamos el child selector or direct child selector
	$("#destinations > li");
	$("#destinations > li:even");
	//multiples selectors, debemos usar la coma ,
	$(".promo, #france");

	//el primer elemento de la lista desordenada
	$("#destionatios li:first");

	//el ultimo elemento de una lista
	$("#destionations li:last");

	//seleccionar los elementos impares los elementos del objeto comienzan en 0
	$("destionations li:odd");

	//seleccionar los elementos pares
	$("destionations li:even");

	//-------------------traversing---------
	//destionations es la seleccion y find algo es traversal
	//traversal busca mas rapido los elementos del DOM
	$("#destionations").find("li");

	//buscar el primer elemento de una lista de mismos tipos de elementos
	$("li").first();
	$("#destionations").first("li");
	//el ultimo elemento
	$("li").last();
	$("#destionations").last("li");
	$("#destionations li").last();

	//Walking the DOM para buscar elementos que se encuentran en el medio 
	$("li").first();
	$("li").first().next;
	//method changing
	$("li").first().next().prev();
	$("#destionations li").last().prev();

	//Walking up the DOM
	$("li").first();
	$("li").first().parent(); //el padre
	$(".promo").parent();

	//Walking down the DOM
	$("destionations").children("li"); //nos da solo los hijos, sin los hijos de los hijos
	//si usamos $("destionatios").find("li") me traera todos los li hasta los hijos de los hijos


});