# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning Database"
Trip.destroy_all
Event.destroy_all
Task.destroy_all
User.destroy_all

puts "Creating users"
fausto = User.new(email: "fausto@tripper.com", password: "fausto123", first_name: "Fausto", last_name: "Magro")
fausto.photo.attach(io: File.open('app/assets/images/user_seeds/fausto.png'), filename: "fausto.png", content_type: "image/png")
fausto.save

alexis = User.new(email: "alexis@tripper.com", password: "alexis123", first_name: "Florentin", last_name: "Alexis")
alexis.photo.attach(io: File.open('app/assets/images/user_seeds/alexis.png'), filename: "alexis.png", content_type: "image/png")
alexis.save

gaetan = User.new(email: "gaetan@tripper.com", password: "gaetan123", first_name: "Gaetan", last_name: "Tripelon")
gaetan.photo.attach(io: File.open('app/assets/images/user_seeds/gaetan.png'), filename: "gaetan.png", content_type: "image/png")
gaetan.save

camila = User.new(email: "camila@tripper.com", password: "camila123", first_name: "Pedraza", last_name: "Camila")
camila.photo.attach(io: File.open('app/assets/images/user_seeds/camila.png'), filename: "camila.png", content_type: "image/png")
camila.save

# admin = User.new(email: "admin@tripper.com", password: "admin123", first_name: "Admin", last_name: "Tripper")
# admin.admin = true
# admin.save

puts "Creating trips"
trip1 = Trip.new(
  name: "Varigotti with family",
  user: fausto
)
trip1.save

trip2 = Trip.new(
  name: "Family trip accross Europe",
  user: camila
)
trip2.save

trip3 = Trip.new(
  name: "Trip to Croatia with my friends",
  user: alexis
)
trip3.save

trip4 = Trip.new(
  name: "Le Lavandou with friends",
  user: gaetan
)
trip4.save

trip5 = Trip.new(
  name: "American Roadtrip",
  user: fausto
)
trip5.save

trip6 = Trip.new(
  name: "Pragua with hubby",
  user: camila
)
trip6.save

trip7 = Trip.new(
  name: "Wine Route in Alsace",
  user: gaetan
)
trip7.save

trip8 = Trip.new(
  name: "Project X in Sarajevo",
  user: alexis
)
trip8.save

puts "Creating events"
Event.create(
  name: "TGV to Annecy",
  trip: trip1,
  event_type: "train",
  start_date: DateTime.new(2023, 7, 15, 18, 45),
  end_date: DateTime.new(2023, 7, 15, 22, 30),
  start_location: "Paris 75007",
  end_location: "Annecy 74000"
)
Event.create(
  name: "Car road with family to Varigotti",
  trip: trip1,
  event_type: "journey",
  start_date: DateTime.new(2023, 7, 17, 10),
  end_date: DateTime.new(2023, 7, 17, 15, 30),
  start_location: "Annecy 74000",
  end_location: "Varigotti, Savone, Italie"
)
Event.create(
  name: "Bike in family",
  trip: trip1,
  event_type: "other",
  start_date: DateTime.new(2023, 7, 20, 14),
  end_date: DateTime.new(2023, 7, 17, 20, 20),
  start_location: "Varigotti, Savone, Italie",
  end_location: "Varigotti, Savone, Italie"
)
Event.create(
  name: "Scuba Diving",
  trip: trip1,
  event_type: "other",
  start_date: DateTime.new(2023, 7, 24, 16),
  end_date: DateTime.new(2023, 7, 24, 18, 30),
  start_location: "Savona, Savone, Italie",
  end_location: "Savona, Savone, Italie"
)
Event.create(
  name: "Going to Chamonix",
  trip: trip1,
  event_type: "journey",
  start_date: DateTime.new(2023, 7, 28, 8),
  end_date: DateTime.new(2023, 7, 24, 12),
  start_location: "Varigotti, Savone, Italie",
  end_location: "Chamonix-Mont-Blanc"
)
Event.create(
  name: "Going home",
  trip: trip1,
  event_type: "journey",
  start_date: DateTime.new(2023, 7, 29, 11),
  end_date: DateTime.new(2023, 7, 29, 18),
  start_location: "Chamonix-Mont-Blanc",
  end_location: "Paris 75007"
)
