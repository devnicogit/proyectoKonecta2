import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { environment } from './../../environments/environment';
import { Asesor } from '../models/asesor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  /*public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }*/

  public lista():Observable<Asesor[]>{
    return this.httpClient.get<Asesor[]>(this.authURL + 'asesores');
  }

  public nombre(nombreUsuario: string): Observable<Asesor>{
    return this.httpClient.get<Asesor>(this.authURL + `asesores/${nombreUsuario}`);
  }

  public nuevo(asesor: Asesor): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', asesor);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }


  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }
}
