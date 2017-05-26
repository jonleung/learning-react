import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World! 🐰</h1>
      </div>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
