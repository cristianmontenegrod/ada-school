// Importar el módulo readline
const readline = require('readline');

// Crear la interfaz de lectura/escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tareas = [];

// Función para mostrar las tareas
function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. [${tarea.estado ? 'X' : ' '}] ${tarea.descripcion}`);
  });
  console.log();
}

// Función para añadir una tarea
function agregarTarea(indicador, descripcion) {
  const nuevaTarea = {
    indicador,
    descripcion,
    estado: false
  };
  tareas.push(nuevaTarea);
  console.log(`Tarea agregada: ${descripcion}`);
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    const tareaEliminada = tareas.splice(indice, 1)[0];
    console.log(`Tarea eliminada: ${tareaEliminada.descripcion}`);
  } else {
    console.log('Índice inválido');
  }
}

// Función para completar una tarea
function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].estado = true;
    console.log(`Tarea completada: ${tareas[indice].descripcion}`);
  } else {
    console.log('Índice inválido');
  }
}

// Preguntar al usuario qué acción realizar
function preguntarAccion() {
  rl.question('¿Qué acción deseas realizar? (agregar/eliminar/completar/mostrar/salir): ', (respuesta) => {
    if (respuesta === 'agregar') {
      rl.question('Indicador de la tarea: ', (indicador) => {
        rl.question('Descripción de la tarea: ', (descripcion) => {
          agregarTarea(indicador, descripcion);
          preguntarAccion();
        });
      });
    } else if (respuesta === 'eliminar') {
      rl.question('Índice de la tarea a eliminar: ', (indice) => {
        eliminarTarea(parseInt(indice) - 1);
        preguntarAccion();
      });
    } else if (respuesta === 'completar') {
      rl.question('Índice de la tarea a completar: ', (indice) => {
        completarTarea(parseInt(indice) - 1);
        preguntarAccion();
      });
    } else if (respuesta === 'mostrar') {
      mostrarTareas();
      preguntarAccion();
    } else if (respuesta === 'salir') {
      rl.close();
    } else {
      console.log('Acción no válida');
      preguntarAccion();
    }
  });
}

// Iniciar la aplicación preguntando por la primera acción
preguntarAccion();
