import { Button } from "./Button";
import PropTypes from "prop-types";

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  width: PropTypes.string,
  fontColor: PropTypes.string,
};
