import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fullpage"
export default class extends Controller {
  static targets = ['section', 'indicator']
  static values = {
    index: {
      type: Number,
      default: 0
    },
    activeClasses: Array,
    inactiveClasses: Array
  }

  connect() {
    // this.currentYPos = 0
    console.log("hello")
  }

  indexValueChanged(value, previousValue) {
    console.log('index:', value)
    this.setActiveClasses()
  }

  scroll(event) {
    // event.window
    // get scroll position
    // console.log(this.element.scrollTop)
    // figure out which section is 0px from top
    // figure out which position it is of sections
    this.indexValue = Math.round(this.element.scrollTop / this.element.offsetHeight)
    // console.log(currentIndex)
  }

  setActiveClasses() {
    const currentIndicator = this.indicatorTargets[this.indexValue]
    // change the styles of the indicators
    this.indicatorTargets.forEach((indicator) => {
      // remove all active classes
      this.activeClassesValue.forEach((activeClass) => {
        indicator.classList.remove(activeClass)
      })
      // apply inactive classes
      this.inactiveClassesValue.forEach((inactiveClass) => {
        indicator.classList.add(inactiveClass)
      })
    })
    // remove inactive class from selected
    this.inactiveClassesValue.forEach((inactiveClass) => {
      currentIndicator.classList.remove(inactiveClass)
    })
    // apply activeclass to selected
    this.activeClassesValue.forEach((activeClass) => {
      currentIndicator.classList.add(activeClass)
    })
  }
}
