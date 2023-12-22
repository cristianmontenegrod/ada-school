// src/components/Task.jsx
import React from 'react';

const Task = ({ task }) => {
  return (
    <li>
      {task.name} - {task.completed ? 'Completed' : 'Pending'}
    </li>
  );
};

export default Task;