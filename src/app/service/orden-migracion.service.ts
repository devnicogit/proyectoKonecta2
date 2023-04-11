import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdenMigracion } from '../models/orden-migracion';
import { Telefono } from '../models/telefono';

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



}