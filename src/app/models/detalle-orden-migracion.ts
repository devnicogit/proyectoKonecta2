import { OrdenMigracion } from "./orden-migracion";

export class DetalleOrdenMigracion {
    id?: number;
    ordenMigracion: OrdenMigracion;
    caracteristicasPlan: string;
    detallesAsesor: string;

    constructor(ordenMigracion: OrdenMigracion,caracteristicasPlan: string, detallesAsesor:string) {
        this.ordenMigracion = ordenMigracion;
        this.caracteristicasPlan = caracteristicasPlan;
        this.detallesAsesor = detallesAsesor;
    }
}