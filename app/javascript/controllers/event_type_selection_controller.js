import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["type"]

  connect() {

  }
  change(e) {
    const selectedValue = e.srcElement.value.toLowerCase()
    document.querySelectorAll(".input-wrapper").forEach(element => {
      element.classList.add("d-none")
    })
    const inputWrapper = document.getElementById(selectedValue)
    inputWrapper.classList.remove("d-none")
    if (selectedValue == "restaurant" || "visit") {
      console.log(document.querySelector(".event_end_date"))
      inputWrapper.querySelector(".event_end_date").classList.add("d-none")
    }
  }
}
