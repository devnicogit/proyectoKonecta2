export class TipoClienteDTO {
    tipoId?: number;
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
  }