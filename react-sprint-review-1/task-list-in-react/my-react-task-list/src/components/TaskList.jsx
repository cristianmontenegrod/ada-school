// src/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Agregar tarea
  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    updateLocalStorage();
  };

  // Eliminar tarea
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    updateLocalStorage();
  };

  // Editar tarea
  const editTask = (taskId, updatedTitle, updatedDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: updatedTitle, description: updatedDescription }
          : task
      )
    );
    updateLocalStorage();
  };

  // Actualizar localStorage
  const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onEdit={(title, description) =>
              editTask(task.id, title, description)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
