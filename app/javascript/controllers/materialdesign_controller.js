import { Controller } from "@hotwired/stimulus"
import {MDCTextField} from '@material/textfield';

// Connects to data-controller="materialdesign"
export default class extends Controller {
  connect() {
    console.log('hello')
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
  }


}
