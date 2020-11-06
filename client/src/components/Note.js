import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const { onDelete, id, onEdit, title, content } = props;

  const handleOnDelete = () => {
    onDelete(id);
  };

  const handleOnEdit = () => onEdit();

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <span className="noteEdit" onClick={handleOnEdit}>
        EDIT
      </span>
      <button onClick={handleOnDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
