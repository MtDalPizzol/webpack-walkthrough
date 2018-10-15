import './task-form.scss'

import Dialog from '../dialog/dialog'
import template from './task-form.hbs'

export default class TaskForm extends Dialog {
  constructor (selector) {
    super(selector)
  }

  bindHandlers () {
    this.element = this.container.querySelector('.task-form')

    this.element.addEventListener('submit', this.save.bind(this))
  }

  add () {
    this.open({
      header: 'Add new task',
      body: template()
    })

    this.bindHandlers()
  }

  edit (data) {
    this.open({
      header: 'Edit task',
      body: template(data)
    })

    this.bindHandlers()
  }

  save (e) {
    e.preventDefault()

    let data = {
      id: this.element.querySelector('.task-form__id').value,
      title: this.element.querySelector('.task-form__title').value,
      description: this.element.querySelector('.task-form__description').value
    }

    if (!data.id) {
      data.id = '_' + Math.random().toString(36).substr(2, 9)
    }

    var event = new CustomEvent('taskform.success', {
      detail: data
    })

    this.element.dispatchEvent(event)
  }
}
