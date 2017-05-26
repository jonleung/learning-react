import React from 'react';
import PropTypes from 'prop-types';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    debugger
    this.props.onJobAdded();
  }

  render() {
    return (
      <div>
        <h2>New Job Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input ref="title" type="text" placeholder="Title"/>
          </div>
          <div>
            <textarea ref="description" placeholder="Description"></textarea>
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default JobForm;
