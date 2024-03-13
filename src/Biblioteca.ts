import { Libro } from './Libro';

class Biblioteca {
    private libros: Libro[] = [];

agregarLibro(libro: Libro) {
    this.libros.push(libro);
}

mostrarCatalogo() {
    console.log("Catálogo de la biblioteca:");
    this.libros.forEach(libro => {
    console.log(libro.obtenerResumen());
    });
 }
}

export { Biblioteca };