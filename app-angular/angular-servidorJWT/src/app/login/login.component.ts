import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm: any = FormGroup;
  errorMessage: string = "";

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(customerData: any) {
    this.authService.login(customerData);
    this.errorMessage = "Ocurrio un error inesperado";
    this.checkoutForm.reset();
  }

}
