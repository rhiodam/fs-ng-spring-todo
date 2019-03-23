import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

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

  // Router
  // Angular.giveMeRouter
  // Dependency Injection like spring

  // In java
  // @Autowired
  // private Router router

  constructor(
    private router: Router ,
    private hardcodedAuthenticationService : HardcodedAuthenticationService
  ) {
    // this.router = router;
   }

  ngOnInit() {
  }

  handleLogin() {
    console.log('username : ' + this.username + ' password : ' + this.password);
    // if (this.username === 'rhioda' && this.password === 'muthie') {
    if (this.hardcodedAuthenticationService.authenticate(this.username , this.password)) {
      this.router.navigate(['welcome',this.username]);
      // redirect to welcome comp
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
}
