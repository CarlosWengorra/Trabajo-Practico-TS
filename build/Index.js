"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Persona_1 = require("./Persona");
const Libro_1 = require("./Libro");
const Biblioteca_1 = require("./Biblioteca");

const autor1 = new Persona_1.Autor("J.K.", "Rowling");
const autor2 = new Persona_1.Autor("Stephen", "King");
const libro1 = new Libro_1.LibroImpreso("Harry Potter and the Philosopher's Stone", autor1);
const libro2 = new Libro_1.LibroImpreso("The Shining", autor2);

const biblioteca = new Biblioteca_1.Biblioteca();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarCatalogo();
