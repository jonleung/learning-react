if (module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'

function TodoForm(props) {
  return(
    <div>
      <input
        type = "text"
        onKeyPress = {
          (e) => {
            if(e.key === 'Enter') {
              let title = e.target.value;
              this.props.createTodo(title);
              console.log(title);
            }
          }
        }
      />
    </div>
  );
}

function Todo(props) {
  return(
    <li>props.title</li>
  )
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: Array(0),
    };
  }

  createTodo(title) {
    const todos = this.state.todos.slice();
    todos.unshift({
      title: title,
    })
    this.setState({
      todos: todos,
    })
  }

  render() {
    return (
      <TodoForm/>
      <div>
        <ol>
          {
            todos.map((todo) => {
              return (
                <div>
                  <Todo title={todo.title}/>
                </div>
              )
            })
          }
        </ol>
      </div>
      })
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <TodoList
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);