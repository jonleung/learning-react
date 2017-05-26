import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setName = this.setName.bind(this);
  }

  componentDidMount() {
    if (this.state.name === undefined) {
      const name = prompt('What is your name?');
      this.setName(name);
    }
  }

  setName(name) {
    this.setState({
      name,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
      </div>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
