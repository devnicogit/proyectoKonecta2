import { PlanPostpago } from "./plan-postpago";
import { TipoCliente } from "./tipo-cliente";

export class ClienteDTO {
    clienteId?: number;
    dni: string;
    nombre: string;
    apellido: string;
    direccion: string;
    /*telefono: string;
    tipoCliente: number;
    planPostpago: number;*/

    /*constructor(nombre: string, apellido: string,direccion: string, telefono: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;

    }*/

    constructor(dni: string,nombre: string, apellido: string,direccion) {
        this.dni=dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;

    }


}