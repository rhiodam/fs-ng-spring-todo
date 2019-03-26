import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HelloWorldBean} from "./data/welcome-data.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) {
  }

  excuteBasicAuthService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(username + ' ' + password);
    // let header: HttpHeaders;

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http
      .get<Auth>(`http://localhost:8080/basicauth`,
        {headers: header})
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  // createBasicAuthHttpHeader() {
  //   let username = 'rhioda';
  //   let password = 'rhioda';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  // authenticate(username, password) {
  //   // console.log('before auth :' + this.isUserLoggedIn());
  //   if (username === 'rhioda' && password === 'muthie') {
  //     sessionStorage.setItem('authenticatedUser', username);
  //     // console.log('after auth :' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  //
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}

export class Auth {
  constructor(
    public message: string
  ) {
  }
}
