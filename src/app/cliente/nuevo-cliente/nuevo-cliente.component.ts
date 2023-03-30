import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente} from 'src/app/models/cliente';
import { ClienteDTO } from 'src/app/models/clienteDTO';
import { PlanPostpago } from 'src/app/models/plan-postpago';
import { TipoCliente } from 'src/app/models/tipo-cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanPostpagoService } from 'src/app/service/planPostpago.service';
import { TipoClienteService } from 'src/app/service/tipoCliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente : Cliente;
  dni: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  telefono: string = '';
  tipoCliente : TipoCliente;
  planPostpago: PlanPostpago;
  tipoCliente2 : number;
  planPostpago2:number;

  planesPostpago: PlanPostpago[];
  tiposCliente: TipoCliente[];

  

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private planPostpagoService: PlanPostpagoService,
    private tipoClienteService: TipoClienteService
    ) { }

  ngOnInit() {

    /*this.planPostpagoService.lista().subscribe(
      data =>{
        this.planesPostpago = data;
      },
      error => console.error(error)
    );

    this.tipoClienteService.lista().subscribe(
      data1 =>{
        this.tiposCliente = data1;
      },
      error => console.error(error)
    );*/

  }

  onCreate(): void {
    this.cliente = new Cliente(this.dni,this.nombre,this.apellido, this.direccion);
    /*this.cliente = new Cliente(this.nombre, this.apellido, this.direccion, this.telefono,this.planPostpago,this.tipoCliente);*/
    this.clienteService.save(this.cliente).subscribe(
      data => {
        this.toastr.success('Cliente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
