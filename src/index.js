import './styles/styles.scss'

import TaskList from './components/task-list/task-list'
import ContactList from './components/contact-list/contact-list'

const personalTasks = new TaskList('#personal-tasks', { title: 'Personal tasks' })
const workTasks = new TaskList('#work-tasks', { title: 'Work tasks' })

const personalContacts = new ContactList('#personal-contacts', { title: 'Personal contacts' })
const workContacts = new ContactList('#work-contacts', { title: 'Work contacts' })

// const dialog = new Dialog('#random-dialog')
//
// dialog.open({
//   header: 'Random dialog',
//   body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>'
// })

// list.addTask('teste 2')
// list.addTask('teste 3')
// list.addTask('teste 4')
// list.addTask('teste 5')
