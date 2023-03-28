/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.*/

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
    console.log(
      `Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}`
    );
  }

  buscarAvion(nombreAvion) {
    const avion = this.listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avion) {
      console.log(
        `Avión ${avion.nombre}: capacidad ${avion.capacidad}, destino ${avion.destino}, pasajeros ${avion.listaPasajeros}`
      );
    } else {
      console.log(
        `El avión ${nombreAvion} no se encuentra en el aeropuerto ${this.nombreAeropuerto}`
      );
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      console.log(`Pasajero ${pasajero} abordó el avión ${this.nombre}`);
    } else {
      console.log(`El avión ${this.nombre} no tiene cupo.`);
    }
  }
}

// Crear el objeto de tipo Aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 objetos de tipo Avion
const avion1 = new Avion("Avión 1", 100, "Buenos Aires");
const avion2 = new Avion("Avión 2", 200, "Barcelona");
const avion3 = new Avion("Avión 3", 150, "Tokio");

// Agregar los aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

// Buscar el avión "Avión 2" y abordar un pasajero
aeropuertoInternacional.buscarAvion("Avión 2");
avion2.abordar("Julian Alvarez");
