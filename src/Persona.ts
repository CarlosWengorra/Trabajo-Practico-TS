// Define la interfaz Persona
 export interface Persona {
    nombre: string;
    apellido: string;
}

// Implementa la clase Autor que cumple con la interfaz Persona
 export class Autor implements Persona {
    constructor(public nombre: string, public apellido: string) {}
}