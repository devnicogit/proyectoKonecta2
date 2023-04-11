import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { PlanPostpago } from 'src/app/models/plan-postpago';
import { Telefono } from 'src/app/models/telefono';
import { TelefonoDTO } from 'src/app/models/telefono-dto';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanPostpagoService } from 'src/app/service/planPostpago.service';
import { TelefonoService } from 'src/app/service/telefono.service';

@Component({
  selector: 'app-nuevo-telefono',
  templateUrl: './nuevo-telefono.component.html',
  styleUrls: ['./nuevo-telefono.component.css']
})
export class NuevoTelefonoComponent implements OnInit {



  /*selectedPlanPostpago: number;
  selectedCliente: number;
  planesPostpago: PlanPostpago[] = [];
  clientes: Cliente[] = [];*/

  telefono: Telefono;
  telefonos: Telefono[];
  numero: string = '';
  planPostpago: PlanPostpago;
  cliente: Cliente;
  planesPostpago: PlanPostpago[] = [];
  clientes: Cliente[] = [];

  constructor(
    private telefonoService: TelefonoService,
    private activatedRoute: ActivatedRoute,
    private planPostpagoService: PlanPostpagoService,
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.planPostpagoService.lista().subscribe(
      planesPostpago => this.planesPostpago = planesPostpago
    );
    this.clienteService.lista().subscribe(
      clientes => this.clientes = clientes
    );
  }

  cargarTelefonos() {
    this.telefonoService.lista().subscribe(
      telefonos => {
        this.telefonos = telefonos;
      },
      error => {
        console.error(error);
      }
    );
  }


  onCreate(): void {

   /* // Busca el planPostpago y el cliente correspondiente a los IDs recibidos
    const selectedPlanPostpago = this.planesPostpago.find(p => p.planId === planPostpagoId);
    const selectedCliente = this.clientes.find(c => c.clienteId === clienteId);*/

        this.telefono = new Telefono(this.numero, this.planPostpago, this.cliente);
    


        this.telefonoService.save(this.telefono).subscribe(
          data => {
            this.toastr.success('Teléfono Creado', 'OK', {
              timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.router.navigate(['/listaTelefono']);
            this.cargarTelefonos();
          },
          err => {
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000,  positionClass: 'toast-top-center',
            });
          }
        );

}
}