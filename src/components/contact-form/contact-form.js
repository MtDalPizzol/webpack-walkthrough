import './contact-form.scss'

import Dialog from '../dialog/dialog'
import template from './contact-form.hbs'

export default class ContactForm extends Dialog {
  constructor (selector) {
    super(selector)
  }

  bindHandlers () {
    this.element = this.container.querySelector('.contact-form')

    this.element.addEventListener('submit', this.save.bind(this))
  }

  add () {
    this.open({
      header: 'Add new contact',
      body: template()
    })

    this.bindHandlers()
  }

  edit (data) {
    this.open({
      header: 'Edit contact',
      body: template(data)
    })

    this.bindHandlers()
  }

  save (e) {
    e.preventDefault()

    let data = {
      id: this.element.querySelector('.contact-form__id').value,
      title: this.element.querySelector('.contact-form__title').value,
      description: this.element.querySelector('.contact-form__description').value
    }

    if (!data.id) {
      data.id = '_' + Math.random().toString(36).substr(2, 9)
    }

    var event = new CustomEvent('contactform.success', {
      detail: data
    })

    this.element.dispatchEvent(event)
  }
}
