import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuarioDTO } from 'src/app/models/nuevo-usuario-dto';
import { Pedido } from 'src/app/models/pedido';
import { ProductoDTO } from 'src/app/models/producto-dto';
import { PedidoService } from 'src/app/service/pedido.service';
import { PedidoDto } from 'src/app/models/pedido-dto';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  usuario: NuevoUsuarioDTO = null;
  cantidad: number = null;
  precioUnitario: number = null;
  precioTotal: number = null;
  estado:boolean = false;
  producto: ProductoDTO[] = []
  product : Set<ProductoDTO> = null

  constructor(
    private pedidoService: PedidoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const pedido = new PedidoDto(this.usuario, this.cantidad,this.precioUnitario,this.precioTotal,this.estado);
    
    this.pedidoService.save(pedido).subscribe(
      data => {
        this.toastr.success('Pedido Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listas']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
