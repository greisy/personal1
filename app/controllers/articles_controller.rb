class ArticlesController < ApplicationController #Un controlador es una simple clase que hereda del ApplicationController
#Dentro de esta clase se definen metodos que se convertiran en acciones de este controlador

#Estas acciones actuaran como operaciones CRUD para el resource article

  def new #esta accion esta asociada a crear un nuevo article, su vista es el formulario para recolectar esta información y ser 
  	#dirigida a la acción create que se encuentra abajo
  	render nothing: true
  	

  end

  def create 									#es la acción asociada al momento en que se da submit al formulario de arriba y recibira la información para procesarla
  	#render plain: params[:article].inspect, layout:true		#lo que la acción CREATE deberia hacer es guardar nuestro nuevo nuevo article en la BD
  			 									#Cuando el formulario es enviado, los campos de este son enviados como parametros y pueden ser referenciados dentro de las 
  			 									#acciones del controlador.
    #logger.debug "HELLO I AM A DEBUGGING STATEMENT"
    #logger.debug "#{params[:article].inspect}"
  end


end
