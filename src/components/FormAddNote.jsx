import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./FormAddNote.module.css";
import { useState } from "react";

FormAddNote.propTypes = {
  onAddNote: PropTypes.func,
};

function FormAddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("personal");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleClose(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    const newNote = {
      id: new Date().getTime(),
      section: section,
      title: title,
      description: description,
      date: new Date().toLocaleString(),
    };

    onAddNote(newNote);

    navigate(-1);
  }

  return (
    <div className={styles.backdrop}>
      <form onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <h3>Add note</h3>
          <img
            src="./note-x-buttons.png"
            alt="x"
            className={styles.closeBtn}
            onClick={handleClose}
          />
        </div>

        <div className={styles.flex}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>

          <div>
            <label>Category</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option value={"personal"}>Personal</option>
              <option value={"home"}>Home</option>
              <option value={"busyness"}>Busyness</option>
            </select>
          </div>
        </div>

        <div>
          <div className={styles.flex}>
            <label>
              Description <span style={{ color: "gray" }}>(optional)</span>
            </label>
            <p>0/200</p>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add description..."
          ></textarea>
        </div>

        <div className={styles.flexEnd}>
          <Button type="cancel" onClick={handleClose}>
            <span>Cancel</span>
          </Button>
          <Button type="btn" onClick={handleSubmit}>
            <span>Add</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormAddNote;
