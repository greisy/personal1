#!/usr/bin/env ruby
class MegaAnfitrion
	attr_accessor :nombres

	#crear el objeto
	def initialize(nombres= "Mundo")
		@nombres = nombres
	end

	#decirle hola a todos
	def decir_hola
		if @nombres.nil?
			puts "..."
		elsif @nombres.respond_to?("each")
			# @nombres es una lista de algún tipo
			@nombres.each do |nombre|
				puts "Hola #{nombre}"
			end
		else #@nombre es un string 
			puts "Hola #{@nombres}"
		end
	end

	#decirle adios a todos
	def decir_adios
		if @nombres.nil?
			puts "..."
		elsif @nombres.respond_to?("join")
			puts "Adios #{@nombres.join(", ")}. Vuelva pronto"
		else
			puts "Adios #{@nombres}"
		end
	end
end

if __FILE__ == $0
	ma = MegaAnfitrion.new
	ma.decir_hola
	ma.decir_adios

	ma.nombres = "Diego"
	ma.decir_hola
	ma.decir_adios

	#cambiar el nombre a un vector
	ma.nombres = ["Alberto", "Beatriz", "Carlos", "David"]
	ma.decir_hola
	ma.decir_adios

	#cambiar a nil
	ma.nombres = nil
	ma.decir_hola
	ma.decir_adios
end			