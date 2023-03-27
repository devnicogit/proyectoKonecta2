import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { PlanPostpago } from '../models/plan-postpago';
import { TipoCliente } from '../models/tipo-cliente';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {

  tipoClienteURL = environment.tipoClienteURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoCliente[]> {
    return this.httpClient.get<TipoCliente[]>(this.tipoClienteURL + 'lista');
  }

  public detail(tipoId: number): Observable<TipoCliente> {
    return this.httpClient.get<TipoCliente>(this.tipoClienteURL + `detail/${tipoId}`);
  }

  public detailName(nombre: string): Observable<TipoCliente> {
    return this.httpClient.get<TipoCliente>(this.tipoClienteURL + `detailname/${nombre}`);
  }

  public save(tipoCliente: TipoCliente): Observable<any> {
    return this.httpClient.post<any>(this.tipoClienteURL + 'create', tipoCliente);
  }

  public update(tipoId: number, tipoCliente: TipoCliente): Observable<any> {
    return this.httpClient.put<any>(this.tipoClienteURL + `update/${tipoId}`, tipoCliente);
  }

  public delete(tipoId: number): Observable<any> {
    return this.httpClient.delete<any>(this.tipoClienteURL + `delete/${tipoId}`);
  }
}
