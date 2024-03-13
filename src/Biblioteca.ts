// Importa la interfaz Libro del archivo Libro.ts
import { Libro } from './Libro';

// Implementa la clase Biblioteca
class Biblioteca {
    private libros: Libro[] = [];

// Método para agregar un libro a la biblioteca
agregarLibro(libro: Libro) {
    this.libros.push(libro);
}

// Método para mostrar el catálogo de libros de la biblioteca
mostrarCatalogo() {
    console.log("Catálogo de la biblioteca:");
    this.libros.forEach(libro => {
    console.log(libro.obtenerResumen());
    });
 }
}

export { Biblioteca };