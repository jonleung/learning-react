import React from 'react';
import PropTypes from 'prop-types';

import JobForm from './JobForm';
import Jobs from './Jobs';
import Job from './Job';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store;
    this.handleJobAdded = this.handleJobAdded.bind(this);
  }

  handleJobAdded(job) {
    // TODO
  }

  render() {
    return (
      <div>
        <h1>Jobs Board</h1>
        <JobForm onJobAdded={this.handleJobAdded}/>
        <Jobs jobs={this.props.store.jobs} />
      </div>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
