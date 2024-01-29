import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Homepage from "./components/Homepage";
import FormAddNote from "./components/FormAddNote";

const initialState = [
  {
    id: 1234,
    section: "home",
    title: "new Note",
    description: "This is just another note.",
    date: new Date().toLocaleString(),
  },
  {
    id: 2345,
    section: "personal",
    title: "Personal Note",
    description: "This is just another personal note.",
    date: new Date().toLocaleString(),
  },
];

function App() {
  const [notes, setNotes] = useState(initialState);

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage notes={notes} onAddNote={handleAddNote} />}
        />
        <Route
          path="form"
          element={<FormAddNote onAddNote={handleAddNote} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
