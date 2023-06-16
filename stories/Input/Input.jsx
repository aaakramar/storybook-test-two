import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

export const Input = ({
  onChange,
  style,
  readOnly,
  placeholder,
  disabled,
  error,
  ...props
}) => {
  const status = error ? "input-error" : "";
  return (
    <input
      className={["input", status].join(" ")}
      style={style}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
      {...props}></input>
  );
};
