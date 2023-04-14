import { Asesor } from "./asesor";
import { PlanPostpago } from "./plan-postpago";
import { Telefono } from "./telefono";

export class OrdenMigracion {
    id?: number;
    telefono: Telefono;
    asesor: Asesor;
    plan: PlanPostpago;
    fecha: Date;
    pdf?: string;

    constructor(telefono: Telefono,asesor: Asesor, plan:PlanPostpago, fecha:Date, pdf:string) {
        this.telefono = telefono;
        this.asesor = asesor;
        this.plan = plan;
        this.fecha = fecha;
        this.pdf = pdf;
    }

    
  }