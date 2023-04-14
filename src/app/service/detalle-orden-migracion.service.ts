import { Observable } from "rxjs";
import { DetalleOrdenMigracion } from "../models/detalle-orden-migracion";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenMigracionService {
  
    ordenURL = environment.ordenURL;

  constructor(private http: HttpClient) { }




  public lista(): Observable<DetalleOrdenMigracion[]> {
    return this.http.get<DetalleOrdenMigracion[]>(this.ordenURL + 'detalle/lista');
  }


}