import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/service/pedido.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  isAdmin = false;

  constructor(
    private pedidoService: PedidoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { 
    
  }

  ngOnInit() {
    this.cargarPedidos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  
  cargarPedidos(): void {
    this.pedidoService.lista().subscribe(
      data => {
        this.pedidos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(idped: number) {
    this.pedidoService.delete(idped).subscribe(
      data => {
        this.toastr.success('Pedido Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarPedidos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
