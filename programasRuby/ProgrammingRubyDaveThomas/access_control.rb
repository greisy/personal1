class Account #clase cuenta 
	attr_accesor :balance
	#attr_reader :creared_balance
	#protected :cleared_balance		                                                                                                                                    
	def initialize(balance) #la cuenta tiene un balance, su monto actual
		@balance = balance
	end

	#def greater_balance_than?(other)
	#	@cleared_balance > other.cleared_balance
	#end
end
#clase transferencia que haria las acciones de una cuenta, como debitar, depositar, transferir
class Trasaction
	#el principio basico es que se tienen dos cuentas para hacer una transacción
	def initialize(account_a, account_b)
		@account_a = account_a
		@account_b = account_b
	end

	#metodo privado de debitar y depositar
	private
	def debit(account, amount)
		account.balance -= amount #en este caso se conoce que la variable account es un objeto de la clase Account y que esta tiene el atributo :balance
	end
	def credit(account, amount)
		account.balance +=amount
	end
	#metodo publico de transferir de una cuenta a otra 
	public
	def transfer(amount)
		debit(@account_a, amount)
		credit(@account_b, amount)
	end
end

#Creo dos instancias de la clase Account
savings = Account.new(100)
checking = Account.new(200)

#Creo una instancia a la clase Transaction y paso las dos cuentas que he creado antes
trans = Trasaction.new(checking, savings)
#teniendo estas dos cuentas puede invocar a la funcion transfer para transferir de una cuenta a otra. 
trans.transfer(50)

