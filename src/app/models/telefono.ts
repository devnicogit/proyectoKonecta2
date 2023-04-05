import { Cliente } from "./cliente";
import { PlanPostpago } from "./plan-postpago";

export class Telefono {
    id?: number | null = null;
    numero: string;
    planPostpago: PlanPostpago;
    cliente: Cliente;

    constructor(numero: string, planPostpago: PlanPostpago, cliente:Cliente) {
        this.numero = numero;
        this.planPostpago = planPostpago;
        this.cliente = cliente;
    }

}