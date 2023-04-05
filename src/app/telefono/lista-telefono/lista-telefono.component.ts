import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Telefono } from 'src/app/models/telefono';
import { TelefonoService } from 'src/app/service/telefono.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-telefono',
  templateUrl: './lista-telefono.component.html',
  styleUrls: ['./lista-telefono.component.css']
})
export class ListaTelefonoComponent implements OnInit {

  telefonos: Telefono[] = [];
  isAdmin = false;

  constructor(
    private telefonoService: TelefonoService ,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAdmin = this.tokenService.isAdmin();
    this.cargarTelefonos();
  }

  cargarTelefonos() {
    this.telefonoService.lista().subscribe(
    data => {
      this.telefonos = data;
    },
    err => {
      console.log(err);
    }
  );
}

migrar(id: number): void {
  this.router.navigate([`/migracion`]);
}

borrar(id: number) {
  this.telefonoService.delete(id).subscribe(
    data => {
      this.toastr.success('Telefono Eliminado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.cargarTelefonos();
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });
    }
  );
}

}
