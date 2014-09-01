class ArticlesController < ApplicationController #Un controlador es una simple clase que hereda del ApplicationController
#Dentro de esta clase se definen metodos que se convertiran en acciones de este controlador
  http_basic_authenticate_with name: "dhh", password: "secret",
except: [:index,:show]
#Estas acciones actuaran como operaciones CRUD para el resource article
  def index
    @articles = Article.all
  end
  def new #esta accion esta asociada a crear un nuevo article, su vista es el formulario para recolectar esta información y ser 
  	#dirigida a la acción create que se encuentra abajo
  	#render nothing: true, status: 404 #cuando comento esta instruccion Rails va a renderizar por defecto esta accion a través de su templates, sin embargo, si coloco esta instruccióm
  	                       #le dará mayor prioridad a está instrucción para renderizarla (render nothing) 
    #render nothing: true, status: :accepted
    @article = Article.new #creo la variable de instancia ya que estoy haciendo un render a la accion new entonces no se va a hacer un redirect para hacer el metodo get y obtener algo entonces
    logger.debug "----------------------------------------------------"
    logger.debug "#{@article.to_yaml}"
    #debo crearlo aqui. Para que lo necesito, lo necesito porque se esta cargando el template new y si me fijo este carga el objeto article que fue pasado por parametro para la creacion del objeto, sin embargo como no lo pudo crear
    #se devuelve al formulario con el objeto que se iba a crear para mostrar los error. 
  end
  def show
    #en esta instruccion estoy guardando en la variable de instancia el objeto que me devuelve de la busqueda
    @article = Article.find(params[:id]) #<---@article <-- es una variable de instancia Article.find(params[:id])<--- lo que devuelve es un objeto
  end
 
  def edit
    @article = Article.find(params[:id])
  end
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    
    redirect_to articles_path  
  end
    
  
  def create 									#es la acción asociada al momento en que se da submit al formulario de arriba y recibira la información para procesarla
  		#lo que la acción CREATE deberia hacer es guardar nuestro nuevo nuevo article en la BD
  	#render plain: params[:article].inspect								#Cuando el formulario es enviado, los campos de este son enviados como parametros y pueden ser referenciados dentro de las 
  			 									#acciones del controlador.
    #logger.debug "HELLO I AM A DEBUGGING STATEMENT"
    #logger.debug "#{params[:article].inspect}"
    #render text: params[:article].inspect
    #render plain: "<b>ESTO ES UNA PRUEBA</b>", layout: true, status: 200, content_type: "text/html"
    #render body: params[:article].inspect
    #render json: params[:article], layout:true
    
    @article = Article.new(article_params) 
    (@article.save) ? (redirect_to @article) : (render 'new')
    #logger.debug "----------------------------------------------------"
    #logger.debug "#{@article.to_yaml}"
    #POR QUE EL REDIRECT_TO ASOCIA @ARTICLE CON LA ACCION SHOW SI NUNCA SE ESTA COLOCANDO SHOW
    #redirect_to @article #pasara como parametro en la redireccion al objeto article e ira a la accion show que aun no se porque exactamente va a ir a esa
    
  end
  
  private #ONLY THE PUBLIC METHODS CAN BE ACTIONS FOR CONTROLLERS
    def article_params
      params.require(:article).permit(:title,:text)
    end
   

  
      

end
