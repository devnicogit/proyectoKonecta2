import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { PedidoDto } from '../models/pedido-dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoURL = environment.pedidoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.pedidoURL + 'lista');
  }

  public detail(idped: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.pedidoURL + `detail/${idped}`);
  }

  public save(pedido: Pedido ): Observable<any> {
    return this.httpClient.post<any>(this.pedidoURL + 'create', pedido);
  }

  public update(idped: number, pedido: Pedido): Observable<any> {
    return this.httpClient.put<any>(this.pedidoURL + `update/${idped}`, pedido);
  }

  public delete(idped: number): Observable<any> {
    return this.httpClient.delete<any>(this.pedidoURL + `delete/${idped}`);
  }
}