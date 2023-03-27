import { Component, OnInit} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
/*import { spawn } from 'child_process';*/


@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.css']
})
export class MigracionComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
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

