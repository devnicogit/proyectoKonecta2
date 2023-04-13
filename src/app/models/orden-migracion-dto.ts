export class OrdenMigracionDto {
    id?: number;
    telefono: number;
    asesor: number;
    plan: number;
    fecha: string;
  
    constructor(telefono: number, asesor: number, plan: number, fecha: string) {
      this.telefono = telefono;
      this.asesor = asesor;
      this.plan = plan;
      this.fecha = fecha;
    }


  
  }