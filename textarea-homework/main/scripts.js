class ResizingTextarea {
  constructor (min, max) {
    this.minRows = min
    this.maxRows = max
    this.mainTextarea = document.getElementById(`main-textarea`)
    this.currentRowsMaxChars = this.minRows * this.mainTextarea.cols + this.minRows
    this.currentCharsInTextarea = 0
    this.mainTextarea.rows = this.minRows
  }

  changeScrollbarVisibility () {
    if (this.currentRowsMaxChars >= this.currentCharsInTextarea) {
      this.mainTextarea.style.overflow = `hidden`
    } else {
      this.mainTextarea.style.overflow = `visible`
    }
  }

  getLinebreaks () {
    let textAreaArray = this.mainTextarea.value.substr(0, this.selectionStart).split(`\n`)
    let test = []
    this.currentCharsInTextarea = 0
    for (let i = 0; i < textAreaArray.length; i++) {
      let totalRows = textAreaArray[i].length / (this.mainTextarea.cols + i + 1)
      test[i] = totalRows * (this.mainTextarea.cols + i + 1)
    }
    let that = this
    test.forEach(function (item, i) {
      if (item > 0) {
        that.currentCharsInTextarea += that.mainTextarea.cols + 1
      } else {
        that.currentCharsInTextarea += item
      }
    })
    console.log(this.currentCharsInTextarea)
  }

  addInputListenerToTextarea () {
    let that = this
    this.mainTextarea.addEventListener(`input`, function () {
      that.getLinebreaks()
      if (that.currentRowsMaxChars < that.currentCharsInTextarea) {
        if (this.rows < that.maxRows) {
          this.rows += 1
          that.currentRowsMaxChars = this.rows * this.cols + this.rows
          that.handlePastedText()
        }
        that.changeScrollbarVisibility()
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
          that.currentRowsMaxChars = this.rows * this.cols + this.rows
          if (that.currentCharsInTextarea <= that.minRows * this.cols) {
            this.rows = that.minRows
          }
        }
      }
    })
  }

  handlePastedText () {
    if (this.mainTextarea.selectionStart > this.currentRowsMaxChars) {
      let needRows = this.mainTextarea.selectionStart / this.mainTextarea.cols
      if (needRows > this.maxRows) {
        this.mainTextarea.rows = this.maxRows
      } else {
        this.mainTextarea.rows = needRows
      }
    }
  }
}

let item = new ResizingTextarea(3, 6)
item.addInputListenerToTextarea()
item.addBackspaceLisenerToTextArea()
