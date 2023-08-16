module Api
  module V1
    class GreetingsController < Api::ApiApplicationController
      def index
        greeting = Greeting.order("RANDOM()").first.message
        render json: { message: greeting }
      end
    end
  end
end