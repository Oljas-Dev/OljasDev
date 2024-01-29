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
        {notes
          .map((note) => <Note note={note} key={note.id} />)
          .slice()
          .sort((n1, n2) => (n2.date < n1.date ? +1 : -1))}
      </div>
    </section>
  );
}

export default NoteList;
