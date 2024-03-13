"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarCatalogo() {
        console.log("Catálogo de la biblioteca:");
        this.libros.forEach(libro => {
            console.log(libro.obtenerResumen());
        });
    }
}
exports.Biblioteca = Biblioteca;
