=begin
ESTO ES UN COMENTARIO
=end
$ejemplo = "Hola codigo global" #$variable es una variable global que puede ser vista por cualquier objeto

class HolaMundo #Las clases comienzan en mayuscula
	def initialize(name="Mundo")
		@name = name
	end
	def saluda() #los metodos comienzan en minuscula y se separan con el signo _
		#hola_soy_una_variable #las variables se comienzan con minusculas y se separan con el signo _
		#b = "1".to_i #convierte algo en un entero
		#a = "2.55".to_f #convierte algo en flotante
		
		#puts "esto se convirtio en cadena" +(a+b).to_s
		#puts $ejemplo
		variable = @name
		variable.reverse
		puts variable
		variable.reverse! #cuando colocamos signo de exclamacion al final, el método retorna el objeto modificado o lanza excepciones importantes
		puts variable
		puts "hola #{@name.reverse!.capitalize}" #tomo la variable de instancia y la convierto en string, retorno la cadena al revés y con mayúscula 
	end
end
#esto es un comentario de linea
objeto = HolaMundo.new "yerg"
objeto.saluda 
puts objeto.class