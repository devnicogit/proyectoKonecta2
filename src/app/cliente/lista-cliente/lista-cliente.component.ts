import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  isAdmin = false;

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarClientes();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarClientes() {
      this.clienteService.lista().subscribe(
      data => {
        this.clientes = data;
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
    this.clienteService.delete(id).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarClientes();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
