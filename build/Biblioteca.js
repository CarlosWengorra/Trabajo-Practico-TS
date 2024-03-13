"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
// Implementa la clase Biblioteca
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    // Método para agregar un libro a la biblioteca
    agregarLibro(libro) {
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
exports.Biblioteca = Biblioteca;
