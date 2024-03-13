
import { Autor } from './Persona';
import { LibroImpreso } from './Libro';
import { Biblioteca } from './Biblioteca';

const autor1 = new Autor("J.K.", "Rowling");
const autor2 = new Autor("Stephen", "King");

const libro1 = new LibroImpreso("Harry Potter and the Philosopher's Stone", autor1);
const libro2 = new LibroImpreso("The Shining", autor2);

const biblioteca = new Biblioteca();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarCatalogo();