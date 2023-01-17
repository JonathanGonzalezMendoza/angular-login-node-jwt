import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm;
  errorMessage: string = "";

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(customerData: any) {
    this.authService.login(customerData);
    this.errorMessage = "Ocurrio un error inesperado";
    this.checkoutForm.reset();
  }

}
