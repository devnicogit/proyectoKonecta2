import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetalleOrdenMigracion } from 'src/app/models/detalle-orden-migracion';
import { DetalleOrdenMigracionService } from 'src/app/service/detalle-orden-migracion.service';
import { TelefonoService } from 'src/app/service/telefono.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-detalle-migracion',
  templateUrl: './lista-detalle-migracion.component.html',
  styleUrls: ['./lista-detalle-migracion.component.css']
})
export class ListaDetalleMigracionComponent implements OnInit {

  detalleordenes: DetalleOrdenMigracion[] = [];
  isAdmin = false;

  constructor(
    private detalleOrdenMigracionService: DetalleOrdenMigracionService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAdmin = this.tokenService.isAdmin();
    this.cargarDetalleOrdenes();
  }

  cargarDetalleOrdenes() {
    this.detalleOrdenMigracionService.lista().subscribe(
    data => {
      this.detalleordenes = data;
    },
    err => {
      console.log(err);
    }
  );
}

}
