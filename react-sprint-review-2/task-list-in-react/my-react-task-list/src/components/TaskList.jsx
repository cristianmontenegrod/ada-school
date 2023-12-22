import React, { useState } from 'react';
import Task from './Task';
import useTaskManagement from '../hooks/useTaskManagement';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask } = useTaskManagement();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [formError, setFormError] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.length < 3) {
      setFormError('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setFormError('');
  };

  return (
    <div>
      <h2>Task List</h2>

      {/* Formulario para agregar tarea */}
      <div>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </label>

        <label>
          Descripción de la tarea:
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>

        <button onClick={handleAddTask}>Agregar Tarea</button>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
      </div>

      {/* Lista de tareas existentes */}
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onEdit={(title, description) => editTask(task.id, title, description)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
