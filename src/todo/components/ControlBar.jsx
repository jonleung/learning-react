import React from 'react';
import PropTypes from 'prop-types';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.handleFilterViewChange = this.handleFilterViewChange.bind(this);
  }

  addTodo() {
    this.props.onTodoAdded();
  }

  handleFilterViewChange(e) {
    this.props.onFilterViewChange(e.target.value);
  }

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add</button>  
        <div className="view-selector">
          <span>View: </span>
          <select
            value={this.props.filterView}
            onChange={this.handleFilterViewChange}
          >
            <option value="all">All Todos</option>
            <option value="incomplete">Incomplete Only</option>
            <option value="complete">Complete Only</option>
          </select>
        </div>
      </div>
    );
  }
}

ControlBar.propTypes = {
  onTodoAdded: PropTypes.func,
  filterView: PropTypes.string,
  onFilterViewChange: PropTypes.func
};

ControlBar.defaultProps = {
  onTodoAdded: null,
  filterView: 'all',
  onFilterViewChange: null,
};

export default ControlBar;
