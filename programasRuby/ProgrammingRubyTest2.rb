#!usr/bin/env ruby

line = gets
#se utiliza la instrucción =~ para comparar un patrón con un string
if line =~ /P(erl|ython) *Language/
	puts "Script Language Mentioned: #{line}"
end
#La parte del string que coincide con el patron puede ser sustituida por otra instrucción de la siguiente manera
line = gets
newline = line.sub(/Perl/, 'Ruby') #Replace FIRST 'Perl' with 'Ruby'
puts "Replace Perl with Ruby: #{line}\n #{newline}"
newerline = newline.gsub(/P(ython|erl)/, 'Ruby') #Replace EVERY 'Python' with 'Ruby'
puts "Replace Perl with Ruby all the time: #{newline}\n #{newerline}"


#-----------------------------------------------------------------------------------
#Bloques

{puts "Hello"}

do
	club.enroll(person)
	person.socialize
end

#Los bloques tambien pueden estar asociados con un la llamada a un método
greet {puts "Hi"}
#si el metodo tiene parametros apareceran antes del bloque"

verbose_greet("Dave", "Loyal customer") {puts "Hi"}

#Un metodo puede invocar un bloque asociado una o mas veces la declaracion yield
def call_block
	puts "Start of method"
	yield
	yield
	puts "End of method"
end
call_block {puts "In the block"}

#Tambien se pueden colocar argumentos dentro de la llamada yield

def who_says_what
	yield("Dave", "Hello")
	yield("Andy", "Goodbay")
end

#Y se debe colocar en el bloque los parametros que recibiran los argumentos entre ||
who_says_what {|person, phrase| puts "#{person} says #{phrase}"}

#Codigo de bloques que son usados para implementar iteraciones, estos son metodos que retornan sucesivos elementos desde una tipo de coleccion

animals = %w (ant bee cat dog ) #create an array
animals.each {|animal| puts animal} #iterate over the contents