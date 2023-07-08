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
    if (selectedValue == "restaurant" || selectedValue == "visit" || selectedValue == "show" || selectedValue == "other" || selectedValue == "rental") {
      // console.log(this.element.querySelector(".event_end_date"))
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
    }
    if (selectedValue == "restaurant") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#provider-input").classList.remove("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
      this.element.querySelector("#reservation-nr-input").classList.add("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.add("d-none")
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
    }
    if (selectedValue == "visit") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#provider-input").classList.remove("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#reservation-nr-input").classList.add("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.add("d-none")
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
    }
    if (selectedValue == "show") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#provider-input").classList.remove("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#reservation-nr-input").classList.add("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.add("d-none")
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")

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
      this.element.querySelector(".event_end_date").classList.add("d-none")
      this.element.querySelector(".event_end_location").classList.add("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
    }
    if (selectedValue == "journey") {
      this.element.querySelector("#date-input").classList.remove("d-none")
      this.element.querySelector("#location-input").classList.remove("d-none")
      this.element.querySelector("#notes-input").classList.remove("d-none")
      this.element.querySelector("#submit-input").classList.remove("d-none")
      this.element.querySelector("#seat-nr-input").classList.add("d-none")
      this.element.querySelector("#provider-details-input").classList.add("d-none")
      this.element.querySelector("#name-input").classList.add("d-none")
      this.element.querySelector(".event_end_date").classList.remove("d-none")
      this.element.querySelector(".event_end_location").classList.remove("d-none")
      this.element.querySelector("#transport-nr-input").classList.add("d-none")
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
    }
  }
}
