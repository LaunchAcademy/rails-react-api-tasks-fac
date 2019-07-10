class Api::V1::TasksController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Task.all
  end
end
