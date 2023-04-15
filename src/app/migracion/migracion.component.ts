import { Component, OnInit} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonoService } from '../service/telefono.service';
import { PlanPostpagoService } from '../service/planPostpago.service';
import { OrdenMigracionService } from '../service/orden-migracion.service';
import { AuthService } from '../service/auth.service';
import { Telefono } from '../models/telefono';
import { PlanPostpago } from '../models/plan-postpago';
import { Asesor } from '../models/asesor';
import { TokenService } from '../service/token.service';
import { DatePipe } from '@angular/common';
import { OrdenMigracion } from '../models/orden-migracion';
import { ToastrService } from 'ngx-toastr';
import { DetalleOrdenMigracion } from '../models/detalle-orden-migracion';
import { OrdenMigracionDto } from '../models/orden-migracion-dto';
import jsPDF from 'jspdf';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/*import { spawn } from 'child_process';*/


@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.css'],
  providers: [DatePipe]
})
export class MigracionComponent implements OnInit {

  detallesPlan = ['Promoción 1', 'Promoción 2', 'Promoción 3', 'Promoción 4', 'Promoción 5'];

  planSeleccionado2: any;
  telefono2: any = {};
  fecha2: Date;
  idAsesor: number;

  fechaFormateada: string;


  telefonoId: number;

  userId: number;

  orden: OrdenMigracion = { telefono: null, asesor: null, plan: null, fecha: new Date() };
  ordenes: OrdenMigracion[] = [];
  planesPos: any[] = [];
  asesor: Asesor = {
    nombre: '', apellido: '', nombreUsuario: '', email: '',
    password: '',
    roles: []
  };
  fecha = new Date();
  fecha1 :string;
  nombre : string;
  nombreUsuario: string;
  telefono: Telefono = {
    id: null,
    numero: '',
    planPostpago: null,
    cliente: null,
    plan: null,
    cliente3: null};
  telefonos: Telefono[] = [];
  plan: PlanPostpago = {nombrePlan: '',
    costoMensual: 0.0}
  planes: PlanPostpago[] = [];
  planSeleccionado: any;
  //telefono2: any = {};

  

  detallePlanSeleccionado: string;

  asesores: Asesor[] = [];
  
  constructor(
    private datePipe: DatePipe,
    private tokenService: TokenService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private telefonoService: TelefonoService,
    private planPostpagoService: PlanPostpagoService,
    private asesorService: AuthService,
    private ordenMigracionService: OrdenMigracionService) { 
      this.fecha1= this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.telefonos = [];
      this.asesores = [];
      this.orden = {
        telefono: null,
        asesor: null,
        plan: null,
        fecha: new Date()
      };
      this.asesor = {
        id: 0,
        nombre: '',
        apellido: '',
        nombreUsuario: '',
        email: '',
        password: '',
        roles: null
      };
    }

  ngOnInit() {
    this.telefonoId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.telefonoService.detail(this.telefonoId).subscribe(
      (telefono: Telefono) => {
        this.telefono = telefono;
      }
    );
    this.telefonoService.lista().toPromise().then(telefonos => this.telefonos = telefonos);


    const id = this.activatedRoute.snapshot.params.id;
    this.telefonoService.detail(id).subscribe(telefono => {
      this.telefono = telefono;
    });

    this.userId = this.tokenService.getUserId();
    this.nombreUsuario = this.tokenService.getUserName();

    this.planPostpagoService.lista().subscribe((planesPos: any[]) => {
      this.planesPos = planesPos;
    });



    
  }



  seleccionarDetallePlan(detalle: string) {
    this.detallePlanSeleccionado = detalle;
  }

  transformarFecha() {
    return this.datePipe.transform(this.fecha2, 'yyyy-MM-dd');

  }


  seleccionarPlan(plan: any, event: Event) {
    event.preventDefault();
    this.planSeleccionado = plan;
    const detallePlan = `ID: ${plan.planId} - Plan: ${plan.nombrePlan}`;
    const textarea = document.getElementById('txtDetalle') as HTMLTextAreaElement;
    textarea.value = detallePlan;
  }


  ejecutarExe(): void {
    this.httpClient.get('http://localhost:8080/archivo/ejecutar').subscribe((
      data: any) => {
      console.log(data);
      });
  }

  

      onCreate(): void {  

        /*const docDefinition = {
          content: [
            { text: 'Hola, este es un PDF generado desde mi aplicación Angular.', fontSize: 16 }
          ]
        };*/




        const doc = new jsPDF();
        doc.text('Hola, este es un PDF generado desde mi aplicación Angular.', 10, 10);
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);


        //const pdfDataUri = doc.output('datauristring');

       /* const path = require('path'); // Importa el módulo 'path' para construir la ruta del archivo.
        const fileName = `orden-${this.fechaFormateada}.pdf`;
        const filePath = path.join(__dirname, '..', 'pdfs', fileName);
        fs.writeFileSync(filePath, pdfDataUri.split(',')[1], 'base64');*/

        const fechaActual = new Date();
        const fechaFormateada = this.datePipe.transform(fechaActual, 'yyyy-MM-dd');

        /*const pdfPath = `pdfs/${fileName}`; // Ruta relativa al archivo PDF*/



        /*const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl((dataUrl: string) => {
          // Crear el objeto de la orden de migración
          const ordenMigracion : OrdenMigracionDto = {
            telefono: this.telefono.id,
            asesor: this.userId,
            plan: this.planSeleccionado.planId,
            fecha: fechaFormateada,
            pdf: dataUrl
          };*/


        // Crear el objeto de la orden de migración
        /*const ordenMigracion : OrdenMigracionDto = {
          telefono: this.telefono.id,    // Aquí se debe obtener el id del teléfono seleccionado
          asesor: this.userId,
          plan: this.planSeleccionado.planId,
          fecha: fechaFormateada,
          pdf: pdfPath
        };*/

          // Crear el objeto de la orden de migración
          const ordenMigracion : OrdenMigracionDto = {
            telefono: this.telefono.id,    // Aquí se debe obtener el id del teléfono seleccionado
            asesor: this.userId,
            plan: this.planSeleccionado.planId,
            fecha: fechaFormateada,
            pdf: pdfUrl,
            caracteristica: this.detallePlanSeleccionado
          };
        
        this.ordenMigracionService.save(ordenMigracion).subscribe(
          response => {
            this.ordenes.push(this.orden);
            
            this.toastr.success('Orden de migración creada exitosamente');
            this.router.navigate(['/listaOrden']);
          },
          error => {
            console.log(error);
            this.toastr.error('Error al crear la orden de migración');
          }
        );

      }
}




