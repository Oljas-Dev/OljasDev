import PropTypes from "prop-types";

import styles from "./NoteList.module.css";
import Note from "./Note";

NoteList.propTypes = {
  notes: PropTypes.array,
};

function NoteList({ notes }) {
  return (
    <section>
      <div className={styles.list}>
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
    </section>
  );
}

export default NoteList;
