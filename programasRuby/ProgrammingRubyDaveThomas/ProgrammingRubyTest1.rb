# !usr/bin/env ruby
#programmingRubyTest1

#------------------------------------------ARRAY------------------------
#Create an array literal es una lista de objetos entre corchetes
a = [1, 'cat', 3.14]
a.class #=>Array
a.length #=> 3
puts "the first element is #{a[0]}"

a[2] = nil
puts "the array is now #{a.inspect}" 

#Create arrays of words of a shortcut way with %w
a= ['ant','bee', 'cat', 'dog', 'elk']
a[0]
a[3]

a = %w{ ant bee cat dog elk }
a[0]
a[3]

b = Array.new
b.class #=>Array
b.length #=> 0
b[0] = "second"
b[1] = "array"
b #=> ["second", "array"]

a = [1,3,5,7,9]
a[-1] #=>9
a[-2] #=>7
a[-99] #=> nil

#Index arrays con un par de números
a[1,3]
a[3,1]
a[-3,2]

#Index usando rangos
a[1..3] #=> [3,5,7]
a[1...3] #=>[3,7]
a[3..3] #=> [7]
a[-3..-1] #=>[5,7,9]

#el operador []= permite fijar elementos en el array
a[1] = 'bat'
a[-3] = 'cat'
a[3] = [9,8] #agregará al array un subarray en esa posición con el valor [9,8]
a[6] = 99 #en este caso cuando no exista un valor entre la conexion a[4] con a[6] se creará un elemento nil

#si el index tiene dos números (a start and length) o un rango
a= [1,3,5,7,9]
#inserta en la posición de start y comete las posiciones siguientes.
a[2,2]= 'cat' #=> [1,3,'cat',9] 
a[2,0] ='dog' #=>[1,3,"dog","cat",9] #comienza en la posicion dos y no se come ningun elemento
a[1,1] = [9,8,7] #[1,9,8,7,"dog","cat",9]#si del lado derecho se tiene un array, sus eleementos son usados en el reemplazo
a[0..3] = [] #=>["dog","cat",9] 
#si el length es cero, el lado derecho es insertado dentro del array antes de que comience la posición, ningun elemento es removido

#push and pop (PILA)
stack = []
stack.push "red" #=> ['red','green','blue']
stack.push "green"
stack.push "blue"
stack
stack.pop #=>blue
stack.pop #=>green
stack.pop #=>red

#unshift and shift (COLA)
queue = []
queue.push "red" #=> ['red','blue']
queue.push "blue"
queue.shift #=> red 
queue.shift #=>blue

#Retorna el primer y ultimo elementos mas no remueve ningun elemento del array
array = [1,2,3,4,5,6,7]
array.first(4) #=>[1,2,3,4]
array.last(4) #=> [4,5,6,7]

#------------------------------------------------HASH------------------------------
h ={'dog'=>'canine', 'cat'=>'feline', 'donkey'=>'asinine'}
h.length #retorna el tamaño del hash, es decir, la cantidad de objetos dentro del hash
h['dog'] 
h['cow'] = 'bovine' #asigna un nuevo objeto al hash, se coloca al final del hash al igual que el array
h[12] = 'dodecine' #asigna un nuevo objeto al hash
h['cat'] = 99 #reemplaza feline por 99

#Desde Ruby 1.9 hay un nuevo atajo para cuando se quiere usar symbols
h ={:dog =>'canine', :cat =>feline, :donkey => 'asinine'}
#de esta manera:
h = {dog: 'canine', cat: 'feline', donkey: 'asinine'}


#Create Hashes literal
#Tiene dos objetos por cada entrada, la clave y el valor, estos normalmente estan separados por =>
#The key must be unique 
#se pueden tener hashes donde el valor son arrays, otros hashes y así.
inst_section = {
	'cello' => 'string', #the_key => the_value
	'clarinet' => 'woodwind',
	'drum' =>'percussion',
	'oboe' => 'woodwind',
	'trumpet' => 'brass',
	'violin' => 'string'
	}
#
#vamos a usar el metodo p éste es como el método puts pero muestra los valores como un nil explicitamente
p inst_section['cello']
p inst_section['oboe']
p inst_section['bassoon'] #Cuando no existe el index en el hash retornará un nil. nil significa false cuando se usa dentro de un condicional

#Vamos a crear un Hash que estará inicianalizado en 0
#El valor por defecto es cero

histogram = Hash.new(0) # lo que yo coloque como parametro será el valor por defecto
histogram['ruby'] # => 0 //retorna 0 porque a pesar de que no existe el indice 'ruby' el valor que mostrará de este indice(que ahora existe) es 0
histogram['ruby'] = histogram['ruby']+1
puts histogram['ruby']

#-------------------------------------------------------SYMBOLS-------------------
#Symbols son nombre de constantes que no tienes que pre declarar y te garantizarán que serán únicos. No hay necesidad de 
#asignar algún clase de valor a un simbolo, ruby garantizará que siempre tendrá el mismo valor en cualquier parte del programa
def simbol(direction)
	puts "El #{direction} esta ubicado en la posicion 1" if direction == :north
	puts "El #{direction} esta ubicado en la posicion 2" if direction == :south
	puts "El #{direction} esta ubicado en la posicion 3" if direction == :west #oeste
	puts "El #{direction} esta ubicado en la posicion 4" if direction == :east #este
end
#SE PUEDEN CREAR SIMBOLOS A TRAVÉS HASHES, DE ESTA MANERA O
#directions = {
#	:north => 'norte',
#	:south => 'sur',
#	:west => 'oeste',
#	:east => 'este',
#}
#DE ESTA OTRA
#if the keys are symbols you can use the syntax 'name: value' to create a hash
directions = {
	north: 'norte',
	south: 'sur',
	west: 'oeste',
	east: 'este'
}
simbol('norte')

#----------------------------------------------------------------PATTERNS---------------------
#EXPRESIONES REGULARES- REGULAR EXPRESSION es una simple manera de especificar un pattern o patron de caracteres para que coincida con un string 

#En ruby para crear un pattern se debe escribir este patrón entre el caracter slash /parttern/
/Perl|Python/ #este patron consiste en las dos cosas que queremos coincidir con el string separadas por el caracter tubo |
#el caracter | significa incluso la cosa del lado derecho o en el lado izquierdo, en este caso incluso Perl o Python 
#Tambien se puede escribir este patron de la siguiente manera 
/P(erl|ython)/

#Tambien en un patron puedes especificar repeticiones, como se muestra en el siguiente ejemplo
/ab+c/ #coincide con un string que contenga un 'a' seguido por un o mas 'b', seguido de una 'c'
/ab*c/ #se crea una expresion regular que coincide con un string que contenga un 'a', cero o mas 'b' y un 'c'

#Tambien se puede crear un patron utilizando grupo o clases de caracteres 
/\s/ #este coincide con los espacios en blanco (espacio, tabulador, newline y así sucesivamente)
/\d/ #esta expresion regular coincide con cualquier digito, 
/\w/ #coincidira con cualquier caracter que pueda aparecer en una tipica palabra
/Perl.*Python/ #Perl, cero o mas caracteres, seguido de Perl
/Perl Python/ #Perl espacio Python
/Perl *Python/ #Perl, espacio cero o mas veces, seguido de Python 
/Perl +Python/ #Perl, espacio una o mas veces, seguido de Python
/Perl\s+Python/ #Perl, espacio en blanco una o mas veces, seguido de Python
/Ruby (Perl|Python)/ #Ruby, espacio en blanco seguido de Perl o Python 

#Para comparar el patron con los strings debemos usar el comparador =~ 