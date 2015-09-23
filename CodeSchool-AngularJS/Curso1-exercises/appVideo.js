(function(){
	var app = angular.module('store',[]);
	//los controllers esta adjunto o fijado a app (al modulo)
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

	// los directives personalizables tambien estan adjuntos a app
	// Element Directive
	//<product-title></product-title>
	app.directive('productTitle',function(){
		return {
			restrict: 'E', // aqui especificamos el tipo de directive E es de element
			templateUrl: 'product-title.html'
		};
	});
	//Si queremos usar un Attribute Directive en vez de un Element Directive se hace de la siguiente forma
	//<h3 product-title> </h3>
	//<h3> <product-title> </h3>
	app.directive("productTitle",function(){
		return{
			restrict: 'A', // A es de Atribute
			templateUrl: 'product-title.html'
		};
	});
	app.directive("product-panels",function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};

			},
			controllerAs: 'panels'
		};
	});
	//colocamos la variable(objeto literal) dentro app.js
	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'algo aqui',
		images: [
			{
				full: 'dodecahedron-01-full.jpg',
				thumb: 'dodecahedron-01-thumb.jpg'
			},
			{
				...
			}

		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "jose@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}
		]
		canPurchase: false,
		soldOut: true
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "algo aqui mas",
		canPurchase: false
	}]
	
});
