import React from 'react';
import PropTypes from 'prop-types';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>New Job Form</h2>
        <div>
          <input type="text" placeholder="Title"/>
        </div>
        <div>
          <textarea placeholder="Description"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default JobForm;
