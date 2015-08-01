class BookInStock
	#Este metodo te permite acceder y manipular el estado de un objeto, permitiendo desde el mundo exterior interactuar con el objeto
	#Las facetas de ser visible desde afuera de un objeto se que conoce como sus atributos
	#attr_reader se le conoce como metodo de acceso (de lectura) que retorna el valor de las variables de instancia 
	attr_reader :isbn
	#Para fijar, designar o establecer (set) el valor de un atributo podemos hacerlo a través de el metodo corto attr_accesor
	#este metodo puede cumplir las dos funciones: lectura y escritura
	attr_accessor :price
	#Si solo se quiere acceder a la variable de instancia solo para escritura, que este caso solo seria para modificarlo pero no para ver su valor se usa
	#attr_writer 
	def initialize(	isbn, price)
		#las variables isbn, y price son parametros que almacenaran lo que el metodo new pase como argumento
		#estas variables se evaporaran cuando el metodo initialize retorne porque son variables locales, por eso
		#tenemos 'variables de instancia' que van a guardar el valor de cada objeto, ()
		@isbn = isbn
		@price = Float(price) #lo que se esta haciendo con el metodo Float es convertir el argumento price en un objeto de tipo FLoat, por lo cual el programa lanzará un error si este comando no se cumple
		#solo aceptará integer, float y strings que puedan convertirse en flotantes.
	end

	#Cada vez que llamamos al método puts, éste llama al método to_s así que podemos modificar to_s dentro de la clase 
	#para que cuando se invoque al metodo puts se vea sin ningun problema
	def to_s
		puts "ISBN #{@isbn}, price #{@price}"
		
	end

	#Para acceder a un atributo de un objeto y modificar su valor se puede hacer a traves de un metodo cuyo nombre termine con un signo de igual.
	#def price=(new_price)
	#	@price = new_price
	#end

	#Estos dos métodos de acceso son usados para que el mundo exterior pueda interactuar con el objeto. (atributos)
	#y averiguar cuales son el precio de cada libro y su ISBN
	#def isbn
	#	@isbn
	#end
	#def price
	#	@price
	#end
	#--------------------------------------------------------------------------------------

#fin de la clase
end


#cuando colocamos algo como esto
#b3 = BookInStock.new("isbn3", "5.67")
#si coloco el metodo p
#p b3
#mostrará de que clase es el objeto pasado por parameto, el número identidicador de donde se encuentra en memoria
#y el valor que asumieron los parametros segun los argumentos pasados en el metodo

#si coloco
#puts b3
#Solo mostrará la clase del objeto y el número de identificación en hexadecimal
#puts "-----------------------------------------------------"
#book = BookInStock.new("isbn1", 12.34)
#de esta manera invoco a los atributos del objeto
#puts "ISBN = #{book.isbn}"
#puts "Price = #{book.price}"
#en la instruccion de abajo estamos invocando a un metodo colocando book.(price =) lo que se encuentra entre parentesis es la invocación al método
#luego cuando se coloca book.price seria la llamada al valor de la variable de instancia @price pero a traves del metodo de lectura attr_reader
#book.price= book.price * 0.75
#puts "New price = #{book.price}"


