#!/usr/bin/env ruby
#ramdon_sig.rb

filename = ARGV[0] || (ENV['HOME']+ '/Documentos/programas/random2.txt') 
#la expresion que posee el operador || evalua lo que sea que esta a la izquierda
#si la expresion de la izquierda es verdad, to la expresion tiene ese valor 
#si la expresion de la izquierda es falsa, toda la expresion tiene el valor de la expresion de la 
#derecha. Si falta el argumento es false, y evaluar nil es false cuando se prueba la condición ||
#El elemento ARGV comienza a contar desde 0, tal como un arreglo en Ruby. 
#La variable filename puede ser el primer argumento de este programa, si no hay argumento
# se configurará la variable con parentesis.

#ENV es una variable de ambiente, la cual es una manera de obtener el directorio que pertenece 
#a un usuario especifico. Esta expresión equivale a /home/greisy-sony
quotation_file = File.new(filename, 'r') 
#la expresion File.new() hace que Ruby cree un objeto de tipo archivo externo, esta toma dos argumentos
#el nombre y la manera en la cual quiero usar el archivo. En este caso se quiere leer del archivo
#por lo que se coloca 'r'
file_lines = quotation_file.readlines() #leer las lineas del archivo. file_lines es un Array con cada línea del archivo
quotation_file.close() #cerrar el archivo
sig_file_name = ENV['HOME'] + '/Documentos/programas/test_file.txt'
signature_file = File.new(sig_file_name, 'w') #creamos un objeto de tipo archivo, para escribir sobre este.
#file_lines.each do |f|
	signature_file.puts file_lines
#end
signature_file.puts "-----------coloca un string----"
signature_file.puts file_lines.to_s.split("\n")
quotations = file_lines.to_s.split("\n") #el metodo split devuelve un array 'break at each space'.split(" ") => ["break", "at", "each","space"]
# el metodo split toma un argumento  de breakpoint para romper la cadena dentro de chunks que formaran cada posicion del arreglo

quotations.each do |q|
	puts "#{q}\n"	
end
signature_file.puts "---------------------------"
signature_file.puts quotations.size
random_index = rand(quotations.size) #escogemos un numero al random entre el rango del 0 al tamaño (size) del array =>quotations
signature_file.puts random_index
quotation = quotations[random_index] #guardamos en la variable quotation el contenido del indice generado por la funcion rand
signature_file.puts quotation
signature_file.puts 'Kevin Baird | g.grey2411@gmail.com' #escribimos sobre el archivo a través del objeto con el metodo puts
signature_file.puts "se supone que coloca un numero#{quotation}"
signature_file.puts quotation
signature_file.close #cerramos el archivo.






