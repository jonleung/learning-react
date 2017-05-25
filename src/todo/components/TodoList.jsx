import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash/collection';

import Todo from './Todo';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
  }

  handleTodoTitleChange(index, title) {
    this.props.onTodoTitleChange(parseInt(index, 0), title);
  }

  handleTodoIsDoneChange(index, isDone) {
    this.props.onTodoIsDoneChange(parseInt(index, 0), isDone);
  }

  render() {
    // filter(this.state.todos, todo => todo.isDone)
    const filteredTodos = filter(this.props.todos, (todo) => {
      switch (this.props.filterView) {
        case 'all' : {
          return true;
        }
        case 'complete' : {
          return todo.isDone === true;
        }
        case 'incomplete' : {
          return todo.isDone === false;
        }
        default: {
          throw ({ error: 'The programmer fucked up. Invalid filterView set. You fucked up. Use an Enum plz.' });
        }
      }
    });
    const todoComponents = filteredTodos.map((todo, i) =>
      (<Todo
        key={todo.id}
        index={i}
        isDone={todo.isDone}
        title={todo.title}
        onTodoTitleChange={this.handleTodoTitleChange}
        onTodoIsDoneChange={this.handleTodoIsDoneChange}
      />),
    );

    return (
      <div>
        <ol>
          {todoComponents}
        </ol>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onTodoTitleChange: PropTypes.func,
  onTodoIsDoneChange: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoTitleChange: this.handleTotodTitleChange,
  onTodoIsDoneChange: this.handleTodoIsDoneChange,
};

export default TodoList;
