import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <div className="footer">{props.numDoneTodos} / {props.numTotalTodos}</div>
  );
}

Footer.propTypes = {
  numDoneTodos: PropTypes.number,
  numTotalTodos: PropTypes.number,
};

Footer.defaultProps = {
  numDoneTodos: '?',
  numTotalTodos: '?',
};

export default Footer;
