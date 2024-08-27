import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ['items', 'form']

  connect() {
    console.log(this.itemsTarget)
    console.log(this.formTarget.action)
  }

  send(event) {
    // 1. prevent the page from refreshes
    event.preventDefault()
    // 2. Submit the form ourselves
    fetch(this.formTarget.action, {
      method: 'POST',
      headers: { "Accept": 'application/json' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data.form)
        if (data.inserted_item) {
          // Insert it into the list
          this.itemsTarget.insertAdjacentHTML('beforeend', data.inserted_item)
        }
        // Replace the old form by the new empty one
        this.formTarget.outerHTML = data.form
      })
  }
}
