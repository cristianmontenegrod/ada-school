let listaDeContactos = [
  {
    id: 1,
    nombres: "John",
    apellidos: "Doe",
    telefono: "123-456-7890",
    ubicaciones: [
      { ciudad: "Ciudad1", direccion: "Dirección1" },
      { ciudad: "Ciudad2", direccion: "Dirección2" }
    ]
  },
  {
    id: 2,
    nombres: "Jane",
    apellidos: "Smith",
    telefono: "987-654-3210",
    ubicaciones: [
      { ciudad: "Ciudad3", direccion: "Dirección3" },
      { ciudad: "Ciudad4", direccion: "Dirección4" }
    ]
  },
  {
    id: 3,
    nombres: "Alice",
    apellidos: "Johnson",
    telefono: "555-123-4567",
    ubicaciones: [
      { ciudad: "Ciudad5", direccion: "Dirección5" },
      { ciudad: "Ciudad6", direccion: "Dirección6" }
    ]
  }
];

function agregarContacto(contacto) {
  listaDeContactos.push(contacto);
  console.log(`Contacto ${contacto.nombres} ${contacto.apellidos} agregado.`);
}

function borrarContacto(id) {
  const indiceContacto = listaDeContactos.findIndex(contacto => contacto.id === id);

  if (indiceContacto !== -1) {
    const nombreCompleto = `${listaDeContactos[indiceContacto].nombres} ${listaDeContactos[indiceContacto].apellidos}`;
    listaDeContactos.splice(indiceContacto, 1);
    console.log(`Contacto ${nombreCompleto} borrado.`);
  } else {
    console.log(`No se encontró el contacto con ID ${id}.`);
  }
}

function actualizarContacto(id, nuevoContacto) {
  const indiceContacto = listaDeContactos.findIndex(contacto => contacto.id === id);

  if (indiceContacto !== -1) {
    listaDeContactos[indiceContacto] = {
      ...listaDeContactos[indiceContacto],
      ...nuevoContacto
    };
    console.log(`Contacto ${listaDeContactos[indiceContacto].nombres} ${listaDeContactos[indiceContacto].apellidos} actualizado.`);
  } else {
    console.log(`No se encontró el contacto con ID ${id}.`);
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaDeContactos.forEach(contacto => console.log(contacto));
}

// Ejemplos de uso
agregarContacto({
  id: 4,
  nombres: "Bob",
  apellidos: "Johnson",
  telefono: "111-222-3333",
  ubicaciones: [
    { ciudad: "Ciudad7", direccion: "Dirección7" },
    { ciudad: "Ciudad8", direccion: "Dirección8" }
  ]
});

imprimirContactos();

borrarContacto(2);
imprimirContactos();

actualizarContacto(3, {
  nombres: "Alicia",
  apellidos: "Johnson",
  telefono: "555-123-4567",
  ubicaciones: [
    { ciudad: "Ciudad9", direccion: "Dirección9" },
    { ciudad: "Ciudad10", direccion: "Dirección10" }
  ]
});

imprimirContactos();

