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
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
  }

  handleTodoTitleChange(index, title) {
    let todos = this.state.todos.slice();
    todos[index].title = title;
    this.setState({
      todos: todos
    })
  }

  handleTodoIsDoneChange(index, isDone) {
    let todos = this.state.todos.slice();
    todos[index].isDone = isDone;
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <ControlBar></ControlBar>
        <TodoList 
          todos={this.state.todos}
          onTodoTitleChange={this.handleTodoTitleChange}
          onTodoIsDoneChange={this.handleTodoIsDoneChange}
        >
        </TodoList>
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
  constructor(props) {
    super(props);
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
  }

  handleTodoTitleChange(index, title) {
    this.props.onTodoTitleChange(parseInt(index), title);
  }

  handleTodoIsDoneChange(index, isDone) {
    this.props.onTodoIsDoneChange(parseInt(index), isDone);
  }

  render() {
    let todoComponents = this.props.todos.map((todo, i) => {
      return (
        <Todo
          key={i}
          index={i}
          isDone={todo.isDone}
          title={todo.title}
          onTodoTitleChange={this.handleTodoTitleChange}
          onTodoIsDoneChange={this.handleTodoIsDoneChange}
        />
      )
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
  constructor(props) {
    super(props);
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
  }

  handleTodoTitleChange(e) {
    this.props.onTodoTitleChange(this.props.index, e.target.value);
  }

  handleTodoIsDoneChange(e) {
    this.props.onTodoIsDoneChange(this.props.index, e.target.checked)
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.isDone}
          onChange={this.handleTodoIsDoneChange}
        />
        <input 
          type="text" 
          value={this.props.title}
          onChange={this.handleTodoTitleChange}
        />
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
