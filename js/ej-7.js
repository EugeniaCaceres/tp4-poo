/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  iguales(contacto) {
    return this.nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.contactos.length === this.tamano) {
      console.log("No se puede añadir más contactos");
      return;
    }
    if (this.existeContacto(contacto)) {
      console.log(`El contacto ${contacto.nombre} ya existe en la agenda`);
      return;
    }
    this.contactos.push(contacto);
    console.log(`El contacto ${contacto.nombre} se ha añadido correctamente`);
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.iguales(contacto));
  }

  listarContactos() {
    console.log("Listado de contactos:");
    this.contactos.forEach((c) => {
      console.log(`Nombre: ${c.nombre}, Teléfono: ${c.telefono}`);
    });
  }

  //ingreso nombre
  //itero por cada contacto (ahora llamado "c") de la lista de contactos
  //comparo el nombre de cada contacto "c" contra el parametro nombre
  // si lo encuentra, osea que se cumple la igualdad, devuelvo true, sino devuelvo false
  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`El teléfono de ${nombre} es ${contacto.telefono}`);
    } else {
      console.log(`No se encontró el contacto ${nombre} en la agenda`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.iguales(contacto));
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log(
        `El contacto ${contacto.nombre} se ha eliminado correctamente`
      );
    } else {
      console.log(`El contacto ${contacto.nombre} no existe en la agenda`);
    }
  }

  agendaLlena() {
    return this.contactos.length === this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

// main
function mostrarMenu() {
  console.log("Menú de opciones:");
  console.log("1. Añadir contacto");
  console.log("2. Buscar contacto");
  console.log("3. Listar contactos");
  console.log("4. Eliminar contacto");
  console.log("5. Salir");
}

const agenda = new Agenda();
let opcion;

do {
  mostrarMenu();
  opcion = parseInt(
    prompt(
      "Selecciona una opción del menú: 1 para introducir el nombre del contacto. 2 para buscar un contacto. 3 para listar los contactors. 4 para eliminar un contacto. 5 para salir."
    )
  );
  switch (opcion) {
    case 1:
      const nombre = prompt("Introduce el nombre del contacto");
      const telefono = prompt("Introduce el teléfono del contacto");
      const contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
      break;
    case 2:
      const nombreBuscar = prompt("Introduce el nombre del contacto a buscar");
      agenda.buscarContacto(nombreBuscar);
      break;
    case 3:
      agenda.listarContactos();
      break;
    case 4:
      const nombreEliminar = prompt(
        "Introduce el nombre del contacto a eliminar"
      );
      const contactoEliminar = new Contacto(nombreEliminar, "");
      agenda.eliminarContacto(contactoEliminar);
      break;
    case 5:
      console.log("Saliendo.");
  }
} while (opcion !== 5);
