import React from "react";
import "./Input.scss";

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
