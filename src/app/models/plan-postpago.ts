export class PlanPostpago {
    planId?: number;
    nombrePlan: string;
    costoMensual: number;

    constructor(nombrePlan: string,costoMensual: number) {
        this.nombrePlan = nombrePlan;
        this.costoMensual = costoMensual;
    }
  }