import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { PlanPostpago } from 'src/app/models/plan-postpago';
import { TipoCliente } from 'src/app/models/tipo-cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanPostpagoService } from 'src/app/service/planPostpago.service';
import { TipoClienteService } from 'src/app/service/tipoCliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {


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
    


    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.detail(id).subscribe(
      data => {
        this.cliente = data;
        this.dni = this.cliente.dni;
        this.nombre = this.cliente.nombre;
        this.apellido = this.cliente.apellido;
        this.direccion = this.cliente.direccion;
        // este-->this.telefono = this.cliente.telefono;
        // este-->this.planPostpago = this.cliente.planPostpago;
        // este-->this.planPostpago2 = this.cliente.planPostpago.planId;
        //this.planPostpago2 = this.cliente.planPostpago && this.cliente.planPostpago.planId;
        // este -->this.tipoCliente = this.cliente.tipoCliente;
        // este -->this.tipoCliente2 = this.cliente.tipoCliente.tipoId;
        //this.tipoCliente2 = this.cliente.tipoCliente && this.cliente.tipoCliente.tipoId;

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );

    this.planPostpagoService.lista().subscribe(
      data =>{
        this.planesPostpago = data;
      },
      error => console.error(error)
    );

    this.tipoClienteService.lista().subscribe(
      data =>{
        this.tiposCliente = data;
      },
      error => console.error(error)
    );

  

  }

  /*actualizarTipoCliente() {
    this.cliente.tipoCliente = this.tiposCliente.find(t => t.tipoId === this.tipoCliente2);
  }
  
  actualizarPlanPostpago() {
    this.cliente.planPostpago = this.planesPostpago.find(p => p.planId === this.planPostpago2);
  }*/


  
  // método para actualizar la propiedad tipoCliente del objeto cliente
  /*actualizarTipoCliente(){
    if (this.tiposCliente) {
      const tipoSeleccionado = this.tiposCliente.find(tipo => tipo.tipoId === this.tipoCliente2);
      if (tipoSeleccionado) {
        this.tipoCliente = tipoSeleccionado;
      } else {
        this.tipoCliente = null;
      }
    }
  }*/

  /*actualizarPlanPostpago() {
    if (this.planesPostpago) {
      const planSeleccionado = this.planesPostpago.find(plan => plan.planId === this.planPostpago2);
      if (planSeleccionado) {
        this.planPostpago = planSeleccionado;
      } else {
        this.planPostpago = null;
      }
    }
  }*/


  /*actualizarCliente(){
    this.actualizarTipoCliente();
    this.actualizarPlanPostpago();
    this.cliente.tipoCliente = this.tipoCliente;
    this.cliente.planPostpago = this.planPostpago;
  }*/

  onTipoClienteChange(event) {
    this.tipoClienteIds = [event.target.value];
  }

  onUpdate(): void {
    /*console.log('cliente antes de actualizar:', this.cliente);
    console.log('tipoCliente2:', this.tipoCliente2);
    console.log('planPostpago2:', this.planPostpago2);
    this.actualizarTipoCliente();
    this.actualizarPlanPostpago();
    console.log('cliente después de actualizar:', this.cliente);*/
    //this.actualizarCliente();
    const clienteActualizado = new Cliente(
      this.cliente.dni,
      this.cliente.nombre,
      this.cliente.apellido,
      this.cliente.direccion,
      this.cliente.tipoClienteIds
      /*this.cliente.telefono,
      this.planPostpago,
      this.tipoCliente*/
      )
    //this.actualizarCliente();
    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.update(id, clienteActualizado).subscribe(
      data => {
        this.toastr.success('Cliente Actualizado', 'OK', {
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
