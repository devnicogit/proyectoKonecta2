import { Component, OnInit} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TelefonoService } from '../service/telefono.service';
import { PlanPostpagoService } from '../service/planPostpago.service';
import { OrdenMigracionService } from '../service/orden-migracion.service';
import { AuthService } from '../service/auth.service';
import { Telefono } from '../models/telefono';
import { PlanPostpago } from '../models/plan-postpago';
import { Asesor } from '../models/asesor';
import { TokenService } from '../service/token.service';
/*import { spawn } from 'child_process';*/


@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.css']
})
export class MigracionComponent implements OnInit {
  planesPos: any[];
  asesor: Asesor;
  nombre : string;
  nombreUsuario: string;
  telefono: Telefono;
  telefonos: Telefono[];
  planes: PlanPostpago[];
  planSeleccionado: any;

  asesores: Asesor[];
  
  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private telefonoService: TelefonoService,
    private planPostpagoService: PlanPostpagoService,
    private asesorService: AuthService,
    private ordenMigracionService: OrdenMigracionService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.telefonoService.detail(id).subscribe(telefono => {
      this.telefono = telefono;
    });
    this.nombreUsuario = this.tokenService.getUserName();

    this.planPostpagoService.lista().subscribe((planesPos: any[]) => {
      this.planesPos = planesPos;
    });



    
  }

  /*migrar() {
    if (this.planSeleccionado) {
      const telefonoId = this.telefono.id;
      const planId = this.planSeleccionado.id;
      this.ordenMigracionService.migrar(telefonoId, planId).subscribe(() => {
        alert('El teléfono ha sido migrado al nuevo plan.');
      }, error => {
        alert('Error al migrar el teléfono.');
      });
    }
  }
*/
  seleccionarPlan(plan: any) {
    console.log('Plan seleccionado:', plan);
  }

  /*ejecutarArchivo(rutaEjecutable: string) {
    const body = { ruta: rutaEjecutable };
    return this.httpClient.post<any>('/archivo/ejecutar', body);
  }*/

  ejecutarExe(): void {
    this.httpClient.get('http://localhost:8080/archivo/ejecutar').subscribe((
      data: any) => {
      console.log(data);
      });
      }
  
  /*ejecutarExe(): void {

        
        const url = 'http://localhost:8080/archivo/ejecutar';
        const rutaEjecutable = 'C:\Users\nicol\AppData\Roaming\Spotify\Spotify.exe';
        const argumentos = ['argumento1', 'argumento2'];
    
        this.httpClient.get(url).subscribe(() => {
          console.log('Ejecutando archivo ejecutable...');
    
          const proceso = spawn(rutaEjecutable, argumentos, {
            detached: true, // Ejecutar el proceso en segundo plano
            stdio: 'ignore' // Ignorar la entrada y salida estándar del proceso
          });
    
          proceso.unref(); // Desvincular el proceso del proceso padre
        });
      }*/

}

