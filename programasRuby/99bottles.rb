#!/usr/bin/env ruby
# 99 bottles problem in ruby
#Se debe nombrar a los archivos de las clases colocandoles _ entra cada palabra
class Wall #las clases comienzan en mayuscula y si es mas grande se coloca cada palabra en mayuscula HolaComoEstas
	#Instance Variables
	def initialize(num_of_bottles) #es lo que la clase usa para crearse a si misma. Desde afuera llamamos al metodo new pero la clase usa el metodo initialize.
		#el metodo initialize usa el argumento llamado num_of_bottles.
		#el metodo new vesus el metodo initialize es que uno es publico y el otro es privado. Cuando se crea un nuevo Objeto con el metodo new automaticamente llamamos al metodo initialize (private) del mismo objeto. 
		#Es por eso que creamos un metodo initialize cuando creamos una clase.
		@bottles = num_of_bottles #<--- variable de instancia, son llamadas asi porque difieren de una instancia y otra. Por ejemplo si es la class Person this person has a name, an age entre otras caracteristicas cuando
		#creamos una instancia u objeto de la clase esa va a tener un nombre o edad que va a ser diferente a la de otra persona, como sucede en la vida real.  las variables comienzan en minuscula
	end

	#=begin rdoc
	#predicate, ends in a question mark, returns <b>Boolean</b>
	#=end 
	#Predicate Methods	
	def empty?() #el metodo termina en ? lo cual puede estar dentro de un metodo, pero tradicionalmente Ruby nombra a los metodos con una pregunta cuando el metodo retorna true or false. Los metodos que solo retornan Boolean son llamado predicates (predicados)
		#es conveniente colocarle parentesis para que no se confunda con una variable, asi el metodo no use ningun argumento. Asi distinguira entre un metodo y una variable
		@bottles.zero?
	end	
	#Destructive Methods
	def sing_one_verse!()
		#cuando el metodo se define con un signo de exclamación al final tambien se le llama 'bang'
		#A estos metodos se le llama destructive porque cambian el estado del objeto, es decir, la interpretación de algunas acciones de los objetos van a persistir luego de que el metodo haya sido llamado.
		#Por ejemplo el string a si se coloca a.reverse devuelve el string a alreves pero no cambia el valor de la variable, en cambio si se coloca a.reverse! se modificara el valor del string
		puts sing('on the wall, ')+sing("\n")+take_one_down! + sing("
			on the wall.\n\n")
	end
	#Private Methods
	private
	#los metodos que pueden ser accedidos desde afuera son llamados metodos publicos.

	def sing(extra='')
		#Como esta dentro de comillas dobles, la expresion va a ser evaluada antes de que sea escrita por pantalla.
		#la siguiente expresion evaluar primero lo que esta dentro del primer bracket luego evalua el siguiente bracket
		"#{(@bottles > 0 )? @bottles : 'no more'} #{(@bottles ==1 )? 'Bottle': 'Bottles'} of beer" + extra  #debo colocar espacio despues de los dos puntos  ':'
	end	

	#begin rdoc
	#Destructive method named with a bang because it decrements @bottles.
	#Returns a <b>String</b>
	#end

	def take_one_down!()
		@bottles -= 1
		puts 'take_one_down, pass it around,'
	end

end

#Para correr este programa se hara corriendolo en el interprete de Ruby 'irb' 
#Podemos traer contenido externo dentro de la sesion de irb con el comando -r 
#que significa 'require'
#Esto lo hacemos porque no estamos creando ningun objeto de la class Wall dentro de este archivos
#por lo que podemos hacerlo desde el la interfaz del interprete ruby 'irb'
#irb -r <nombre_archivo>.rb
#Para correr el Script no podemos llamar a los metodos privados. Por eso se correra el metodo publico:
# <nombre_obj>.sing_one_verse! until <nombre_obj>.empty?

#Interpolation

#irb(main):001:0> my_var = 'I am the value of my_var' Cuando se usa simples comillas todo el texto simplemente aparece literalmente.
#=> "I am the value of my_var"
#irb(main):002:0> "my_var = my_var" Cuando aparece doble comillas la expresion es evaluada antes de ser insertada dentro del String.
#=> "my_var = my_var" 
#irb(main):003:0> "my_var = #{my_var}" cuando se usa #{} la expresion es evaluada antes de insertarla dentro de un string
#=> "my_var = I am the value of my_var"
#irb(main):004:0> 'my_var = #{my_var}' Cuando se usan simples comillas (single quotation) o se omite #{} todo el texto aparecera literalmente, incluso si el texto es una expresion valida, tal como el nombre de una variable.
#=> "my_var = \#{my_var}"

