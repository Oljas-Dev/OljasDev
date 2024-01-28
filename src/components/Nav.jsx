import Button from "./Button";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <input
        type="search"
        className={styles.searchIcon}
        placeholder="Search here..."
      ></input>
      <Button />
    </nav>
  );
}

export default Nav;
