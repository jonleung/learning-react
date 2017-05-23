if (module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component { 
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

class ControlBar extends React.Component { 

}

class TodoList extends React.Component { 

}

class Todo extends React.Component { 

}

const TODOS = {
  todos: [
    {
      title: "Task 1",
      isDone: true,
    },
    {
      title: "Task 2",
      isDone: true,
    },
    {
      title: "Task 3",
      isDone: false,
    },
    {
      title: "Task 4",
      isDone: false,
    },
    {
      title: "Task 5",
      isDone: false,
    },
  ]
}

ReactDOM.render(
  <TodoApp products={TODOS} />,
  document.getElementById('root')
);
