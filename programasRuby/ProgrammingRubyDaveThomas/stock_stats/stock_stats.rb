require_relative 'csv_reader'

reader = CsvReader.new #creo un objeto de tipo CsvReader

ARGV.each do |csv_file_name| #Exploro en la variable global ARGV. La variable ARGV guarda los argumentos colocalos en la línea de comandos 
	STDERR.puts "Processing #{csv_file_name}" 
	reader.read_in_csv_data(csv_file_name) #Proceso un archivo para convertir su contenido en un arreglo de objetos que serian cada row del archivo
end

puts reader.number_of_each_isbn
puts "Total value = #{reader.total_value_in_stock}" #Mostrar el precio total del stock
