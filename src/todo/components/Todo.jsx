import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoTitleChange = this.handleTodoTitleChange.bind(this);
    this.handleTodoIsDoneChange = this.handleTodoIsDoneChange.bind(this);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleTodoTitleChange(e) {
    this.props.onTodoTitleChange(this.props.index, e.target.value);
  }

  handleTodoIsDoneChange(e) {
    this.props.onTodoIsDoneChange(this.props.index, e.target.checked);
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
          ref={(input) => { this.textInput = input; }}
          type="text"
          value={this.props.title}
          onChange={this.handleTodoTitleChange}
        />
      </li>
    );
  }
}

Todo.propTypes = {
  isDone: PropTypes.bool,
  title: PropTypes.string,
  index: PropTypes.number,
  onTodoTitleChange: PropTypes.func,
  onTodoIsDoneChange: PropTypes.func,
};
Todo.defaultProps = {
  isDone: false,
  title: 'Untitled',
  index: 0,
  onTodoTitleChange: this.handleTodoTitleChange,
  onTodoIsDoneChange: this.handleTodoIsDoneChange,
};

export default Todo;
