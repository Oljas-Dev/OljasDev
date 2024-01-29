import PropTypes from "prop-types";

import Nav from "./Nav";
import NoteList from "./NoteList";

Homepage.propTypes = {
  notes: PropTypes.array,
};

function Homepage({ notes }) {
  return (
    <main>
      <Nav />
      <NoteList notes={notes} />
    </main>
  );
}

export default Homepage;
