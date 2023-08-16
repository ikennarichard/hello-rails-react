module Api
  module V1
    class GreetingsController < Api::ApiApplicationController
      def index
        greetings = Greeting.all
        if greetings
          render json: {status: "SUCCESS", messages: greetings}, status: :ok
        else
          render json: greetings.errors, status: :bad_request
        end
      end

      def show
        greeting = Greeting.order("RANDOM()").first.message
        render json: { message: greeting }
      end
    end
  end
end