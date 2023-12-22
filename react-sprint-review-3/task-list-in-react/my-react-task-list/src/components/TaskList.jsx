// src/components/TaskList.jsx
import React, { useState } from 'react';
import { Box, Button, Input, Text, Heading } from '@chakra-ui/react';
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
    <Box p={4}>
      <Heading as="h2" size="md" mb={4}>
        Task List
      </Heading>

      {/* Formulario para agregar tarea */}
      <Box mb={4}>
        <label>
          Nombre de la tarea:
          <Input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </label>

        <label>
          Descripción de la tarea:
          <Input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>

        <Button colorScheme="teal" onClick={handleAddTask}>
          Agregar Tarea
        </Button>
        {formError && <Text color="red">{formError}</Text>}
      </Box>

      {/* Lista de tareas existentes */}
      <Box>
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
      </Box>
    </Box>
  );
};

export default TaskList;
