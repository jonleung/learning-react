if (module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.data.todos.slice(),
    }
  }

  render() {
    return (
      <div>
        <ControlBar></ControlBar>
        <TodoList todos={this.state.todos}></TodoList>
      </div>
    )
  }
}

class ControlBar extends React.Component { 
  render() {
    return (
      <div>
        <button>Add</button>
        <span>Show </span>
        <select>
          <option value="show-completed">All Todos</option>
          <option value="show-completed">Incomplete Only</option>
          <option value="show-completed">Complete Only</option>
        </select>
      </div>
    )
  }
}

class TodoList extends React.Component { 
  render() {
    let todoComponents = this.props.todos.map((todo) => {
      return <Todo key={todo.id} isDone={todo.isDone} title={todo.title}/>
    })

    return (
      <div>
        <ol>
          {todoComponents}
        </ol>
      </div>
    )
  }
}

class Todo extends React.Component { 
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.isDone}/>
        <span>{this.props.title}</span>
      </li>
    )
  }
}

const DATA = {
  todos: [
    {
      id: 1,
      title: "Task 1",
      isDone: true,
    },
    {
      id: 2,
      title: "Task 2",
      isDone: true,
    },
    {
      id: 3,
      title: "Task 3",
      isDone: false,
    },
    {
      id: 4,
      title: "Task 4",
      isDone: false,
    },
    {
      id: 5,
      title: "Task 5",
      isDone: false,
    },
  ]
}

ReactDOM.render(
  <TodoApp data={DATA} />,
  document.getElementById('root')
);
