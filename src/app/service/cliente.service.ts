import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ClienteDTO } from '../models/clienteDTO';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = environment.clienteURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'lista');
  }

  public detail(clienteId: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `detail/${clienteId}`);
  }

  public detailName(nombre: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `detailname/${nombre}`);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + 'create', cliente);
  }


  public update(clienteId: number, cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + `update/${clienteId}`, cliente);
  }

  public delete(clienteId: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `delete/${clienteId}`);
  }
}
