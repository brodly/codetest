import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, name, event }) => (
  <button type="button" className={`button ${type}`} onClick={event}>{name}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  name: 'Button',
  event: () => {},
};

export default Button;
