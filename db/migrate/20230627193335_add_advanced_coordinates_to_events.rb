class AddAdvancedCoordinatesToEvents < ActiveRecord::Migration[7.0]
  def change
    rename_column :events, :latitude, :start_latitude
    rename_column :events, :longitude, :start_longitude
    add_column :events, :end_latitude, :float
    add_column :events, :end_longitude, :float
  end
end
