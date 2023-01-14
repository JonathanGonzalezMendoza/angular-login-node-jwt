import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  authServices = false;

  constructor(private authService: AuthService) {
    this.authServices = authService.logIn;
  }

  logout() {
    this.authService.logout();
  }

}
