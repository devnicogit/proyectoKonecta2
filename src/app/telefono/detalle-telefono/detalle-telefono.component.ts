import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Telefono } from 'src/app/models/telefono';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanPostpagoService } from 'src/app/service/planPostpago.service';
import { TelefonoService } from 'src/app/service/telefono.service';

@Component({
  selector: 'app-detalle-telefono',
  templateUrl: './detalle-telefono.component.html',
  styleUrls: ['./detalle-telefono.component.css']
})
export class DetalleTelefonoComponent implements OnInit {

  telefono: Telefono = null;
  nombre: string = null;
  nombrePlan: string = null;


  constructor(
    private telefonoService: TelefonoService,
    private clienteService: ClienteService,
    private planPostpagoService: PlanPostpagoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.telefonoService.detail(id).subscribe(
      data => {
        this.telefono = data;
        this.nombre = this.telefono.cliente.nombre;
        this.nombrePlan = this.telefono.plan.nombrePlan;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaTelefono']);
  }
}

