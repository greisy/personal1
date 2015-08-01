#LIBRO PROGRAMMING RUBY (2013)

#gets es el metodo mas usado para leer por pantalla
#el metodo gets retorna nil cuando alcanza el final de la entrada! Recordemos que en Ruby nil puede también ser visto como false
#puts, p y el print para imprimir por pantalla solo que el print no retorna en una nueva línea sino al lado
#tambien se encuentra el printf que es como el usado por C y perl

printf("Number: %5.2f, \nString: %s\n", 1.23, "hello")
#el printf es diferente a los otros tres porque indica que tipo de objeto va a mostrar por pantalla
#en éste caso el comando %5.2f indica que se mostrará un objeto de tipo flotante que permitirá mostrar solo 5 digitos antes del punto y dos dígitos despues del punto
puts "You gave #{ARGV.size}" #ARGV es una array global que contiene cada argumento pasado al momento de correr el programa
p ARGV

#forma de probar esta instrucción ruby cmd_line.rb ant bee cat dog

#si los argumentos que se pasaran a la hora de correr el programa son los nombre de archivos se puede usar el array ARGF como una clase especial de objeto de I/O E/S 

