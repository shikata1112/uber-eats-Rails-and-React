
3.times do |n|
  restaurant = Restaurant.new(
    name: "testレストラン_#{n}",
    fee: 100,
    time_required: 10,
  )

  12.times do |n|
    restaurant.foods.build(
      name: "フード名_#{n}",
      price: 500,
      description: "フード_#{n}の説明文です。"
    )
  end

  restaurant.save!
end
