// src/components/Task.jsx
import React, { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

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
    <Box mb={2} p={2} borderWidth="1px" borderRadius="md">
      {isEditing ? (
        <>
          <Input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <Input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleSaveClick}>
            Save
          </Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <span>
            {task.title} - {task.completed ? 'Completed' : 'Pending'}
          </span>
          <Button colorScheme="red" onClick={onDelete}>
            Delete
          </Button>
          <Button onClick={handleEditClick}>Edit</Button>
        </>
      )}
    </Box>
  );
};

export default Task;
