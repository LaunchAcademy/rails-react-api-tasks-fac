class Api::V1::TasksController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Task.all
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render json: TaskSerializer.new(@task, scope: current_user)
    else
      render json: { errors: @task.errors.full_messages }
    end

  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :dueOn)
  end

end
