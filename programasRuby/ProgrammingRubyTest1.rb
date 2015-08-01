# !usr/bin/env ruby
#programmingRubyTest1

#Arrays y Hashes

#Create an array literal
a = [1, 'cat', 3.14]
puts "the first element is #{a[0]}"

a[2] = nil
puts "the array is now #{a.inspect}" 

#Create arrays of words of a shortcut way with %w
a= ['ant'.'bee', 'cat', 'dog', 'elk']
a[0]
a[3]

a = %w{ ant bee cat dog elk }
a[0]
a[3]


#Create Hashes literal
#Tiene dos objetos por cada entrada, la clave y el valor, estos normalmente estan separados por =>
#The key must be unique 
#se pueden tener hashes donde el valor son arrays, otros hashes y así.
inst_section = {
	'cello' => 'string' #the_key => the_value
	'clarinet' => 'woodwind'
	'drum' =>'percussion'
	'oboe' => 'woodwind'
	'trumpet' => 'brass'
	'violin' => 'string'
	}
#vamos a usar el metodo p es como puts pero muestra los valores como un nil explicitamente
p inst_section['cello']
p inst_section['oboe']
p inst_section['bassoon'] #mostrará un nil explicito en la pantalla
