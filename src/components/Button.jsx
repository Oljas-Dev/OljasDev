import PropTypes from "prop-types";

import styles from "./Button.module.css";

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

function Button({ children, type, onClick }) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
