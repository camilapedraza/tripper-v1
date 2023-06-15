class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :event_type
      t.date :start_date
      t.date :end_date
      t.string :start_location
      t.string :end_location
      t.string :reservation_number
      t.string :seat_number
      t.string :provider
      t.string :provider_phone
      t.string :provider_email
      t.string :provider_url
      t.string :name
      t.string :notes

      t.timestamps
    end
  end
end
