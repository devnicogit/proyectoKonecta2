import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { PlanPostpago } from '../models/plan-postpago';

@Injectable({
  providedIn: 'root'
})
export class PlanPostpagoService {

  planPostpagoURL = environment.planPostpagoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<PlanPostpago[]> {
    return this.httpClient.get<PlanPostpago[]>(this.planPostpagoURL + 'lista');
  }

  public detail(planId: number): Observable<PlanPostpago> {
    return this.httpClient.get<PlanPostpago>(this.planPostpagoURL + `detail/${planId}`);
  }

  public detailName(nombrePlan: string): Observable<PlanPostpago> {
    return this.httpClient.get<PlanPostpago>(this.planPostpagoURL + `detailname/${nombrePlan}`);
  }

  public save(planPostpago: PlanPostpago): Observable<any> {
    return this.httpClient.post<any>(this.planPostpagoURL + 'create', planPostpago);
  }

  public update(planId: number, planPostpago: PlanPostpago): Observable<any> {
    return this.httpClient.put<any>(this.planPostpagoURL + `update/${planId}`, planPostpago);
  }

  public delete(planId: number): Observable<any> {
    return this.httpClient.delete<any>(this.planPostpagoURL + `delete/${planId}`);
  }
}
