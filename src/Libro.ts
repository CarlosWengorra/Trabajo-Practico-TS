
import { Autor } from './Persona';

 export interface Libro {
    titulo: string;
    autor: Autor;
    obtenerResumen(): string;
}

class LibroImpreso implements Libro {
    constructor(public titulo: string, public autor: Autor) {}

    obtenerResumen(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre} ${this.autor.apellido}`;
    }
}

export { LibroImpreso };