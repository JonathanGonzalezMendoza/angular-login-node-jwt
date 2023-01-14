import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'https://localhost:3000/api';
  token: any = "";

  constructor(private http: HttpClient, private router:Router) { }

  login(customerData: any) {
    this.http.post(this.uri + '/authenticate', customerData).subscribe((resp: any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
