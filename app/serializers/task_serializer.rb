class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :name_plus_pokemon

  # has_many :todos

  def name_plus_pokemon
    object.name + "squirtle"
  end
end
