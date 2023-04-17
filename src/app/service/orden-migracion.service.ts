import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdenMigracion } from '../models/orden-migracion';
import { Telefono } from '../models/telefono';
import { DetalleOrdenMigracion } from '../models/detalle-orden-migracion';
import { mergeMap } from 'rxjs/operators';
import { OrdenMigracionDto } from '../models/orden-migracion-dto';

@Injectable({
  providedIn: 'root'
})
export class OrdenMigracionService {
  
    ordenURL = environment.ordenURL;



  constructor(private http: HttpClient) { }

  /*public migrar(id: number, telefono: Telefono): Observable<any> {

    return this.http.post(this.ordenURL, + `create/${id}`, telefono);
  }*/


  public migrarId(id: number): Observable<Telefono> {
    return this.http.get<Telefono>(this.ordenURL + `detail/${id}`);
  }

  


  public lista(): Observable<OrdenMigracion[]> {
    return this.http.get<OrdenMigracion[]>(this.ordenURL + 'lista');
  }

  public save(ordenMigracion: OrdenMigracionDto): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.ordenURL + 'create', ordenMigracion, {headers});
  }


  public crearOrdenMigracion(orden: any, detalleOrden: any): Observable<any> {
    const ordenMigracion = {
      fecha: orden.fecha,
      asesor: orden.asesorId,
      telefono: orden.telefonoId,
      plan: detalleOrden.planId
    };
    return this.http.post<any>(this.ordenURL + 'create', ordenMigracion).pipe(
      mergeMap((ordenCreada: any) => {
        if (!ordenCreada || !ordenCreada.id) {
          return throwError('No se ha podido crear la orden de migración');
        }
        const detalle = {
          ordenMigracion: ordenCreada.id,
          caracteristicasPlan: detalleOrden.detalle,
          detallesAsesor: orden.asesorId.nombreUsuario
        };
        return this.http.post<any>(this.ordenURL + 'createDetalle', detalle);
      })
    );
}


}