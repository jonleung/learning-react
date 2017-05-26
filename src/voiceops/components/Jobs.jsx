import React from 'react';
import PropTypes from 'prop-types';

import Job from './Job';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Job Listings</h2>
        <Job />
        <Job />
        <Job />        
      </div>
    );
  }
}

export default Jobs;
