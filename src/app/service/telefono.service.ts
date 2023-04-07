import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Telefono } from "../models/telefono";
import { environment } from "src/environments/environment";
import { TelefonoDTO } from "../models/telefono-dto";

@Injectable({
    providedIn: 'root'
  })
  export class TelefonoService {
  
    telefonoURL = environment.telefonoURL;
  
    constructor(private httpClient: HttpClient) { }
  
    public lista(): Observable<Telefono[]> {
      return this.httpClient.get<Telefono[]>(this.telefonoURL + 'lista');
    }
  
    public detail(id: number): Observable<Telefono> {
      return this.httpClient.get<Telefono>(this.telefonoURL + `detail/${id}`);
    }
  
    public detailName(nombre: string): Observable<Telefono> {
      return this.httpClient.get<Telefono>(this.telefonoURL + `detailname/${nombre}`);
    }
  
    public save(telefono: Telefono): Observable<any> {
      return this.httpClient.post<any>(this.telefonoURL + 'create', telefono);
    }
  
  
    public update(id: number, telefono: Telefono): Observable<any> {
      return this.httpClient.put<any>(this.telefonoURL + `update/${id}`, telefono);
    }
  
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.telefonoURL + `delete/${id}`);
    }
  }