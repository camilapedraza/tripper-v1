import { Controller } from "@hotwired/stimulus"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

// Connects to data-controller="address-autocomplete"
export default class extends Controller {
  static values = { apiKey: String }

  static targets = ["end_location"]

  connect() {
    this.geocoder = new MapboxGeocoder({
      accessToken: this.apiKeyValue,
      types: "country,region,place,postcode,locality,neighborhood,address,poi"
    })
    if (!this.element.querySelector(".mapboxgl-ctrl-geocoder")) {
      this.geocoder.addTo(this.element)
    }
    this.geocoder.on("result", event => this.#setInputValue(event))
    this.geocoder.on("clear", () => this.#clearInputValue())
  }
  #setInputValue(event) {
    this.end_locationTarget.value = event.result["place_name"]
  }

  #clearInputValue() {
    this.end_locationTarget.value = ""
  }
}
