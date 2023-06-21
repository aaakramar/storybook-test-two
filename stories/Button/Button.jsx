import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import "./spinner.css";
import LoadingSpinner from "./spinner";

export const Button = ({
  type = "primary",
  backgroundColor = null,
  className,
  size = "medium",
  width,
  label,
  fontColor,
  loading,
  disabled = false,
  onClick,
  ...props
}) => {
  const buttonType = (type) => {
    if (type === "primary") {
      return "storybook-button--primary";
    } else if (type === "secondary") {
      return "storybook-button--secondary";
    } else if (type === "danger") {
      return "storybook-button--danger";
    }
    return "storybook-button--primary";
  };

  const mode = buttonType(type);
  return (
    <button
      type="button"
      id="storybook-button"
      className={[
        className ? className : "",
        "storybook-button",
        `storybook-button--${size}`,
        mode,
      ].join(" ")}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        color: fontColor,
      }}
      loading={loading ? loading : false}
      {...props}
      disabled={loading === true ? true : disabled}
      onClick={() => onClick()}
    >
      {loading ? (
        <LoadingSpinner
          loading={loading}
          height={
            size === "small" ? "7.5px" : size === "medium" ? "9.5px" : "11.5px"
          }
          width={
            size === "small" ? "7.5px" : size === "medium" ? "9.5px" : "11.5px"
          }
        />
      ) : (
        label
      )}
    </button>
  );
};

// Button.defaultProps = {
//   backgroundColor: null,
//   type: "secondary",
//   size: 'medium',
//   onClick: undefined,
// };
