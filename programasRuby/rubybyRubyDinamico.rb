=begin
	----MENSAJES---	
	mensajes en Ruby 
	mensaje = "length"
	cadena = "12345"
	cadena.send mensaje	
=end





puts "----------------------------------------------Bloques----------------------------------"

class UnaClase
	def un_metodo_con_bloque
		variable = 3
		puts "hago algo antes"
		yield variable #El código que se “pasa” puede recibir variables del método. Tal es el ejemplo de yield variable, lo que hace es que cuando
		#encuentra a la palabra reservada yield sustituye esa variable con la variable que se esta pasando en el bloque
		puts "fin"
	end

end

a = UnaClase.new
a.un_metodo_con_bloque{ |x| puts  "haciendo algo con #{x}"} #pasamos un bloque al metodo para modificar su comportamiento

#begin 
puts "-----------------------------------Reescritura o redefinicion de una clase o un metodo-----------------------"
#
class OtraClase
	def mi_metodo
		return "cero"
	end
	def un_metodo
		return "uno"
	end
end

un_objeto = OtraClase.new
puts un_objeto.mi_metodo
puts un_objeto.un_metodo


#Aqui se redefine la clase OtraClase
class OtraClase
	def un_metodo #se reescribe el mismo metodo modificando su valor
		return "dos" #Ruby toma como definición actual la última definición leída en el tiempo
	end

	def otro_metodo #se agregan nuevos metodos a la clase OtraClase
		return "tres"
	end
end

puts un_objeto.mi_metodo
puts un_objeto.un_metodo
puts un_objeto.otro_metodo
#end

puts "----------------------------------------------Alias y reescritura para agregarle comportamiento------------------------"
class MiClase
	def metodo
		puts "se llamo a mi metodo"
	end
end

a = MiClase.new
a.metodo

class MiClase
	alias viejo_metodo metodo #renombro al metodo como viejo_metodo

	def metodo #se escribe el nuevo comportamiento
		puts "hago otra cosa antes"
		viejo_metodo #se llama al metodo anterior que se llamaba metodo
		puts "hago otra cosa despues"
	end
end
a.metodo



puts "----------------------------------------------Method method_missing----------------------------------------------------------"
class OtraNuevaClase
	def mi_metodo
		puts "cero"		
	end
	def un_metodo
		puts "uno"
	end
#Cuando se envia un mensaje a un objeto, el objeto ejecuta el primer método 
#que encuentra en su "method lookup path" con el mismo nombre del mensaje. Sin embargo,
#si este falla en encontrar tal método, se levanta la excepcion "NoMethodError", a menos que
#se haya provisto al objeto con un metodo llamado "method_missing".
#el metodo method_missing(m, *args, &block) el primer parametro es el simbolo de
#no existe metodo, el segun parametro es un array de los argumentos que fueron pasados
#en la llamada original y el último parametro es cualquier bloque pasado al metodo original
	def method_missing(m, *args, &block)
		puts "There's no method called #{m} here -- please try again"
		puts args.respond_to?("each") #se debe colocar comillas dentro del argumento
			args.each do |x|
				puts "Argumento #{x}"
			end
		
	end
end

un_objeto = OtraNuevaClase.new
un_objeto.mi_metodo
un_objeto.un_metodo
un_objeto.otro_metodo("hola", "chao")
puts "------------------------Metodo SIngleton----------------------------------------"

class Perro
	def ladrar
		puts "guau"
	end
end

a = Perro.new
b = Perro.new

a.ladrar
b.ladrar

def a.ladrar
	puts "guaaaaaaaauuuuuuuuuu"
end

a.ladrar
b.ladrar #a pesar que a y b son instancias de la misma clase y cada objeto pasa el mismo mensaje
#a la clase. No obstante, a pesar de que responden al mismo metodo cada instancia actua diferente a pesar de que heredan los mismos metodos
#solo que cada objeto puede alterar los metodos que tiene asociados sin afectar a los otros objetos.
#esto se ve en que a modifica el método ladrar pero que se encuentra asociado a su objeto como se ve en el ejemplo a.ladrar 
#el objeto a accede a su metodo asociado y lo modifica sin que altere el metodo original ya que se ve que b.ladrar sigue mostrando el mismo mensaje.


puts "----------------------------------------------------------------Evaluación de código---------------------------------"

a = 1 
puts a
b = "a = 2"
puts b