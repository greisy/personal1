#!/usr/bin/env ruby
#HOLA ESTOY MODIFICANDO EL ARCHIVO PARA VER SI SE REFLEJA EN LA RESPUESTA DEL COMANDO 'GIT STATUS'
class MegaAnfitrion #parece que la clase debe comenzar con mayuscula
	attr_accessor :nombres

	#Crear el objeto
	def initialize(nombres ="Mundo")
		@nombres = nombres
	end

	#Decirle hola a todos
	def say_hi_to_everyone
		if @nombres.nil? #la variable no contiene ninguna información
			puts "..."
		elsif @nombres.respond_to?("each")
		# @nombres es una lista de algun tipo, ¡así que podemos iterar!
			@nombres.each do |nombre|
				puts "Hola #{nombre}"
			end
		else
			puts "Hola #{@nombres}"
		end
	end

	#Say bye to everyone
	def say_bye_to_everyone
		if @nombres.nil? 
			puts "..."
		elsif @nombres.respond_to?("join")
			#juntas los elementos de la lista, usando la coma como separador
			puts "Bye #{@nombres.join(",  ")}. Come back soon"		
		else
			puts "Bye #{@nombres}. Come back soon"
		end
		
	end
end
if __FILE__ == $0 #__FILE__ es una variable que contiene el nombre del archivo que se esta ejecutando en ese momento. $0 es el nombre del archivo usado para iniciar el programa. la condicion pregunta "si este es el archivo principal" el archivo esta siendo usado como un ejecutable por lo que ejecuta ese codigo -->
	
	ma = MegaAnfitrion.new
	ma.say_hi_to_everyone
	puts "join"
	ma.say_bye_to_everyone

	#cambiar el nombre a "Diego"
	ma.nombres ="Diego"
	ma.say_hi_to_everyone
	ma.say_bye_to_everyone

	ma.nombres = ["Jose", "Graciela", "Grey", "Pepe"]
	ma.say_hi_to_everyone
	ma.say_bye_to_everyone

	ma.nombres= nil
	ma.say_hi_to_everyone
	ma.say_bye_to_everyone
end
