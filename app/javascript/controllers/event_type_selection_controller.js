import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["type"]

  connect() {
    console.log(this.typeTarget.innerHTML)
  }
    // if (journey == this.typeTarget.innerText) {
    //   journey.classList.toggle("d-none")
    // }

    // if (this.typeTarget.innerText == ["Journey", "Flight", "Train", "Bus", "Boat"]) {
    //   this.typeTarget.classList.toggle(".d-none")
    // }
  myFunction() {
    const selector = this.getElementById("selector");
    this.getElementById("demo").value = selector.options[selector.selectedIndex].text;
  }
}
