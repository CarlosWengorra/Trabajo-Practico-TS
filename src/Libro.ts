// Importa la clase Autor del archivo Persona.ts
import { Autor } from './Persona';

// Define la interfaz Libro
 export interface Libro {
    titulo: string;
    autor: Autor;
    obtenerResumen(): string;
}

// Implementa la clase LibroImpreso que cumple con la interfaz Libro
export class LibroImpreso implements Libro {
    constructor(public titulo: string, public autor: Autor) {}

    obtenerResumen(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
    }
}