Sass puede ser usado de tres maneras: 
- Como una herramienta de línea de comandos
	-Primero instalamos la gema
	$ gem install sass

	- Para correr Sass desde la línea de comandos
	$ sass input.scss output.css
	o
	$ sass input.sass output.css

	- Decirle a Sass que mire el archivo y si se hace un update genere el archivo .css pertinente
	$ sass --watch input.scss:output.css
	o
	$ sass --watch input.sass:output.css

	- Decirle a Sass que mire si una carpeta llena de archivos Sass hace alguna actualización en un archivo
	$ sass --watch app/sass:public/stylesheets

	Para mas informacion 
	$ sass --help