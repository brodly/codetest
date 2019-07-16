import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, name, event }) => (
  <div className={`button ${type}`}>
    <button type="button" onClick={event}>
      {name}
    </button>
  </div>
);

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.func,
};

Button.defaultProps = {
  type: 'Standard',
  name: 'Button',
  event: () => {},
};

export default Button;
