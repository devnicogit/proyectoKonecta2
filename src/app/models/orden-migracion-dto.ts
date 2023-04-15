export class OrdenMigracionDto {
    id?: number;
    telefono: number;
    asesor: number;
    plan: number;
    fecha: string;
    pdf?: string;
    caracteristica: string;
  
    constructor(telefono: number, asesor: number, plan: number, fecha: string, pdf: string) {
      this.telefono = telefono;
      this.asesor = asesor;
      this.plan = plan;
      this.fecha = fecha;
      this.pdf = pdf;
    }


  
  }