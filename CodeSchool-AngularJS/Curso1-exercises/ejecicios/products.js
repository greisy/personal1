(function(){
	var app = angular.module('store-products',[]);



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
})();