#calcular el numero de veces que aparece una palabra en un texto
#El problema se dividira en dos partes.

#El primero daremos un texto como string, y se debe retornar una lista de palabras.

def words_from_string(string)
	string.downcase.scan(/[\w']+/) #Return a downcase version of a string, scan returns an array of substrings that match a given pattern
end

#counts[next_word] +=1
#if counts.has_key?(next_word)
	#counts[next_word] +=1
#else
	#counts[next_word] = 1
#end

def count_frecuency(word_list)
	counts = Hash.new(0) #es un hash que estará inicializado en 0, si indexamos en un key que no existe este retornará 0
	word_list.each do |word|
		counts[word] +=1 #counts[word] es un hash con la clave del item actual, sabiendo que en principio no hay ningun item cuando asigne counts[word] +=1, sumará 1+0 ya que en principio el hash esta inicializado en 0
 	end
	counts	
end

def top_five_frecuencies(total_counts) #el parametro es un hash
	sorted = total_counts.sort_by {|word, count| count} #los argumentos serian los dos elementos que conforman un item dentro de una posicion del hash key => value == word =>count
	top_five = sorted.last(5)

	for i in 0...5
		word = top_five[i][0] #va a rotar por las posiciones del hash pero mostrará la primera posicion de las dos que completan el hash
		count = top_five[i][1] #va a rotar por las posiciones del hash pero mostrará la segunda posicion del item
		puts "#{word}: #{count}"
	end

end
top_five_frecuencies(count_frecuency(words_from_string("Sparky the cat sat on the mat")))
