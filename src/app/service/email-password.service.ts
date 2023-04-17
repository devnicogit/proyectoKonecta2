import { ChangePasswordDTO } from './../models/change-password-dto';
import { Observable } from 'rxjs';
import { EmailValuesDTO } from './../models/email-values-dto';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { OrdenMigracionDto } from '../models/orden-migracion-dto';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {


  httpOptions = {
    headers: new HttpHeaders()
  };

  changePasswordURL = environment.changePasswordURL;

  constructor(private httpClient: HttpClient) { }

  public sendEmail(dto: EmailValuesDTO): Observable<any> {
    return this.httpClient.post<any>(this.changePasswordURL + 'send-email', dto);
  }

  public changePassword(dto: ChangePasswordDTO): Observable<any> {
    return this.httpClient.post<any>(this.changePasswordURL + 'change-password', dto);
  }

  public sendEmailPDF(dto: EmailValuesDTO): Observable<any> {
    const formData = this.createFormData(dto.pdfBytes);
    //formData.append('mailTo', dto.mailTo);
    formData.append('pdfFile', dto.pdfBytes); // Agregar el archivo PDF
    formData.append('emailValuesDto', JSON.stringify(dto.mailTo));
    return this.httpClient.post<any>(this.changePasswordURL + 'send-email-pdf', formData, this.httpOptions);
  }



  private createFormData(file: File): FormData {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return formData;
  }
}
