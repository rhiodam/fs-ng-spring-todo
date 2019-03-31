import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  basicAuthHeaderString:string;
  username:string;

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

  intercept(req:HttpRequest<any>, next:HttpHandler)
  // : Observable<HttpEvent<any>>
  {

    // let username = 'rhioda';
    // let password = 'rhioda';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    // this.basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    // this.username = this.basicAuthenticationService.getAuthenticatedUser()

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    console.log('intercept | username : ' + this.username + ' | basicAuthHeaderString : ' + this.basicAuthHeaderString)

    if (basicAuthHeaderString!= null && username!= null) {
    // if (this.basicAuthHeaderString && this.username) {
    // if (basicAuthHeaderString && username) {

      console.log('User is logged in --- intercept | username : ' + this.username + ' | basicAuthHeaderString : ' + this.basicAuthHeaderString);
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    } else {
      console.log('User is not logged in --- intercept | username : ' + this.username + ' | basicAuthHeaderString : ' + this.basicAuthHeaderString)
    }

    return next.handle(req);
  }

}
