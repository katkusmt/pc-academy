class ResizingTextArea {
  constructor (min, max) {
    this.minRows = min
    this.maxRows = max
    this.mainTextarea = document.getElementById(`main-textarea`)
    this.rowsMaxChars = this.mainTextarea.rows * this.mainTextarea.cols
    this.mainTextarea.rows = this.minRows
  }

  addsomeshit () {
    if (this.mainTextarea.rows === this.minRows) {
      this.mainTextarea.classList.add(`no-vertical-scrollbar`)
    } else if (this.rowsMaxChars < this.mainTextarea.value.length && this.mainTextarea.classList.contains(`no-vertical-scrollbar`)) {
      this.mainTextarea.classList.remove(`no-vertical-scrollbar`)
    }
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
          that.rowsMaxChars = this.rows * this.cols + this.rows
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
          that.rowsMaxChars = this.rows * this.cols + this.rows
          if (this.value.length <= that.rowsMaxChars) {
            this.rows = that.minRows
          }
          that.addsomeshit()
        }
      }
    })
  }
}

let item = new ResizingTextArea(3, 6)
item.addInputListenerToTextarea()
item.addBackspaceLisenerToTextArea()
