(function(){
	var app = angular.module("store",['store-products']);//debemos decirle a store module que depende de store-products module, para eso colocamos los modelos(librerias o conjunto de funciones) dentro del []




	app.controller('StoreController',function(){ //cuando se llame al controlador StoreController se va a llamar a la function anonima
		//seteamos una propiedad para este controlador que se llamara product
		this.products = gems; //para mostrar esta data dentro de nuestro webpage debemos ir al archivo .html
	});
	app.controller('PanelController',function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.review.push(this.review);
			this.review = {}; //clear out the review (object), so the form will reset
		};
	});
})();