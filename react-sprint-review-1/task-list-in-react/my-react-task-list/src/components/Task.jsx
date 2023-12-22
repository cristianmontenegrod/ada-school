// src/components/Task.jsx
import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTitle, editedDescription);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>
            {task.title} - {task.completed ? 'Completed' : 'Pending'}
          </span>
          <button onClick={onDelete}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
