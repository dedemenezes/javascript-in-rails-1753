import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ['container']

  connect() {
    console.log('Form controller CONNECTED!!')
  }

  display() {
    console.log(this.containerTarget)
    this.containerTarget.classList.toggle('d-none')
    // document.querySelector() NEVER USE THIS!
  }
}
