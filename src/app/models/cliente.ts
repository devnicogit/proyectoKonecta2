import { PlanPostpago } from "./plan-postpago";
import { TipoCliente } from "./tipo-cliente";

export class Cliente {
    clienteId?: number | null = null;
    dni: string;
    nombre: string;
    apellido: string;
    direccion: string;
    tipoClienteIds: number[];
    //telefono: string;
    //tipoCliente: TipoCliente;
    //planPostpago: PlanPostpago;

    /*constructor(nombre: string, apellido: string,direccion: string, telefono: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;

    }*/


    /*constructor(nombre: string, apellido: string,direccion: string, telefono: string, planPostpago: PlanPostpago, tipoCliente: TipoCliente) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipoCliente = tipoCliente;
        this.planPostpago = planPostpago;
    }
*/
    constructor(dni: string,nombre: string, apellido: string,direccion, tipoClienteIds:number[]) {
        this.dni=dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.tipoClienteIds = tipoClienteIds;
    }

}