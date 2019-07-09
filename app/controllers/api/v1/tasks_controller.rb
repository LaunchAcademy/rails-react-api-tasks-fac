module Api
  module V1
    class TasksController < ApiController
      def index
        render json: Task.all
      end
    end
  end
end
