import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["type"]

  connect() {

  }
  change(e) {
    const selectedValue = e.srcElement.value.toLowerCase()
    console.log(document.querySelectorAll(".input-wrapper"))
    document.querySelectorAll(".input-wrapper").forEach(element => {
      element.classList.add("d-none")
    })
    // const document = document.getElementById(selectedValue)
    // document.classList.remove("d-none")
    if (selectedValue == "restaurant" || selectedValue == "visit" || selectedValue == "show") {
      // console.log(this.element.querySelector(".event_end_date"))
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
    }
    if (selectedValue == "restaurant") {
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
    if (selectedValue == "visit") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#provider-input").classList.add("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#reservation-nr-input").classList.add("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.remove("d-none")
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
      this.element.querySelector("#name-label").innerHTML = 'Name'
      this.element.querySelector("#start-date-label").innerHTML = 'Date and time'
      this.element.querySelector("#start-location-label").innerHTML = 'Location'
    }
    if (selectedValue == "show") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#provider-input").classList.add("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#reservation-nr-input").classList.add("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.remove("d-none")
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
      this.element.querySelector("#name-label").innerHTML = 'Name'
      this.element.querySelector("#start-date-label").innerHTML = 'Date and time'
      this.element.querySelector("#start-location-label").innerHTML = 'Location'
    }
    if (selectedValue == "other") {
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
      this.element.querySelector("#provider-label").innerHTML = 'Event name'
      this.element.querySelector("#start-date-label").innerHTML = 'Start date'
      this.element.querySelector("#end-date-label").innerHTML = 'End date'
      this.element.querySelector("#start-location-label").innerHTML = 'Start location'
      this.element.querySelector("#end-location-label").innerHTML = 'End location'
    }
    if (selectedValue == "rental") {
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
      this.element.querySelector("#reservation-nr-label").innerHTML = 'Reservation number'
    }
    if (selectedValue == "journey") {
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
    if (selectedValue == "flight") {
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
    if (selectedValue == "train") {
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
      this.element.querySelector("#seat-nr-label").innerHTML = 'Seat number'
    }
    if (selectedValue == "bus") {
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
    if (selectedValue == "boat") {
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
    if (selectedValue == "stay") {
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
  }
}
