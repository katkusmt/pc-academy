class MinMax {
  constructor (min, max) {
    this.minRows = min
    this.maxRows = max
    this.mainTextarea = document.getElementById(`main-textarea`)
  }

  setMinAndMaxRows () {
    this.mainTextarea.rows = this.minRows
  }
}

let item = new MinMax(3, 6)
item.setMinAndMaxRows()
