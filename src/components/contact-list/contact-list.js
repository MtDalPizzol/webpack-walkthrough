import './contact-list.scss'

import Contact from './contact'
import template from './contact-list.hbs'

export default class ContactList {
  constructor (selector, settings) {
    this.selector = selector
    this.element = document.querySelector(selector)
    this.settings = settings

    this.contacts = {}

    this.render()
  }

  getContacts () {
    return this.contacts
  }

  getContact(id) {
    return this.contacts[id]
  }

  deleteContact (e) {
    delete this.contacts[e.currentTarget.value]

    this.render()
  }

  loadForm () {
    return import(/* webpackChunkName: 'contact-form' */ '../contact-form/contact-form.js').then(({ default: ContactForm }) => {
      this.form = new ContactForm(`${this.selector} .contact-list__form`)
    })
  }

  openAddContactForm () {
    this.loadForm().then(() => {
      this.form.add()
      this.form.element.addEventListener('contactform.success', this.refresh.bind(this))
    })
  }

  openEditForm (e) {
    let data = this.getContact(e.currentTarget.value)

    this.loadForm().then(() => {
      this.form.edit(data)
      this.form.element.addEventListener('contactform.success', this.refresh.bind(this))
    })
  }

  refresh (e) {
    this.contacts[e.detail.id] = new Contact(e.detail)

    this.render()
  }

  bindEvents () {
    this.btnAddContact.addEventListener('click', this.openAddContactForm.bind(this))

    this.btnEditContact.forEach((el) => {
      el.addEventListener('click', this.openEditForm.bind(this))
    })

    this.btnDeleteContact.forEach((el) => {
      el.addEventListener('click', this.deleteContact.bind(this))
    })
  }

  render () {
    this.element.innerHTML = template({
      title: this.settings.title,
      items: this.getContacts()
    })

    // Reference elements
    this.btnAddContact = this.element.querySelector('.contact-list__btn--add-contact')
    this.btnEditContact = this.element.querySelectorAll('.contact__btn--edit')
    this.btnDeleteContact = this.element.querySelectorAll('.contact__btn--delete')

    this.bindEvents()
  }
}
