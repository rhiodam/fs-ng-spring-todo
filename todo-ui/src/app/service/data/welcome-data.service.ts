import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  excuteHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log("Hello");

  }

  excuteHelloWorldBeanServiceWithPathVariable(name) {
    let basicAuthHeadertring = this.createBasicAuthHttpHeader();

    let header: HttpHeaders;
    header = new HttpHeaders({
      Authorization: basicAuthHeadertring
    });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
      {headers: header})
    // console.log("Hello");

  }

  createBasicAuthHttpHeader() {
    let username = 'rhioda';
    let password = 'rhioda';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}

export class HelloWorldBean {
  constructor(
    // public id : number,
    // public date: date,
    public message: string
  ) {

  }

}
