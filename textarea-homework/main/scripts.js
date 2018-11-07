class MinMax {
  constructor (min, max) {
    this.minRows = min
    this.maxRows = max
    this.mainTextarea = document.getElementById(`main-textarea`)
    this.rowsMaxChars = 0
  }

  setMinAndMaxRows () {
    this.mainTextarea.rows = this.minRows
    this.rowsMaxChars = this.mainTextarea.rows * this.mainTextarea.cols
  }

  addInputListenerToTextarea () {
    let that = this
    if (this.mainTextarea != null) {
      this.mainTextarea.addEventListener(`input`, function () {
        if (that.rowsMaxChars < this.value.length) {
          this.rows += 1
          that.rowsMaxChars = this.rows * this.cols
        }
      })
    }
  }
}

let item = new MinMax(3, 6)
item.setMinAndMaxRows()
item.addInputListenerToTextarea()
