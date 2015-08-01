#!usr/bin/env ruby
#boolean_golf.rb

class Object

	def false?()
		not self
	end

	def true?()
		not false?
	end

	alias :to_b :true? #renombro al metodo true? con el metodo to_b

end

puts true.to_b
puts false.to_b
puts nil.to_b