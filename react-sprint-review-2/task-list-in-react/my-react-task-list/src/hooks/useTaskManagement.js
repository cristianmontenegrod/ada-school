import { useState, useEffect } from 'react';

const useTaskManagement = () => {
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

  return { tasks, addTask, deleteTask, editTask };
};

export default useTaskManagement;
