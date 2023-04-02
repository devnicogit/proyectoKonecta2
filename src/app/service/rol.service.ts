import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Rol } from "../models/rol";

@Injectable({
    providedIn: 'root'
  })
  export class RolService {
  
    rolURL = environment.rolURL;
  
    constructor(private httpClient: HttpClient) { }
  
    public lista(): Observable<Rol[]> {
      return this.httpClient.get<Rol[]>(this.rolURL);
    }

  }