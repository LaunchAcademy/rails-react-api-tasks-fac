class Task < ApplicationRecord
  validates :name, presence: true


  def overdue
    return due_on <= Date.today
  end
end
