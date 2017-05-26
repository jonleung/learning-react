import React from 'react';
import PropTypes from 'prop-types';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Title</h3>
        <h3>{this.props.title}</h3>
        <p>{this.props.timestamp}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Job;
