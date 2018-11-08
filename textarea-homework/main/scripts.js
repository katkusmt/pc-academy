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

  hasExceededMaxRows () {
    return this.rowsMaxChars < this.mainTextarea.value.length ||
    this.mainTextarea.value.substr(0, this.mainTextarea.selectionStart).split(`\n`).length > this.minRows
  }

  addInputListenerToTextarea () {
    let that = this
    this.mainTextarea.addEventListener(`input`, function () {
      if (that.hasExceededMaxRows()) {
        if (this.rows < that.maxRows) {
          this.rows += 1
          that.rowsMaxChars = this.rows * this.cols
        }
      }
    })
  }

  addBackspaceLisenerToTextArea () {
    let that = this
    this.mainTextarea.addEventListener(`keydown`, function (e) {
      let keyCode = e.keyCode
      if (keyCode === 8 || keyCode === 46) {
        if (this.rows > that.minRows) {
          this.rows -= 1
          that.rowsMaxChars = this.rows * this.cols
        }
      }
    })
  }
}

let item = new MinMax(3, 6)
item.setMinAndMaxRows()
item.addInputListenerToTextarea()
item.addBackspaceLisenerToTextArea()
