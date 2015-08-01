class Article < ActiveRecord::Base
  has_many :comments, dependent: :destroy #la asociacion cuando es el que se repite va en plural, por eso se usa de esta manera en 
  
  validates :title, presence: true, 
                    length: { minimum: 5}
end
