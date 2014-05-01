class ArticlesController < ApplicationController #Un controlador es una simple clase que hereda del ApplicationController
#Dentro de esta clase se definen metodos que se convertiran en acciones de este controlador

#Estas acciones actuaran como operaciones CRUD para el resource article
layout "capa"
  def new #esta accion esta asociada a crear un nuevo article, su vista es el formulario para recolectar esta información y ser 
  	#dirigida a la acción create que se encuentra abajo
  	#render nothing: true, status: 404 #cuando comento esta instruccion Rails va a renderizar por defecto esta accion a través de su templates, sin embargo, si coloco esta instruccióm
  	                       #le dará mayor prioridad a está instrucción para renderizarla (render nothing) 
    
  
  end

  def create 									#es la acción asociada al momento en que se da submit al formulario de arriba y recibira la información para procesarla
  		#lo que la acción CREATE deberia hacer es guardar nuestro nuevo nuevo article en la BD
  	#render plain: params[:article].inspect								#Cuando el formulario es enviado, los campos de este son enviados como parametros y pueden ser referenciados dentro de las 
  			 									#acciones del controlador.
    #logger.debug "HELLO I AM A DEBUGGING STATEMENT"
    #logger.debug "#{params[:article].inspect}"
    #render text: params[:article].inspect
    render plain: "<b>ESTO ES UNA PRUEBA</b>", layout: true, status: 200
    #render body: params[:article].inspect
  end


end
