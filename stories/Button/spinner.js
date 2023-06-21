import React from "react";

const LoadingSpinner = (props) => {
  if (props.loading) {
    return (
      <div className="spinner-container">
        <div
          className={`spinner is-elastic animate-spin`}
          style={{
            height: props.height,
            width: props.width,
            borderColor: "#FFFFFF",
            borderRightColor: "#4f46e5",
          }}
        ></div>
        {props.helperText ? props.helperText : ""}
      </div>
    );
  }
};
export default LoadingSpinner;
