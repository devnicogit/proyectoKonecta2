import { ChangePasswordComponent } from './changepassword/change-password.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { PedGuardService } from './guards/ped-guard.service';
import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';
import { NuevoPedidoComponent } from './pedido/nuevo-pedido/nuevo-pedido.component';
import { MigracionComponent } from './migracion/migracion.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListaTelefonoComponent } from './telefono/lista-telefono/lista-telefono.component';
import { DetalleTelefonoComponent } from './telefono/detalle-telefono/detalle-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { NuevoTelefonoComponent } from './telefono/nuevo-telefono/nuevo-telefono.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'sendemail', component: SendEmailComponent, canActivate: [LoginGuard] },
  { path: 'change-password/:tokenPassword', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  /*{ path: 'lista', component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },*/
  /*{ path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },*/
  { path: 'listas', component: ListaPedidoComponent, canActivate: [ProdGuardService], data:{expectedRol: ['admin', 'user']}},
  { path: 'detalles/:idped', component: DetallePedidoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'edit/:idped', component: EditarPedidoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'nuevos', component: NuevoPedidoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] } },
  { path: 'migracion', component: MigracionComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin', 'user']}},
  { path: 'archivo/ejecutar', component: MigracionComponent, canActivate: [ProdGuardService], data:{expectedRol: ['admin','user' ]}},
  { path: 'lista', component: ListaClienteComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleClienteComponent, canActivate:[ProdGuardService], data:{expectedRol:['admin', 'user']}},
  { path: 'nuevo', component: NuevoClienteComponent, canActivate: [ProdGuardService], data : {expectedRol: ['admin']}},
  { path: 'editar/:id', component: EditarClienteComponent, canActivate: [ProdGuardService], data : {expectedRol: ['admin']}},
  { path: 'listaTelefono', component: ListaTelefonoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detallePedido/:id', component: DetalleTelefonoComponent, canActivate:[ProdGuardService], data:{expectedRol:['admin', 'user']}},
  { path: 'editarTelefono/:id', component: EditarTelefonoComponent, canActivate: [ProdGuardService], data : {expectedRol: ['admin']}},
  { path: 'nuevoTelefono', component: NuevoTelefonoComponent, canActivate: [ProdGuardService], data : {expectedRol: ['admin']}},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
