// Importa las clases y interfaces necesarias
import { Autor } from './Persona';
import { LibroImpreso } from './Libro';
import { Biblioteca } from './Biblioteca';

// Crea instancias de objetos para representar autores y libros
const autor1 = new Autor("J.K.", "Rowling");
const autor2 = new Autor("Stephen", "King");

const libro1 = new LibroImpreso("Harry Potter and the Philosopher's Stone", autor1);
const libro2 = new LibroImpreso("The Shining", autor2);

// Crea una instancia de la biblioteca
const biblioteca = new Biblioteca();

// Agrega algunos libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

// Muestra el catálogo de la biblioteca
biblioteca.mostrarCatalogo();