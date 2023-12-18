// Crea una lista de contactos con datos predefinidos.
let listaDeContactos = [
    { nombreCompleto: "John Doe" },
    { nombreCompleto: "Jane Smith" },
    { nombreCompleto: "Alice Johnson" }
  ];
  
  // Función para añadir un nuevo contacto a la lista.
  function agregarContacto(nombreApellido) {
    listaDeContactos.push({ nombreCompleto: nombreApellido });
    console.log(`Contacto ${nombreApellido} agregado.`);
  }
  
  // Función para borrar un contacto existente de la lista.
  function borrarContacto(nombreApellido) {
    const indiceContacto = listaDeContactos.findIndex(contacto =>
      contacto.nombreCompleto.toLowerCase() === nombreApellido.toLowerCase()
    );
  
    if (indiceContacto !== -1) {
      listaDeContactos.splice(indiceContacto, 1);
      console.log(`Contacto ${nombreApellido} borrado.`);
    } else {
      console.log(`No se encontró el contacto ${nombreApellido}.`);
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista.
  function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach(contacto => console.log(contacto.nombreCompleto));
  }
  
  // Ejemplos de uso
  agregarContacto("Bob Johnson");
  imprimirContactos();
  
  borrarContacto("Jane Smith");
  imprimirContactos();
  