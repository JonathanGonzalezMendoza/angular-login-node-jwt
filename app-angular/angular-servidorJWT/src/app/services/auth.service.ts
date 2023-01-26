import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri = 'http://localhost:3000/api';
  private token: any = "";
  errorMessage: string = "";


  constructor(private http: HttpClient, private router:Router) { }

  // Metodo Login: Consulta la el servicio de autenticacion para validar los datos de usuario gauardados en la Base de Datos

  login(customerData: any) {
    this.http.post(this.uri + '/authenticate', customerData).subscribe((resp: any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    },(err: HttpErrorResponse) => {
      if(err.error instanceof Error) {
        this.errorMessage = "Ocurrio un error inesperado del lado del Cliente";
      } else {
        this.errorMessage = err.error.errorMessage;
      }
    });
  }

  // Metodo Registro: Consulta el servicio de guardado del servidor para almacenar el registro creado
   // [ You Code ]


  logout() {
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
