if (module.hot) {
  module.hot.accept()
}

import './style.scss'
import {groupBy} from 'lodash/collection'

import Todo from './todo'
import TodoList from './todo_list'

let x = new Todo("Hello World")
console.log(x.title)