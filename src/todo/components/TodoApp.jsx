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
      filterView: 'all',
      todos: props.store.todos.slice(),
    };
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
    this.handleBlankTodoAdded = this.handleBlankTodoAdded.bind(this);
    this.handleFilterViewChange = this.handleFilterViewChange.bind(this);
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

  handleFilterViewChange(filterView) {
    this.setState({
      filterView,
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
      <div className="container">
        <div>
          <ControlBar
            onTodoAdded={this.handleBlankTodoAdded}
            filterView={this.state.filterView}
            onFilterViewChange={this.handleFilterViewChange}
          />
          <TodoList
            todos={this.state.todos}
            filterView={this.state.filterView}
            onTodoTitleChange={this.handleTodoTitleChange}
            onTodoIsDoneChange={this.handleTodoIsDoneChange}
          />
          <Footer
            numDoneTodos={this.calcNumDoneTodos()}
            numTotalTodos={this.calcNumTotalTodos()}
          />
        </div>
      </div>
    );
  }
}

TodoApp.propTypes = {
  store: PropTypes.object,
};

TodoApp.defaultProps = {
  store: {
    filterView: 'all',
    todos: [],
  },
};

export default TodoApp;
