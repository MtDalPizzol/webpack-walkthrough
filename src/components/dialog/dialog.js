import './dialog.scss'
import template from './dialog.hbs'

export default class Dialog {
  constructor (selector) {
    this.container = document.querySelector(selector)
  }

  bindEvents () {
    this.btnClose.addEventListener('click', this.close.bind(this))
  }

  open (data) {
    this.render(data)
  }

  close () {
    this.dialog.parentNode.removeChild(this.dialog)
  }

  render (data) {
    const div = document.createElement('div')

    div.classList.add('dialog')
    div.innerHTML = template(data)

    this.container.appendChild(div)

    this.dialog = this.container.querySelector('.dialog')
    this.btnClose = this.dialog.querySelector('.dialog__btn--close')

    this.bindEvents()
  }
}
