import './task.scss'

export default class Task {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
  }
}
