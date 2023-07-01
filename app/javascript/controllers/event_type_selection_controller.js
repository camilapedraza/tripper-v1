import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["type"]

  connect() {

    const journey = document.getElementById("journey")

    this.typeTarget.addEventListener("change", () => console.log(this.typeTarget.value))


    if (this.typeTarget.addEventListener("input", () => this.typeTarget.value) == "Journey") {
      document.classList.toggle("d-none")
    }

    // this.typeTarget.addEventListener("input", () => document.getElementById(this.typeTarget.value).classList.toggle("d-none"));

    // if (this.typeTarget.addEventListener("input", () => document.getElementById(this.typeTarge.value).classList.toggle("d-none"))) {
    // }
  }
  change() {
    let select = document.querySelector('#selector');
        let result = document.querySelector('#result');
        select.addEventListener('input', function () {
            result.textContent = this.typeTarget.value;
        });
  }
    // if (journey == this.typeTarget.innerText) {
    //   journey.classList.toggle("d-none")
    // }

    // if (this.typeTarget.innerText == ["Journey", "Flight", "Train", "Bus", "Boat"]) {
    //   this.typeTarget.classList.toggle(".d-none")
    // }
}
