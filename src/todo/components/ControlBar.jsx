import React from 'react';
import PropTypes from 'prop-types';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.props.onTodoAdded();
  }

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add</button>
        <span>Show </span>
        <select>
          <option value="show-completed">All Todos</option>
          <option value="show-completed">Incomplete Only</option>
          <option value="show-completed">Complete Only</option>
        </select>
      </div>
    );
  }
}

ControlBar.propTypes = {
  onClick: PropTypes.func,
};

ControlBar.defaultProps = {
  onClick: this.addTodo,
};

export default ControlBar;
