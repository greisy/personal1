class CommentsController < ApplicationController
  
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params) #Algunos metodos estan disponibles por la asociacion entre article y comment uno de ellos es el uso del metodo create sobre @article.comments para crear y guardar algun comentario.
    #esto enlazara automaticamente el comentario que pertenece a un articulo en particular.
    logger.debug "----------------------CREATE COMMENT------------"
    logger.debug "#{params.to_yaml}"
    redirect_to article_path(@article)
  end
  
  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end
  
  private
  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end
 
end
