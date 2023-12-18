// list-edit-router.js
const express = require('express');
const bodyParser = require('body-parser');
const listEditRouter = express.Router();

// Middleware para analizar el cuerpo de las solicitudes POST
listEditRouter.use(bodyParser.json());

// Ruta para crear una nueva tarea (POST)
listEditRouter.post('/create', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: 'Tarea creada con éxito', task: newTask });
});

// Ruta para eliminar una tarea por ID (DELETE)
listEditRouter.delete('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.json({ message: 'Tarea eliminada con éxito' });
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

// Ruta para actualizar una tarea por ID (UPDATE)
listEditRouter.put('/update/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    res.json({ message: 'Tarea actualizada con éxito', task: tasks[index] });
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

module.exports = listEditRouter;
