import './task-list.scss'

import Task from './task'
import template from './task-list.hbs'

export default class TaskList {
  constructor (selector, settings) {
    this.selector = selector
    this.element = document.querySelector(selector)
    this.settings = settings

    this.tasks = {}

    this.render()
  }

  getTasks () {
    return this.tasks
  }

  getTask(id) {
    return this.tasks[id]
  }

  deleteTask (e) {
    delete this.tasks[e.currentTarget.value]

    this.render()
  }

  loadForm () {
    return import(/* webpackChunkName: 'task-form' */ '../task-form/task-form.js').then(({ default: TaskForm }) => {
      this.form = new TaskForm(`${this.selector} .task-list__form`)
    })
  }

  openAddTaskForm () {
    this.loadForm().then(() => {
      this.form.add()
      this.form.element.addEventListener('taskform.success', this.refresh.bind(this))
    })
  }

  openEditForm (e) {
    let data = this.getTask(e.currentTarget.value)

    this.loadForm().then(() => {
      this.form.edit(data)
      this.form.element.addEventListener('taskform.success', this.refresh.bind(this))
    })
  }

  refresh (e) {
    this.tasks[e.detail.id] = new Task(e.detail)

    this.render()
  }

  bindEvents () {
    this.btnAddTask.addEventListener('click', this.openAddTaskForm.bind(this))

    this.btnEditTask.forEach((el) => {
      el.addEventListener('click', this.openEditForm.bind(this))
    })

    this.btnDeleteTask.forEach((el) => {
      el.addEventListener('click', this.deleteTask.bind(this))
    })
  }

  render () {
    this.element.innerHTML = template({
      title: this.settings.title,
      items: this.getTasks()
    })

    // Reference elements
    this.btnAddTask = this.element.querySelector('.task-list__btn--add-task')
    this.btnEditTask = this.element.querySelectorAll('.task__btn--edit')
    this.btnDeleteTask = this.element.querySelectorAll('.task__btn--delete')

    this.bindEvents()
  }
}
