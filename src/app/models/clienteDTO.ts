import { PlanPostpago } from "./plan-postpago";
import { TipoCliente } from "./tipo-cliente";

export class ClienteDTO {
    clienteId?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    tipoCliente: number;
    planPostpago: number;

    /*constructor(nombre: string, apellido: string,direccion: string, telefono: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;

    }*/


    constructor(nombre: string, apellido: string,direccion: string, telefono: string, planPostpago: number, tipoCliente: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipoCliente = tipoCliente;
        this.planPostpago = planPostpago;
    }


}