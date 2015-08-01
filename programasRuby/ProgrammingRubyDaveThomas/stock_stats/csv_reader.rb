require 'csv'
require_relative 'book_in_stock'

class CsvReader
	def initialize
		@book_in_stock = [] #Tengo una variable de instancia que guarda el estado de un objeto, es unica para cada objeto
	end

	def read_in_csv_data(csv_file_name)
		#en esta linea le estamos diciendo a la biblioteca CVS que abra el archivo con el nombre dado
		#la opción headers:true le dice a la biblioteca que analice la primera línea como el nombre de las columnas
		CSV.foreach(csv_file_name, headers: true) do |row|
			@book_in_stock << BookInStock.new(row['ISBN'], row['Price']) #Esta linea crea objetos de tipo BookInStock y los almacena en el arreglo #dos parametros que recibe el initialize de BookInStock
		end
	end

	def total_value_in_stock
		total = 0.0 #0.0 porque voy a sumar valores flotantes
		@book_in_stock.each{|book| total +=book.price} #Tener en cuenta que cuando uso un bloque debo abstraer de un todo que en este caso es un arreglo cada objeto que se encuentra en cada posicion
		#por eso coloco 'book' que representaria lo que se encuentra en una posición y como es un arreglo de objetos solo debo consultar su price
		total
	end

	def number_of_each_isbn
		#creo un hash inicializado en 0
		counts = Hash.new(0)
		#@book_in_stock.each{|book| counts[book.isbn] += 1}
		for book in @book_in_stock
			#voy llenando las posiciones del hash, con los indices con el nombre: book.isbn y con el valor igual a una suma de las veces que se encuentre ese indice.
			counts[book.isbn] += 1
		end
		counts
	end	
end

file = CsvReader.new
file.read_in_csv_data(ARGV[0])
