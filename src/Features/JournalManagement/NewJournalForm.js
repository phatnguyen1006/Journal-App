import React, { useState, useContext } from "react";
import { ValueContext } from "./valueContext";

const NewJournalForm = ({ saveTodo }) => {
  const { state, setState } = useContext(ValueContext);

  // const state ={
  //   title: "",
  //   value: ""
  // }

  const { title, content } = state;

  const reset = () => {
    setState({
      title: "",
      content: ""
    });
  };

  console.log("render");

  return (
    <div>
      <div className="new-journal-wrapper">
        <h2>New Journal</h2>

        <div className="new-journal-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              value={title}
              onChange={(event) =>
                setState({ ...state, title: event.target.value })
              }
              className="title-input-field"
              placeholder="Journal Title"
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              value={content}
              onChange={(event) =>
                setState({ ...state, content: event.target.value })
              }
              className="description-input-field"
              rows="10"
              cols="50"
              placeholder="Journal Description"
            ></textarea>
          </div>
          <div>
            <button
              onClick={() => {
                saveTodo(state);
                reset();
              }}
              className="button-save-journal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJournalForm;
