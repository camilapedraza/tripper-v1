class AddImageBackgroundToTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :image_background, :string
  end
end
