import { Link } from "react-router-dom";
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
      <Link style={{ textDecoration: "none" }} to="form">
        <Button type="btn">
          <>
            <img src="./add-white.png" alt="+" />
            <span>Add</span>
          </>
        </Button>
      </Link>
    </nav>
  );
}

export default Nav;
