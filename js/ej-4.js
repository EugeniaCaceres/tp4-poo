/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  get imprimirDatos() {
    return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`;
  }
}

let lista_productos = [];

let lapicera = new Producto("7734l", "Lapiceras bic", "350$");
let liquipaper = new Producto("2344l", "Liquipaper Faber Castell", "700$");
let agenda = new Producto("7895a", "Agendas Santana", "5560$");
// linea de ingresar producto en la lista

lista_productos.push(lapicera);
lista_productos.push(liquipaper);
lista_productos.push(agenda);

// linea de iterar en la lista y mostrar por pantalla
for (let x of lista_productos) {
  document.write(x.imprimirDatos + "<br>");
}
