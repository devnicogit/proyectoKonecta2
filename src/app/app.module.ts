import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';
import { NuevoPedidoComponent } from './pedido/nuevo-pedido/nuevo-pedido.component';
import { MigracionComponent } from './migracion/migracion.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { DetalleTelefonoComponent } from './telefono/detalle-telefono/detalle-telefono.component';
import { EditarTelefonoComponent } from './telefono/editar-telefono/editar-telefono.component';
import { ListaTelefonoComponent } from './telefono/lista-telefono/lista-telefono.component';
import { NuevoTelefonoComponent } from './telefono/nuevo-telefono/nuevo-telefono.component';
import { ListaMigracionComponent } from './migracion/lista-migracion/lista-migracion.component';
import { ListaDetalleMigracionComponent } from './detalleordenmigracion/lista-detalle-migracion/lista-detalle-migracion.component';





@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    ListaPedidoComponent,
    DetallePedidoComponent,
    EditarPedidoComponent,
    NuevoPedidoComponent,
    MigracionComponent,
    ListaClienteComponent,
    DetalleClienteComponent,
    NuevoClienteComponent,
    EditarClienteComponent,
    DetalleTelefonoComponent,
    EditarTelefonoComponent,
    ListaTelefonoComponent,
    NuevoTelefonoComponent,
    ListaMigracionComponent,
    ListaDetalleMigracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
