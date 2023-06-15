# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_15_184209) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collaborators", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_collaborators_on_trip_id"
    t.index ["user_id"], name: "index_collaborators_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "trip_id", null: false
    t.string "event_type"
    t.date "start_date"
    t.date "end_date"
    t.string "start_location"
    t.string "end_location"
    t.string "reservation_number"
    t.string "seat_number"
    t.string "provider"
    t.string "provider_phone"
    t.string "provider_email"
    t.string "provider_url"
    t.string "name"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_events_on_trip_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "content"
    t.bigint "event_id", null: false
    t.boolean "is_complete"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_tasks_on_event_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "collaborators", "trips"
  add_foreign_key "collaborators", "users"
  add_foreign_key "events", "trips"
  add_foreign_key "tasks", "events"
  add_foreign_key "trips", "users"
end
