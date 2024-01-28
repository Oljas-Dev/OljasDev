import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.btn}>
      <span>
        <img src="./add-white.png" alt="+" />
      </span>
      Add
    </button>
  );
}

export default Button;
