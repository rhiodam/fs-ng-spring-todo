import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    // this.router = router;
   }

  ngOnInit() {
  }

  handleLogin() {
    console.log('username : ' + this.username + ' password : ' + this.password);
    if (this.username === 'rhioda' && this.password === 'muthie') {

      this.router.navigate(['welcome']);
      // redirect to welcome comp
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
