//Append a new DOM node
$(document).ready(function(){
	// create a <p> node with the price
	var price = $('<p>From $399.99</p>');//crea un nodo pero no lo agrega al DOM

	//Maneras de agregar un node
	// .append(element) agrega el elemento como el ultimo hijo del elemento referencia
	$(".vacation").append(price);
	price.appendTo($('.vacation'));
	$("buttom").remove();

	// .after(element) agrega el elemento en el mismo nivel del elemento referencia
	$(".vacation").after(price);
	price.insertAfter($('.vacation'));

	// .before(element) //agrega el elemento antes del elemento de referencia (creo que es en el mismo nivel)
	$(".vacation").before(price);
	price.insertBefore($('.vacation'));

	// .prepend(element) agrega el elemento (node) como primer hijo del elemento referencia
	$(".vacation").prepend(price);
	price.prependTo($('.vacation'));

	//Acting on interaction 
	$('button').on('click',function(){ //on es un metodo de jquery que escucha si ocurre algun evento lanza una funcion .on(<event>,<even handler>)
		var price = $('<p>From $399.99</p>');
		price.appendTo($('.vacation'));
		$("buttom").remove();//remueve todos los botones porque el selector reune todos los buttons
	});

	//Refactor using traversing
	// usamos THIS nos estamos refiriendo al item que disparo el evento, por ejemplo el boton que presionamos
	$('button').on('click',function(){ //on es un metodo de jquery que escucha si ocurre algun evento lanza una funcion .on(<event>,<even handler>)
		var price = $('<p>From $399.99</p>');
		//$('this').after(price);//agrega el precio como hermano del elemento que lo disparo la funcion, o sea button
		$(this).closest('vacation').append(price); //busca a traves del DOM para buscar el ancestro con la clase vacation
		$(this).remove();//remueve solo el que hizo click al boton
	});
	$(document).ready(function() {
	  $('.tour').on('click', function() {
	    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
	    $(this).closest('.tour').append(message);
	  	$(this).find('button').remove();
	  });
	});


	//Traversing and filtering
	//jQuery Object Methods
	.data(<name>) //fetch the value of the name data-price
	.data(<name>,<value>) //set the value
	discount = $(this).closest('.tour').data('discount');

	$('button').on('click',function(){
		var vacation = $(this).closest('.vacation');
		var amount = vacation.data('price');
		var price= $('<p>From $'+amount+'</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();
	});

	//Tecnica se llama event delegation: solo se referencia a button si esta dentro de la clase tal en este caso .vacation
	//seleccionar un boton especifico, de los elementos que esten contenidos en .vacation
	$('.vacation').on('click','button',function(){ //en el segundo parametro especificamos que elemento queremos escuchar

	});
	
	$('#filters').on('click','.onsale-filter',function(){
		//find all vacations that are on-sale, para seleccionar todos los
		// elementos que pertenecen a la misma clase y que ademas pertecen a otra clase
		//$('vacation').filter('.onsale');

		//add a class to these vacations
		// .toggleClass() remove and add class
		// .addClass(<class>)
		// .removeClass(<class>)
		//removemos la clase ya que si no se borra todas quedaran como marcadas y no se vera el efecto
		$('.highlighted').removeClass('highlighted');
		$('vacation').filter('.onsale').addClass('highlighted');
	});	
	$('filters').on('click','.expiring-filter',function(){
		$('vacation').filter('.expiring').addClass('highlighted');
	});
	//ejercicios
	$(document).ready(function() {
	  $('button').on('click', function() {
	    var discount = $(this).closest('.tour').data('discount');
	    var message = $('<span>Call 1-555-jquery-air for a $'+ discount+'discount.</span>');
	    $(this).closest('.tour').append(message);
	    $(this).remove();
	  });
	});

	$(document).ready(function() {
	  $('.tour').on('click','button',function(){
	    var tour = $(this).closest('.tour');
	    var discount = tour.data('discount');
	    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
	    tour.append(message);
	    $(this).remove();
	  });
	});
	
});
	$(document).ready(function() {
	  $('#filters').on('click', '.on-sale', function() {
	    $('.tour').filter('.on-sale').addClass('highlight');
	  });
	});