import React from 'react';
import PropTypes from 'prop-types';

import ControlBar from './ControlBar';
import TodoList from './TodoList';
import Footer from './Footer';

import { filter } from 'lodash/collection';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.store.todos.slice(),
    };
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
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

  calcNumDoneTodos() {
    return filter(this.state.todos, todo => todo.isDone).length;
  }

  calcNumTotalTodos() {
    return this.state.todos.length;
  }


  render() {
    return (
      <div>
        <ControlBar />
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
