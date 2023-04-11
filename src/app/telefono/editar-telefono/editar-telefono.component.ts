import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { PlanPostpago } from 'src/app/models/plan-postpago';
import { Telefono } from 'src/app/models/telefono';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanPostpagoService } from 'src/app/service/planPostpago.service';
import { TelefonoService } from 'src/app/service/telefono.service';

@Component({
  selector: 'app-editar-telefono',
  templateUrl: './editar-telefono.component.html',
  styleUrls: ['./editar-telefono.component.css']
})
export class EditarTelefonoComponent implements OnInit {

  telefono: Telefono;
  numero: string = '';
  planPostpago: PlanPostpago;
  cliente: Cliente;
  planesPostpago: PlanPostpago[];
  clientes: Cliente[];
  cliente2: number;
  planPostpago2:number;

  selectedPlan: PlanPostpago;
  selectedCliente: Cliente;

  constructor(
    private telefonoService: TelefonoService,
    private activatedRoute: ActivatedRoute,
    private planPostpagoService: PlanPostpagoService,
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.telefonoService.detail(id).subscribe(
      data => {
        this.telefono = data;
        /*this.numero = this.telefono.numero;
        this.cliente = this.telefono.cliente;
        this.planPostpago = this.telefono.plan;*/

        /*this.numero = this.telefono.numero;
        this.planPostpago = this.telefono.plan;
        this.cliente = this.telefono.cliente;
        this.cliente2 = this.telefono.cliente.clienteId;
        this.planPostpago2 = this.telefono.plan.planId;*/


        /*this.selectedPlan = this.telefono.planPostpago;
        this.selectedCliente = this.telefono.cliente;*/

      },
      err => {
        console.log(err);
      }
    );

    this.planPostpagoService.lista().subscribe(
      data => this.planesPostpago = data
    );
    this.clienteService.lista().subscribe(
      data => this.clientes = data
    );
  }

  actualizarCliente(){
    if (this.clientes) {
      const clienteSeleccionado = this.clientes.find(cli => cli.clienteId === this.cliente2);
      if (clienteSeleccionado) {
        this.cliente = clienteSeleccionado;
      } else {
        this.cliente = null;
      }
    }
  }

  actualizarPlanPostpago() {
    if (this.planesPostpago) {
      const planSeleccionado = this.planesPostpago.find(plan => plan.planId === this.planPostpago2);
      if (planSeleccionado) {
        this.planPostpago = planSeleccionado;
      } else {
        this.planPostpago = null;
      }
    }
  }



   /* actualizarPlanPostpago() {
      if (this.planesPostpago && this.planPostpago2) {
        const planSeleccionado = this.planesPostpago.find(plan => plan.planId === this.planPostpago2);
        if (planSeleccionado) {
          //this.telefono.plan = { planId: planSeleccionado.planId };
          //this.telefono.plan = planSeleccionado;
          //this.selectedPlan = planSeleccionado;

        } else {
          //this.telefono.planPostpago = null;
          this.selectedPlan = null;
        }
      } else {
        //this.telefono.planPostpago = null;
        this.selectedPlan = null;
      }
    }*/
  
   /* actualizarCliente() {
      if (this.clientes && this.cliente2) {
        const clienteSeleccionado = this.clientes.find(cliente => cliente.clienteId === this.cliente2);
        if (clienteSeleccionado) {
          //this.telefono.cliente2 = { clienteId: clienteSeleccionado.clienteId };
          //this.telefono.cliente = clienteSeleccionado;
          //this.selectedCliente = clienteSeleccionado;

        } else {
          //this.telefono.cliente = null;
          this.selectedCliente = null;
        }
      } else {
        //this.telefono.cliente = null;
        this.selectedCliente = null;
      }
    }*/

    actualizarTelefono(){
      this.actualizarPlanPostpago();
      this.actualizarCliente();
      this.telefono.plan = this.planPostpago2;
      this.telefono.cliente3 = this.cliente2;

    }


  onUpdate(): void {
    //this.actualizarTelefono();
    /*console.log('Telefono antes de actualizar:', this.telefono);
    this.actualizarPlanPostpago();
    this.actualizarCliente();
    console.log('Telefono después de actualizar:', this.telefono);*/
    //this.actualizarTelefono();

    console.log('Telefono antes de actualizar:', this.telefono);

    const id = this.activatedRoute.snapshot.params.id;
    console.log('Telefono después de actualizar:', this.telefono);
    this.telefonoService.update(id, this.telefono).subscribe(
      
      data => {
        this.toastr.success('Teléfono Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
          
        });
        
        this.router.navigate(['/listaTelefono']);
        
      }
      ,
      
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
      
    );
    
  }
 

}
