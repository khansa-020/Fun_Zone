import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; // Import the CSS file for styling

function Button({ onClick, disabled, children }) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
