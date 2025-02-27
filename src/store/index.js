import { makeAutoObservable } from "mobx"

class BoardStore {
  squares = Array(9).fill(null)
  xIsNext = true

  constructor() {
    makeAutoObservable(this)
  }

  setSquare(square, value) {
    this.squares[square] = value
    this.xIsNext = !this.xIsNext
  }

  restart() {
    this.squares = Array(9).fill(null)
    this.xIsNext = true
  }
}

export const boardStore = new BoardStore()