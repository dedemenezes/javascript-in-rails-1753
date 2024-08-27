import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    // this.element => the elment that contains the DATA-CONTROLLER attribute
    flatpickr(this.element, {})
  }
}
