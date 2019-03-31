import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HelloWorldBean} from "./data/welcome-data.service";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constants";

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) {
  }

  excuteBasicAuthService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(username + ' ' + password + ' : ' + basicAuthHeaderString);
    // let header: HttpHeaders;

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http
      .get<Auth>(`${API_URL}/basicauth`,
        {headers: header})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
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

}

export class Auth {
  constructor(public message:string) {
  }
}
