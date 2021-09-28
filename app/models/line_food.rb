class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  def self.active
    where(active: true)
  end

  def self.other_restaurant(picked_restaurant_id)
    where.not(restaurant_id: picked_restaurant_id)
  end

  def total_amount
    price * count
  end
end
