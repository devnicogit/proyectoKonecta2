import { PlanPostpago } from "./plan-postpago";
import { TipoCliente } from "./tipo-cliente";

export class Cliente {
    clienteId?: number | null = null;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    tipoCliente: TipoCliente;
    planPostpago: PlanPostpago;

    /*constructor(nombre: string, apellido: string,direccion: string, telefono: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;

    }*/


    constructor(nombre: string, apellido: string,direccion: string, telefono: string, planPostpago: PlanPostpago, tipoCliente: TipoCliente) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipoCliente = tipoCliente;
        this.planPostpago = planPostpago;
    }


}