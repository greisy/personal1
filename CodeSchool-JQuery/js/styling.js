//allow people to click on the <li> element
$(document).ready(function(){
	$('#vacations').on('click','.vacation',function(){ //listen for click event on the vacation class
		//GET THE CSS
		.css(<attr>)
		// SET THE CSS
		.css(<attr>,<value>)
		$(this).css('background-color','#CCC');
		// send a javascript object using the Javascript object notation
		.css(<object>)
		$(this).css({
			'background-color':'#CCC',
			'border-color':'yellow'
		});


		$(this).find('.price').css('display','block');
		//Sin embargo jquery brinda dos metodos para hacer esto
		.show()
		$(this).find('.price').show();
		.hide()
		$(this).find('.price').hide();


		//podemos en vez de colocar las propiedades y valores CSS aqui
		//colocarlas dentro de una clase en el css
		//$(this).addClass('highlighted');
		$(this).toggleClass('highlighted');
		// Adds the class if $(this) doesn't have it,removes the class if $(this) already has it


	});

});

		//exercises