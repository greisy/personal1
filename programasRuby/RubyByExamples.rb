#Metodos

def first_if_true(first,second,to_be_tested)
	if to_be_tested
		first
	else
		second
	end
end

#Variables, metaprogramación
result = first_if_true(nil, "Hello World", false)
puts first_if_true(result, 1, true) #la condiciones es true
puts first_if_true(result,1, result) #la condicion es true

HUNDRED = 100 #<----definir una constante
puts first_if_true(HUNDRED.to_s + ' is true', 1, HUNDRED) #<--- la condicion es true


