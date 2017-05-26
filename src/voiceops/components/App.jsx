import React from 'react';
import PropTypes from 'prop-types';

import JobForm from './JobForm';
import Jobs from './Jobs';
import Job from './Job';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Jobs Board</h1>
        <JobForm />
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
