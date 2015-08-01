#!usr/bin/env ruby
# check_payday.rb

#CONSTANTES
DAYS_IN_A_PAY_PERIOD = 14
SECONDS_IN_A_DAY = 60*60*24

#VARIABLES

#Metodo incorporado en Ruby para la hora local. Este metodo toma 10 items como argumentos
#seconds, minutes, hours, day of the month, month, year, day of the week, day number within
#the year (1 through 366), whether the date is within daylight saving time, and a three-letter
#code for the time zone
matching_date =Time.local(0,0,0,22,9,2006,5,265, true, "EDT") #ESTE DEBE SER EL ULTIMO PAGO 
current_date = Time.new()

difference_in_seconds = (current_date -matching_date) #diferencia en segundos del dia que pagaron y el dia actual
difference_in_days = (difference_in_seconds /SECONDS_IN_A_DAY).to_i #
days_to_way = (DAYS_IN_A_PAY_PERIOD-difference_in_days)% DAYS_IN_A_PAY_PERIOD #NO COLOCAR ESPACIOS ENTRE EL OPERADOR DE RESTA

if(days_to_way.zero?)
	puts 'Payday today.'
else
	print 'Payday in ' + days_to_way.to_s + 'day'
	puts days_to_way == 1 ? '.' : 's.'
end
