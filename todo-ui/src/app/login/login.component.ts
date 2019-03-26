import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

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
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    // this.router = router;
  }

  ngOnInit() {
  }

  // handleLogin() {
  //   console.log('username : ' + this.username + ' password : ' + this.password);
  //   if (this.username === 'rhioda' && this.password === 'muthie') {
  //   if (this.hardcodedAuthenticationService.authenticate(this.username , this.password)) {
  //     this.router.navigate(['welcome', this.username]);
  //     // redirect to welcome comp
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  //
  // }

  handleBasicAuthLogin() {
    console.log(this.username + ' ' + this.password);
    this.basicAuthenticationService
      .excuteBasicAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log('data : ' + (data));
          console.log('handleBasicAuthLogin : ' + this.username + ' ' + this.password)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log('error handleBasicAuthLogin : ' + (error) + this.username + this.password);
          this.invalidLogin = true;
        }
      )
  }


}
