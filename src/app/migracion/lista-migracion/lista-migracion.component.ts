import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdenMigracion } from 'src/app/models/orden-migracion';
import { OrdenMigracionService } from 'src/app/service/orden-migracion.service';
import { TelefonoService } from 'src/app/service/telefono.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-migracion',
  templateUrl: './lista-migracion.component.html',
  styleUrls: ['./lista-migracion.component.css']
})
export class ListaMigracionComponent implements OnInit {

  ordenes: OrdenMigracion[] = [];
  isAdmin = false;

  constructor(
    private ordenMigracionService: OrdenMigracionService,
    private telefonoService: TelefonoService ,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAdmin = this.tokenService.isAdmin();
    this.cargarOrdenes();
  }

  cargarOrdenes() {
    this.ordenMigracionService.lista().subscribe(
    data => {
      this.ordenes = data;
    },
    err => {
      console.log(err);
    }
  );
}



}
