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
  clientes: Cliente[]; 
  dni: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  email: string = '';
  telefono: string = '';
  tipoCliente : TipoCliente;
  planPostpago: PlanPostpago;
  tipoCliente2 : number;
  planPostpago2:number;

  tipoClienteIds: number[] = [];

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

        // Obtener la lista de tipos de cliente al inicializar el componente
        this.tipoClienteService.lista().subscribe(
          data => {
            this.tiposCliente = data;
          },
          err => {
            console.log(err);
          }
        );

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

  cargarClientes() {
    this.clienteService.lista().subscribe(
      clientes => {
        this.clientes = clientes;
      },
      error => {
        console.error(error);
      }
    );
  }

  onTipoClienteChange(event) {
    this.tipoClienteIds = [event.target.value];
  }

  onCreate(): void {
    const cliente: Cliente = {
      dni: this.dni,
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion,
      email: this.email,
      tipoClienteIds: this.tipoClienteIds
    };
    //this.cliente = new Cliente(this.dni,this.nombre,this.apellido, this.direccion, this.tipoCliente2);
    /*this.cliente = new Cliente(this.nombre, this.apellido, this.direccion, this.telefono,this.planPostpago,this.tipoCliente);*/
    this.clienteService.save(cliente).subscribe(
      data => {
        this.toastr.success('Cliente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
        this.cargarClientes();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
