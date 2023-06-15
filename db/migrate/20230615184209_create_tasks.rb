class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :content
      t.references :event, null: false, foreign_key: true
      t.boolean :is_complete

      t.timestamps
    end
  end
end
