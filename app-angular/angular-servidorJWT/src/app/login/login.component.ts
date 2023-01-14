import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  /*Login() {
    console.log("You are logging in");
    this.authService.login(this.email, this.password);
  }*/

  onSubmit(customerData: any) {
    this.authService.login(customerData);
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

  ngOnInit(): void {
    
  }

}
