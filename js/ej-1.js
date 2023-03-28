//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

class Auto {
  constructor(color, marca, modelo, estado = false) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
  }
  set apagar(value = false) {
    this.estado = value;
  }
  set encender(value = true) {
    this.encender = vaule;
  }
}
let color = prompt("¿Qué color busca?");

let marca = prompt("¿Qué marca busca?");

let modelo = prompt("¿Qué modelo busca?");

let auto = new Auto(color, marca, modelo);
document.write(auto.color, "<br>");
document.write(auto.marca, "<br>");
document.write(auto.modelo);
