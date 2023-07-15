import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['typeTitle']
  static values= {
    startType: String
  }

  connect() {
    if (this.hasStartTypeValue) this.openType(this.startTypeValue)
  }

  change(e) {
    const selectedValue = e.params.type
    e.target.closest('fieldset').classList.add('d-none')
    this.typeTitleTarget.innerText = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)
    document.querySelectorAll(".input-wrapper").forEach(element => {
      element.classList.add("d-none")
    })
    this.openType(selectedValue)
  }

  openType(type) {
    if (type == "restaurant") this.openRestaurant()
    if (type == "visit") this.openVisit()
    if (type == "show") this.openShow()
    if (type == "other") this.openOther()
    if (type == "rental") this.openRental()
    if (type == "journey") this.openJourney()
    if (type == "flight") this.openFlight()
    if (type == "train") this.openTrain()
    if (type == "bus") this.openBus()
    if (type == "boat") this.openBoat()
    if (type == "stay") this.openStay()
  }

  openJourney() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.remove("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#name-label").innerHTML = 'Name'
    this.element.querySelector("#start-date-label").innerHTML = 'Departure time'
    this.element.querySelector("#end-date-label").innerHTML = 'Arrival time'
    this.element.querySelector("#start-location-label").innerHTML = 'Origin'
    this.element.querySelector("#end-location-label").innerHTML = 'Destination'
  }
  openFlight() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.remove("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Departure time'
    this.element.querySelector("#end-date-label").innerHTML = 'Arrival time'
    this.element.querySelector("#start-location-label").innerHTML = 'Origin'
    this.element.querySelector("#end-location-label").innerHTML = 'Destination'
    this.element.querySelector("#provider-label").innerHTML = 'Airline'
    this.element.querySelector("#reservation-nr-label").innerHTML = 'Booking number'
    this.element.querySelector("#transport-nr-label").innerHTML = 'Flight number'
    this.element.querySelector("#seat-nr-label").innerHTML = 'Seat number'
  }
  openTrain() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Departure time'
    this.element.querySelector("#end-date-label").innerHTML = 'Arrival time'
    this.element.querySelector("#start-location-label").innerHTML = 'Origin'
    this.element.querySelector("#end-location-label").innerHTML = 'Destination'
    this.element.querySelector("#provider-label").innerHTML = 'Train company'
    this.element.querySelector("#reservation-nr-label").innerHTML = 'Booking number'
    this.element.querySelector("#transport-nr-label").innerHTML = 'Train number'
    this.element.querySelector("#seat-nr-label").innerHTML = 'Seat / Car'
  }
  openBus() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Departure time'
    this.element.querySelector("#end-date-label").innerHTML = 'Arrival time'
    this.element.querySelector("#start-location-label").innerHTML = 'Origin'
    this.element.querySelector("#end-location-label").innerHTML = 'Destination'
    this.element.querySelector("#provider-label").innerHTML = 'Bus company'
    this.element.querySelector("#reservation-nr-label").innerHTML = 'Booking number'
    this.element.querySelector("#transport-nr-label").innerHTML = 'Bus number'
    this.element.querySelector("#seat-nr-label").innerHTML = 'Seat number'
  }
  openBoat() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Departure time'
    this.element.querySelector("#end-date-label").innerHTML = 'Arrival time'
    this.element.querySelector("#start-location-label").innerHTML = 'Origin'
    this.element.querySelector("#end-location-label").innerHTML = 'Destination'
    this.element.querySelector("#provider-label").innerHTML = 'Boat company'
    this.element.querySelector("#reservation-nr-label").innerHTML = 'Booking number'
    this.element.querySelector("#seat-nr-label").innerHTML = 'Seat/Cabin'
  }
  openRental() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Pick-up time'
    this.element.querySelector("#end-date-label").innerHTML = 'Drop-off time'
    this.element.querySelector("#start-location-label").innerHTML = 'Pick-up location'
    this.element.querySelector("#end-location-label").innerHTML = 'Drop-off location'
    this.element.querySelector("#provider-label").innerHTML = 'Rental company'
    this.element.querySelector("#provider-phone-label").innerHTML = 'Phone'
    this.element.querySelector("#provider-email-label").innerHTML = 'Email'
    this.element.querySelector("#reservation-nr-label").innerHTML = 'Booking number'
  }
  openStay() {
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.remove("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#start-date-label").innerHTML = 'Check-in date'
    this.element.querySelector("#end-date-label").innerHTML = 'Check-out date'
    this.element.querySelector("#start-location-label").innerHTML = 'Address'
    this.element.querySelector("#provider-label").innerHTML = 'Host/Establishment'
    this.element.querySelector("#provider-phone-label").innerHTML = 'Phone'
    this.element.querySelector("#provider-email-label").innerHTML = 'Email'
  }
  openRestaurant() {
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.add("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#reservation-nr-input").classList.add("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.remove("d-none")
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#name-label").innerHTML = 'Restaurant'
    this.element.querySelector("#start-date-label").innerHTML = 'Date and time'
    this.element.querySelector("#start-location-label").innerHTML = 'Address'
  }
  openShow() {
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.add("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#provider-details-input").classList.remove("d-none")
    this.element.querySelector("#name-input").classList.remove("d-none")
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#name-label").innerHTML = 'Name'
    this.element.querySelector("#start-date-label").innerHTML = 'Date and time'
    this.element.querySelector("#start-location-label").innerHTML = 'Address'
    this.element.querySelector("#provider-label").innerHTML = 'Venue name'
  }
  openVisit() {
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#provider-input").classList.add("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.add("d-none")
    this.element.querySelector("#seat-nr-input").classList.remove("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#name-input").classList.remove("d-none")
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#name-label").innerHTML = 'Name'
    this.element.querySelector("#start-date-label").innerHTML = 'Date and time'
    this.element.querySelector("#start-location-label").innerHTML = 'Location'
    this.element.querySelector("#seat-nr-label").innerHTML = 'Seat number'
  }
  openOther() {
    this.element.querySelector("#name-input").classList.remove("d-none")
    this.element.querySelector("#date-input").classList.remove("d-none")
    this.element.querySelector("#location-input").classList.remove("d-none")
    this.element.querySelector("#notes-input").classList.remove("d-none")
    this.element.querySelector("#submit-input").classList.remove("d-none")
    this.element.querySelector("#reservation-nr-input").classList.add("d-none")
    this.element.querySelector("#seat-nr-input").classList.add("d-none")
    this.element.querySelector("#provider-details-input").classList.add("d-none")
    this.element.querySelector("#provider-input").classList.add("d-none")
    this.element.querySelector(".event_end_date").classList.add("d-none")
    this.element.querySelector(".event_end_location").classList.add("d-none")
    this.element.querySelector("#transport-nr-input").classList.add("d-none")
    this.element.querySelector("#name-label").innerHTML = 'Event name'
    this.element.querySelector("#start-date-label").innerHTML = 'Start date'
    this.element.querySelector("#end-date-label").innerHTML = 'End date'
    this.element.querySelector("#start-location-label").innerHTML = 'Start location'
    this.element.querySelector("#end-location-label").innerHTML = 'End location'
  }
}
