import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


export const Button = ({ type = "secondary", backgroundColor = null, size = "medium", label, children, onClick = undefined, ...props }) => {
  const mode = type === "primary" ? 'storybook-button--primary' : type === "secondary" ? 'storybook-button--secondary' : 'storybook-button--danger';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}{children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

// Button.defaultProps = {
//   backgroundColor: null,
//   type: "secondary",
//   size: 'medium',
//   onClick: undefined,
// };
