class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :commenter
      t.text :body
      #this line adds an integer column called 'article_id'
      t.references :article, index: true #this is a foreign key
      #es un objeto de referencia otro objeto que seria la clave foranea
      t.timestamps
    end
  end
end
#Como ya se ha corrido la migracion de la tabla Article cuando se corra rake db:migrate Rails sabra que se trata solo de esta tabla
