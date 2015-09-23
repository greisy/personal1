jQuery(document).ready(function(){
	alert($('button').length);
	alert($('img').length);
	$('.confirmation').on('click','button',function(){
		showTicket();
		//$(this).closest('confirmation').find('tickets').slideDown();
		//METODOS para aparecer y desaparecer elementos
		// .slideDown()
		// .slideUp() 
		// .slideToggle() show and hide

	});

	$('.confirmation').on('click','button',function(){
		showTicket();
	});

	function showTicket(){
		$(this).closest('confirmation').find('tickets').slideDown();
	}
	$('.confirmation').on('click','button',showTicket); //no colocamos los parentesis porque si los colocamos llamamos a la funcion 
	//inmediatamente en cambio solo se va a hacer cuando se dispare el evento
	$('.confirmation').on('mouseenter','h3',showTicket);
	//Deciding on an Event
	// click				//focusin			//mousedown			//mousemove
	// dblclick				//focusout			//mouseup			//mouseout
	// mouseover			//mouseleave		//mouseenter

	// KEYBOARD EVENTS				// FORM EVENTS
	// keydown						// blur	
	// keypress						// focus
	// keyup						// submit
									// select
									// change				
	$('.vacation').on('keyup','.quantity',function(){
		// this referencia al o los elementos quantity

		// get the price for this vacation
		var price = +$(this).closest('.vacation').data('price'); // el + convert the string to a number
		// get the quantity entered
		// .val(<new value>)
		// .val()
		var quantity = +$(this).val();

		// set the total to price * quantity
		$('#total').text(price*quantity);

	});

	$('.vacation').on('click','.expand',function(event){
		// cuando el evento click ocurre sobre expand
		// se levanta un evento bubble up que se posiciona 
		// en cada uno de los nodos padres de la etiqueta a
		// hasta eventualmente llegar a document esto pasa por el href="#"
		// necesitamos la funcion preventDefault() para evitar el comportamiento del browser
		// event.stopPropagation();
		event.preventDefault();
		// find the comments ul
		$(this).closest('.vacation')
			   .find('.comments')
			   .fadeToggle();
		// fadeIn() //fadeOut()	//fadeToggle()
	});



});

	//ejercicios
	$(document).ready(function() {
	  $('#tour').on('click', 'button', function() { 
	    $('.photos').slideToggle();
	  });
	  // add a new event handler,
	  //Write an event handler that watches for 
	  //mouseenter on any li elements within our .photos elements and 
	  //runs an empty function. We'll implement the function later on.

	  $('photos').on('mouseenter','li',function(){
	  	$(this).find('span').slideToggle();
	  });
	});

	//ejercicios
	$(document).ready(function() {
	  $('#nights').on('keyup', function() {
	    $('#nights-count').text($(this).val());
	  });
	});
	$(document).ready(function() {
	  $('#nights').on('keyup', function() {
	    $('#nights-count').text($(this).val());
	    var nights = +$(this).val();
	    var price = +$(this).closest('.tour').data('daily-price');
	    // (this).closest(tour) busca desde el elemento this a sus ancestros que tengan una clase tour
	    $('#total').text(nights*price);
	  });
	});

	$(document).ready(function() {
	  $('#nights').on('keyup', function() {
	    var nights = +$(this).val();
	    var dailyPrice = +$(this).closest(".tour").data("daily-price");
	    $('#total').text(nights * dailyPrice);
	    $('#nights-count').text($(this).val());
	  });
	  // add another event handler
	  $('#nights').on('focus',function(){
	  	$(this).val(7);
	  });
	});