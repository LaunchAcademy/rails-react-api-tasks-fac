class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :dueOn, # :current_user
  # has_many :todos

  belongs_to :user

  def dueOn
    object.due_on
  end

  def current_user
    scope
  end
end
