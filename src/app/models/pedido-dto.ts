import { NuevoUsuarioDTO } from "./nuevo-usuario-dto";
import { ProductoDTO } from "./producto-dto";

export class PedidoDto {
    idped?: number;
    usuario: NuevoUsuarioDTO;
    cantidad: number;
    precioUnitario: number;
    precioTotal: number;
    estado: boolean;
    /*producto: ProductoDTO
    product: Set<ProductoDTO>*/

    constructor(usuario: NuevoUsuarioDTO, cantidad: number, precioUnitario: number, precioTotal: number, estado: boolean) {
        this.usuario = usuario
        this.cantidad = cantidad
        this.precioUnitario = precioUnitario
        this.precioTotal = precioTotal
        this.estado = estado
    }

    
}
