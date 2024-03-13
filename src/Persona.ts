
 export interface Persona {
    nombre: string;
    apellido: string;
}

 class Autor implements Persona {
    constructor(public nombre: string, public apellido: string) {}
}

export { Autor };