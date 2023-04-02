import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';
import { Asesor } from '../models/asesor';
import { Rol } from '../models/rol';
import { RolService } from '../service/rol.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  asesor: Asesor;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  email: string;
  password: string;
  roles: any[];
  isAdmin = false;
  selectedRole: string;
  errMsj: string;

  constructor(
    private rolService: RolService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarRoles();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarRoles() {
    this.rolService.lista().subscribe(
    data => {
      this.roles = data;
      this.selectedRole = this.roles[0].id;
    },
    err => {
      console.log(err);
    }
  );
}

  onRegister(): void {

     /* // Crear un nuevo objeto Asesor y asignarle los valores ingresados por el usuario
      this.asesor = new Asesor(this.nombre,this.apellido,this.nombreUsuario,this.email,this.password);
      this.asesor.nombre = this.nombre;
      this.asesor.apellido = this.apellido;
      this.asesor.nombreUsuario = this.nombreUsuario;
      this.asesor.email = this.email;
      this.asesor.password = this.password;

    // Crear un nuevo objeto Rol con el ID seleccionado por el usuario
    let selectedRol = new Rol("");
    selectedRol.id = this.selectedRole;

    // Agregar el Rol seleccionado al Set<Rol> de roles del nuevo Asesor
    this.asesor.roles = new Set<Rol>();
    this.asesor.roles.add(selectedRol);*/


    /*this.asesor = new Asesor(this.nombre,this.apellido, this.nombreUsuario, this.email, this.password);
    this.asesor.roles = [{ id: parseInt(this.selectedRole), rolNombre: '' }];*/

        // Obtener el rol seleccionado
        const selectedRole = this.roles.find(r => r.id == this.selectedRole);

        // Crear un objeto con los datos ingresados en el formulario
        const asesorData = {
          nombre: this.nombre,
          apellido: this.apellido,
          nombreUsuario: this.nombreUsuario,
          email: this.email,
          password: this.password,
          roles: [selectedRole] // Agregar el rol seleccionado
        };


    this.authService.nuevo(asesorData).subscribe(
      data => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
