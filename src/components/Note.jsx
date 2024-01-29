import PropTypes from "prop-types";

import styles from "./Note.module.css";

Note.propTypes = {
  note: PropTypes.object,
};

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));

function Note({ note }) {
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        <div
          className={`${styles.tag} ${
            note.section === "home" && styles.tagColorGreen
          } ${note.section === "busyness" && styles.tagColorPurple} ${
            note.section === "personal" && styles.tagColorYellow
          }`}
        >
          {note.section}
        </div>
        <span className={styles.editPanel}>
          <input type="checkbox" />
          <span className={styles.edit}></span>
          <span className={styles.delete}></span>
        </span>
      </div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className={styles.flexEnd}>{note.date}</div>
    </div>
  );
}

export default Note;
