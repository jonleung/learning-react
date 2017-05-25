import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash/collection';

import ControlBar from './ControlBar';
import TodoList from './TodoList';
import Footer from './Footer';

const uuidV4 = require('uuid/v4');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.store.todos.slice(),
    };
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
    this.handleBlankTodoAdded = this.handleBlankTodoAdded.bind(this);
  }

  handleTodoTitleChange(index, title) {
    const todos = this.state.todos.slice();
    todos[index].title = title;
    this.setState({
      todos,
    });
  }

  handleTodoIsDoneChange(index, isDone) {
    const todos = this.state.todos.slice();
    todos[index].isDone = isDone;
    this.setState({
      todos,
    });
  }

  handleBlankTodoAdded() {
    const todos = this.state.todos.slice();
    const todo = {
      id: uuidV4(),
      title: '',
      isDone: false,
    };
    todos.unshift(todo);
    this.setState({
      todos,
    });
  }

  calcNumDoneTodos() {
    return filter(this.state.todos, todo => todo.isDone).length;
  }

  calcNumTotalTodos() {
    return this.state.todos.length;
  }

  render() {
    return (
      <div>
        <ControlBar
          onTodoAdded={this.handleBlankTodoAdded}
        />
        <TodoList
          todos={this.state.todos}
          onTodoTitleChange={this.handleTodoTitleChange}
          onTodoIsDoneChange={this.handleTodoIsDoneChange}
        />
        <Footer
          numDoneTodos={this.calcNumDoneTodos()}
          numTotalTodos={this.calcNumTotalTodos()}
        />
      </div>
    );
  }
}

TodoApp.propTypes = {
  store: PropTypes.objectOf(PropTypes.array),
};

TodoApp.defaultProps = {
  store: {
    todos: [],
  },
};

export default TodoApp;
