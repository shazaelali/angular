import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  constructor(private router: Router) { }
  login() {
    // Implement your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  navigateToTableData() {

    this.email === "" && this.password === "" ? alert("type your credantienls") : this.router.navigate(['/table'])
  }
}