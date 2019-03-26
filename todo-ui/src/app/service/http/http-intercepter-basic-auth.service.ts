import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService
  implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'rhioda';
    let password = 'rhioda';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(req);
  }

}
