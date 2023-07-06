puts "Creating tasks"

task1 = Task.new(content: "Book Uber from Train Station")
task1.event = Trip.first.events.first
task1.save
puts "Task 1 Saved"

task2 = Task.new(content: "Book Uber to Orly")
task2.event = Trip.second.events.first
task2.save
puts "Task 2 Saved"

task3 = Task.new(content: "Buy travel insurance")
task3.event = Trip.second.events.first
task3.save
puts "Task 3 Saved"

task4 = Task.new(content: "Buy additional bag", is_complete: true)
task4.event = Trip.second.events.first
task4.save
puts "Task 4 Saved"
