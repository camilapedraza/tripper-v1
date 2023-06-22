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

alexis = User.new(email: "alexis@tripper.com", password: "alexis123", first_name: "Alexis", last_name: "Florentin")
alexis.photo.attach(io: File.open('app/assets/images/user_seeds/alexis.png'), filename: "alexis.png", content_type: "image/png")
alexis.save

gaetan = User.new(email: "gaetan@tripper.com", password: "gaetan123", first_name: "Gaetan", last_name: "Tripelon")
gaetan.photo.attach(io: File.open('app/assets/images/user_seeds/gaetan.png'), filename: "gaetan.png", content_type: "image/png")
gaetan.save

camila = User.new(email: "camila@tripper.com", password: "camila123", first_name: "Camila", last_name: "Pedraza")
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
Event.create(
  name: "Flight to Madrid",
  trip: trip2,
  event_type: "flight",
  start_date: DateTime.new(2023, 5, 21, 10, 55),
  end_date: DateTime.new(2023, 5, 21, 13, 05),
  start_location: "Paris",
  end_location: "Madrid, Spain",
  provider: "Transavia"
)
Event.create(
  name: "Madrid Appartment",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 5, 21),
  end_date: DateTime.new(2023, 5, 23),
  start_location: "Calle de 2 de May 10, Madrid, Spain",
  end_location: "Calle de 2 de May 10, Madrid, Spain",
  notes: "Piso 4"
)
Event.create(
  name: "From Madrid to Palma",
  trip: trip2,
  event_type: "flight",
  start_date: DateTime.new(2023, 5, 23, 9, 30),
  end_date: DateTime.new(2023, 5, 23, 10, 55),
  start_location: "Madrid, Spain",
  end_location: "Palma, Spain",
  provider: "Iberia Express"
)
Event.create(
  name: "Car rental",
  trip: trip2,
  event_type: "car/bike",
  start_date: DateTime.new(2023, 5, 23),
  end_date: DateTime.new(2023, 5, 28),
  start_location: "Palma, Spain",
  end_location: "Palma, Spain",
  provider: "Sixt"
)
Event.create(
  name: "Stay in Palma",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 5, 23),
  end_date: DateTime.new(2023, 5, 28),
  start_location: "Carrer Princesa, 15, Can Picafort, Illes Balears",
  end_location: "Carrer Princesa, 15, Can Picafort, Illes Balears"
)
Event.create(
  name: "Flight to Madrid",
  trip: trip2,
  event_type: "flight",
  start_date: DateTime.new(2023, 5, 28, 8),
  end_date: DateTime.new(2023, 5, 28),
  start_location: "Palma, Spain",
  end_location: "Madrid, Spain",
  provider: "Air Europa",
  reservation_number: "UX6012"
)
Event.create(
  name: "Flight to Lisbon",
  trip: trip2,
  event_type: "flight",
  start_date: DateTime.new(2023, 5, 28),
  end_date: DateTime.new(2023, 5, 28, 10, 50),
  start_location: "Madrid, Spain",
  end_location: "Lisbon, Portugal",
  provider: "Air Europa",
  reservation_number: "UX1153"
)
Event.create(
  name: "Lisbon Appt",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 5, 28),
  end_date: DateTime.new(2023, 5, 30),
  provider: "AirBnB",
  start_location: "Lisbon, Portugal",
  end_location: "Lisbon, Portugal",
  notes: "Airbnb - Beco do Maquinez 10 Apartment #4 / Check-in after 3pm // Check-out before 11am"
)
Event.create(
  name: "Car rental from Lisbon to Porto through Sintra",
  trip: trip2,
  event_type: "car/bike",
  start_date: DateTime.new(2023, 5, 28),
  end_date: DateTime.new(2023, 6, 5),
  start_location: "Lisbon, Portugal",
  end_location: "Porto, Portugal",
  provider: "Sixt"
)
Event.create(
  name: "Sintra stay",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 5, 30),
  end_date: DateTime.new(2023, 6, 1),
  provider: "AirBnB",
  start_location: "Rua Ferraria 8, Sintra, Portugal",
  end_location: "Rua Ferraria 8, Sintra, Portugal",
  notes: "Check-in after 2pm // Check-out before 11am"
)
Event.create(
  name: "Quinta da Regaleira",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 5, 31, 10, 30),
  end_date: DateTime.new(2023, 5, 31),
  start_location: "R. Barbosa du Bocage 5, 2710-567 Sintra, Portugal",
  end_location: "R. Barbosa du Bocage 5, 2710-567 Sintra, Portugal"
)
Event.create(
  name: "Pena Palace",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 5, 31, 14, 30),
  end_date: DateTime.new(2023, 5, 31),
  start_location: "Estrada da Pena, 2710-609 Sintra, Portugal",
  end_location: "Estrada da Pena, 2710-609 Sintra, Portugal"
)
Event.create(
  name: "Monserrate",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 1, 10),
  end_date: DateTime.new(2023, 6, 1),
  start_location: "Sintra, Portugal",
  end_location: "Sintra, Portugal"
)
Event.create(
  name: "Porto stay",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 6, 1),
  end_date: DateTime.new(2023, 6, 5),
  provider: "AirBnB",
  start_location: "Rua da Alegria 120 1º frente, Porto, Portugal",
  end_location: "Rua da Alegria 120 1º frente, Porto, Portugal"
)
Event.create(
  name: "Fado show",
  trip: trip2,
  event_type: "show",
  start_date: DateTime.new(2023, 6, 4),
  end_date: DateTime.new(2023, 6, 4),
  start_location: "Porto, Portugal",
  end_location: "Porto, Portugal"
)
Event.create(
  name: "Flight to Bordeaux",
  trip: trip2,
  event_type: "flight",
  start_date: DateTime.new(2023, 6, 5, 16, 5),
  end_date: DateTime.new(2023, 6, 5, 18, 40),
  start_location: "Porto, Portugal",
  end_location: "Bordeaux, France"
)
Event.create(
  name: "Bordeaux stay",
  trip: trip2,
  event_type: "stay",
  start_date: DateTime.new(2023, 6, 5),
  end_date: DateTime.new(2023, 6, 8),
  provider: "AirBnB",
  start_location: "Chem. de Port Leyron, 33880 Baurech, France",
  end_location: "Chem. de Port Leyron, 33880 Baurech, France"
)
Event.create(
  name: "Train to Paris",
  trip: trip2,
  event_type: "train",
  start_date: DateTime.new(2023, 6, 8, 12, 20),
  end_date: DateTime.new(2023, 6, 8, 14, 41),
  provider: "Ouigo",
  start_location: "Bordeaux Saint-Jean, France",
  end_location: "Paris Montparnasse, France"
)
Event.create(
  name: "Restaurant Pain Vin Fromages",
  trip: trip2,
  event_type: "restaurant",
  start_date: DateTime.new(2023, 6, 10, 21, 15),
  end_date: DateTime.new(2023, 6, 10),
  start_location: "3 Rue Geoffroy l'Angevin, 75004 Paris",
  end_location: "3 Rue Geoffroy l'Angevin, 75004 Paris"
)
Event.create(
  name: "Sainte Chapelle",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 11, 11),
  end_date: DateTime.new(2023, 6, 11),
  start_location: "10 Bd du Palais, 75001 Paris",
  end_location: "10 Bd du Palais, 75001 Paris"
)
Event.create(
  name: "Chateau de Versailles",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 11, 14, 30),
  end_date: DateTime.new(2023, 6, 11),
  start_location: "Place d'Armes, 78000 Versailles",
  end_location: "Place d'Armes, 78000 Versailles"
)
Event.create(
  name: "Giverny Monet",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 12, 12, 30),
  end_date: DateTime.new(2023, 6, 12),
  start_location: "84 Rue Claude Monet, 27620 Giverny",
  end_location: "84 Rue Claude Monet, 27620 Giverny"
)
Event.create(
  name: "Eiffel Tower",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 12, 21, 30),
  end_date: DateTime.new(2023, 6, 12),
  start_location: "Champ de Mars, 5 Av. Anatole France, 75007 Paris",
  end_location: "Champ de Mars, 5 Av. Anatole France, 75007 Paris"
)
Event.create(
  name: "Orangerie",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 13),
  end_date: DateTime.new(2023, 6, 13),
  start_location: "Jardin des Tuileries, 75001 Paris",
  end_location: "Jardin des Tuileries, 75001 Paris"
)
Event.create(
  name: "Louvre Museum",
  trip: trip2,
  event_type: "visit",
  start_date: DateTime.new(2023, 6, 14, 10),
  end_date: DateTime.new(2023, 6, 14),
  start_location: "75001 Paris",
  end_location: "75001 Paris"
)
Event.create(
  name: "Vol vers le Lavandou",
  trip: trip4,
  event_type: "flight",
  start_date: DateTime.new(2023, 7, 16, 13, 20),
  end_date: DateTime.new(2023, 7, 16, 15, 5),
  provider: "Easyjet",
  seat_number: "12A",
  start_location: "Aéroport Paris-Charles de Gaulle, 95700 Roissy-en-France",
  end_location: "Aéroport de Toulon-Hyères, Bd de la Marine, 83400 Hyères"
)
Event.create(
  name: "Première cuite au Mix",
  trip: trip4,
  event_type: "restaurant",
  provider: "Le Mix",
  provider_phone: "04 89 66 91 85",
  start_date: DateTime.new(2023, 7, 16, 21),
  end_date: DateTime.new(2023, 7, 17),
  start_location: "Quai d'Honneur, 83980 Le Lavandou",
  end_location: "Quai d'Honneur, 83980 Le Lavandou"
)
Event.create(
  name: "Marché artisanal nocturne (front de mer du Lavandou)",
  trip: trip4,
  event_type: "other",
  start_date: DateTime.new(2023, 7, 19),
  end_date: DateTime.new(2023, 7, 19),
  start_location: "Front de mer, 83980 Le Lavandou",
  end_location: "Front de mer, 83980 Le Lavandou"
)
Event.create(
  name: "Langoustes au restaurant Plage du Layet",
  trip: trip4,
  event_type: "restaurant",
  start_date: DateTime.new(2023, 7, 20, 12, 30),
  end_date: DateTime.new(2023, 7, 20),
  start_location: "Plage du Layet, 83980 Cavaliere",
  end_location: "Plage du Layet, 83980 Cavaliere"
)
Event.create(
  name: "Back to home",
  trip: trip4,
  event_type: "flight",
  start_date: DateTime.new(2023, 7, 23, 15, 40),
  end_date: DateTime.new(2023, 7, 16, 23, 17, 25),
  provider: "Easyjet",
  seat_number: "12A",
  start_location: "Aéroport de Toulon-Hyères, Bd de la Marine, 83400 Hyères",
  end_location: "Aéroport Paris-Charles de Gaulle, 95700 Roissy-en-France"
)
