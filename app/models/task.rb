class Task < ApplicationRecord
  def overdue
    return due_on <= Date.today
  end
end
