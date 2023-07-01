class AddTransportNumberColumnToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :transport_number, :string, after: :reservation_number
  end
end
