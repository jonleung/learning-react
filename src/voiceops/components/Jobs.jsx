import React from 'react';
import PropTypes from 'prop-types';

import Job from './Job';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const jobs = this.props.jobs.map((job) => {
      return (
        <Job
          key={job.id}
          title={job.title}
          description={job.description}
          timestamp={job.timestamp.toString()}
        />
      );
    });

    return (
      <div>
        <h2>Job Listings</h2>
        {jobs}
      </div>
    );
  }
}

export default Jobs;
