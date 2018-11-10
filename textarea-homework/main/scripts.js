class ResizingTextArea {
  constructor (min, max) {
    this.minRows = min
    this.maxRows = max
    this.mainTextarea = document.getElementById(`main-textarea`)
    this.rowsMaxChars = this.minRows * this.mainTextarea.cols + this.minRows
    this.mainTextarea.rows = this.minRows
  }

  changeScrollbarVisibility () {
    if (this.rowsMaxChars >= this.mainTextarea.selectionStart) {
      this.mainTextarea.style.overflow = `hidden`
    }
  }

  hasExceededMaxRows () {
    return this.rowsMaxChars < this.mainTextarea.selectionStart || this.hasMoreLinebreaksThanMinRows()
  }

  hasMoreLinebreaksThanMinRows () {
    return this.mainTextarea.value.substr(0, this.mainTextarea.selectionStart).split(`\n`).length > this.minRows
  }

  addInputListenerToTextarea () {
    let that = this
    this.mainTextarea.addEventListener(`input`, function () {
      if (that.hasExceededMaxRows()) {
        if (this.rows < that.maxRows) {
          this.rows += 1
          that.rowsMaxChars = this.rows * this.cols + this.rows
          that.handlePastedText()
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
          that.changeScrollbarVisibility()
          this.rows -= 1
          that.rowsMaxChars = this.rows * this.cols + this.rows
          if (this.value.length <= that.rowsMaxChars && !that.hasMoreLinebreaksThanMinRows()) {
            this.rows = that.minRows
          }
        }
      }
    })
  }

  handlePastedText () {
    if (this.mainTextarea.selectionStart > this.rowsMaxChars) {
      let needRows = this.mainTextarea.selectionStart / this.mainTextarea.cols
      if (needRows > this.maxRows) {
        this.mainTextarea.rows = this.maxRows
      } else {
        this.mainTextarea.rows = needRows
      }
    }
  }
}

let item = new ResizingTextArea(3, 6)
item.addInputListenerToTextarea()
item.addBackspaceLisenerToTextArea()
