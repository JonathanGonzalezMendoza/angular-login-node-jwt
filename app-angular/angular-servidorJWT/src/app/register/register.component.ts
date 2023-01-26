import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  checkoutFormRegister: any = FormGroup;
  errorMessage: string = "";

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkoutFormRegister = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm:['', Validators.required]
    });
  }

  passwordMatchValidator() {
    let g = this.checkoutFormRegister ;
    console.log("Password Required");
    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
 }

  onSubmit(customerData: any) {
    console.log(customerData); // Datos que se envian al servidor para ser procesados y guardados en la B.D
    this.checkoutFormRegister.reset();
  }

}
