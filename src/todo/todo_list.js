class TodoList {
  constructor () {
    this.items = []
  }

  addToFront (todo) {
    this.items.unshift(todo)
  }
}

export default TodoList