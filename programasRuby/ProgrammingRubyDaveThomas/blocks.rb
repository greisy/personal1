some_array.each {|value| puts value*3} 

sum = 0
other_array.each do |value|
	sum+=value
	puts value/sum
end

#Si hay una variable dentro del bloque con el mismo nombre a la de una variable fuera del bloque, las dos son la misma
sum =0
[1,2,3,4].each do |value|
	square = value*value
	sum +=square
end


#Los parametros de un bloque son SIEMPRE locales al bloque no afecta a las variables que tienen el mismo nombre (que el parametro)
# y que se encuentra al alcance de este bloque
#En este ejemplo, la variable value que se encuentra fuera del bloque tiene el mismo nombre que el parametro del bloque siguiente, sin embargo,
#si seguimos la regla los parametro SIEMPRE seran locales al bloque, cuando se dice que son locales quiere decir que moriran luego que termine
#de ejecutarse el bloque
value = "same shape"
[1,2].each {|value| puts value}
puts value
#1
#2
#same shape


#Se pueden definir variables locales que no se encuentran dentro de las barras, es decir que no son parametros del bloque sino variables 
#auxiliares al bloque pero que no obstante tienen el mismo nombre que alguna variable fuera del bloque pero no se quiere confundirlar 
square= "some shape"
sum = 0 #se declara afuera porque, si la declaro dentro morira luego de que se ejecute el bloque, y me interesa conocer su valor desde afuera del bloque
[1,2,3,4].each do |value; square| #luego del ; se pueden declarar variables locales al bloque, por lo que solo funcionaran dentro 
	square =value*value 			#de este mas no afectará el valor de las variables que tienen el mismo nombre fuera.
	sum += square
end
puts sum
puts square

#----------------------------------Iterators------------------------
def fib_up_to(max)
	i1,i2 =1, 1 #asigno a dos variables dos valores (NO ES UN NUMERO REAL) un valor pertenece a i1 y otro a i2
	while i1 <= max #repetire la sentencia que se encuentre dentro hasta que 'i1' sea mayor a 'max'
	yield i1 #dentro de un metodo, el block puede ser invocado usando la sentencia yield, cada vez que salga la sentencia yield se reemplazará con el bloque,
	#en esta instancia la variable f recibe el valor pasado a yield, en este caso i1 y así el bloque imprimirá sucesivas miembros de la serie Fibonacci
	i1,i2 = i2, i1+i2 #i1 se le asigna i2 y a i2 se le asigna la suma de i1+i2, por lo que siempre i1 que es el que esta como condición del iterador while se incrementará
	end 	
end
fib_up_to(1000) {|f| print f, " "} #podemos invocar un metodo con sus parametros para después colocar el bloque
puts

#Un bloque también puede retornar un valor al metodo ---------------------EACH------------------------------
class Array #Esto es porque estoy creando un objeto y Ruby lo reconocerá como Array entonces va a ver dentro de los metodos que se encuentren dentro de éste
	def find
		each do |value| #no tengo que colocar el array que debo recorrer porque la clase es un Array
			return value if yield(value) #retornar el value actual si se cumple la condición de que el bloque que se encuentra como parametro del metodo find y cuyo 'v' es sustituido por 'value' cumpla la condicion de v*v > 30
		end
		nil #si no hay elementos que coincidan con la condición el metodo retornará nil
	end
end

[1,3,5,7,9].find {|v| v*v > 30} # => 7

#-----------------------------------------------COLLECT------------------------------------------------
["H", "A", "L"].collect {|x| x.succ } #el método succ incrementa el valor de un string
# => ["I", "B", "M"]


#También se pueden usar iteradores en Files
f = File.open("testfile")
f.each do |line|
	puts "The line is:#{line}"
end
f.close

#Y conocer el numero de veces que entro en un bloque, usando el método with_index
f= File.open("testfile")
f.each.with_index do |line, index| #(f).each su parametro en block es line porque es el item del "array f", y (f.each).with_index es la cuenta de cada linea del archivo asi que su parametro es el index o la cuenta en ese momento
	puts "Line #{index} is: #{line}"
end
f.close


#--------------------------------------------------INJECT--------------------------------
#La primera vez que el bloque asociado es llamado, sum es fijado como el primer parametro de inject y element es fijado con el valor del primer elemento de la colección
#la segunda y seguidas llamas al bloque, sum es alterado al valor que ha sido retornado por el bloque en la llamada previa. El valor final retornado por el metodo
#inject es el valor retornado por el bloque la última vez que fue llamado.
[1,3,5,7].inject(0) {|sum, element| sum+element} # => 16
#La primera vez sum = 1 y element =1
#la segunda vez sum será alterado con el valor que ha sido retornado en la llamaa anterior sum=1+(element=3) =4
#la tercera vez sum =4 y element=5 (sum=4+(element=5))=9
#la cuarta vez sum =9 y element =7 sum=9+(element=7) =16
[1,3,5,7].inject(1) {|product, element| product*element} # => 105 

#Si inject es llamado sin parametros, usa el primer elemento de la colección como el valor inicial y comienza la iteración con el segundo valor
[1,3,5,7].inject {|sum, element| sum+elemet} # => 16
[1,3,5,7].inject {|product, element| product*element} # => 105
#primera vez product =1
#segunda vez product = 1 *element=3 =3
#tercera vez product =3 * element=5 = 15

#puedes darle el nombre del metodo al metodo inject para que afecte a los miembros de la coleccion
[1,3,5,7].inject(:+) #:+ es el simbolo que corresponde al método +
[1,3,5,7].inject(:*)


