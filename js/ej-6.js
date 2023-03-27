/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
    constructor(isbn, titulo, autor, numDePaginas) {
      this._isbn = isbn;
      this._titulo = titulo;
      this._autor = autor;
      this._numDePaginas = numDePaginas;
    }
    set isbn(valor) {
      this._isbn = valor;
    }
    set titulo(valor) {
      this._titulo = valor;
    }
    set autor(valor) {
      this._autor = valor;
    }
    set numDePaginas(valor) {
      this._numDePaginas = valor;
    }
    get mostrarLibro() {
      return `El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._numDePaginas} páginas`;
    }
  }
  
  let libro1 = new Libro(
    "9780936388878",
    "Don Quijote de la Mancha",
    "Miguel de Cervantes",
    1345
  );
  
  let libro2 = new Libro(
    "9789877183078",
    "El diario de Ana Frank",
    "Ana Frank",
    459
  );
  document.write("<h3>",libro1.mostrarLibro, "<br>");
  document.write("<h3>",libro2.mostrarLibro, "<br>");

  if (libro1._numDePaginas > libro2._numDePaginas) {
    document.write(
      `<br> <h4>Libro ${libro1._titulo}, tiene más paginas que el libro ${libro2._titulo}.</h4>`
    );
  } else {
    document.write(
      `<br> <h4>Libro ${libro2._titulo}, tiene más paginas que el libro ${libro1._titulo}.</h4>`
    );
  }