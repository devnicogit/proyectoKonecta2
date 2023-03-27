import { NuevoUsuario } from "./nuevo-usuario";
import { NuevoUsuarioDTO } from "./nuevo-usuario-dto";

export class Pedido {
    idped?: number;
    usuario: NuevoUsuarioDTO;
    cantidad: number;
    precioUnitario: number;
    precioTotal: number;
    estado: boolean;

    constructor(usuario: NuevoUsuarioDTO, cantidad: number, precioUnitario: number, precioTotal: number, estado: boolean) {
        this.usuario = usuario
        this.cantidad = cantidad
        this.precioUnitario = precioUnitario
        this.precioTotal = precioTotal
        this.estado = estado
    }
}
