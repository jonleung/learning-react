import React from 'react';
import PropTypes from 'prop-types';

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
    const todoComponents = this.props.todos.map((todo, i) =>
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
