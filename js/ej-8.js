/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
    saludar() {
      document.write(
        `<p>Hola! Me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`
      );
    }
    despedirse() {
      document.write("Chau.<br>");
    }
  }
  
  const persona1 = new Persona("Mariana", 23, "Arquitecta");
  const persona2 = new Persona("Carlos", 33, "electricista");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
