import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rhioda';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;


  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log('username : ' + this.username + ' password : ' + this.password);
    if (this.username === 'rhioda' && this.password === 'muthie') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
