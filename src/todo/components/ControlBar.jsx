import React from 'react';

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
    );
  }
}

export default ControlBar;
