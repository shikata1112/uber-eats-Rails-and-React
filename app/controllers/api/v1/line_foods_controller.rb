module Api
  module V1
    class LineFoodsController < ApplicationController
      before_action :set_food, only: [:create]

      def create
        if LineFood.active.other_restaurant(ordered_food.restaurant.id).exists?
          render json: {
            existing_restaurant: LineFood.other_restaurant(ordered_food.restaurant.id).first.restaurant.name,
            new_restaurant: Food.find(params[:food_id]).restaurant.name,
          }, status: :not_acceptable and return
        end

        set_line_food(ordered_food)

        binding.irb

        if line_food.save
          render json: { line_food: line_food }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      private

      def set_food
        ordered_food = Food.find(params[:food_id])
      end

      def set_line_food(ordered_food)
        food = ordered_food.line_food
        line_food = if food.present?
                      food.attributes = { count: food.count + params[:count], active: true }
                    else
                      food.build(count: params[:count], restaurant: ordered_food.restaurant, active: true)
                    end
      end
    end
  end
end
