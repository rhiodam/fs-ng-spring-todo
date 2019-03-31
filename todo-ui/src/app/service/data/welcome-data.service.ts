import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  excuteHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
    // console.log("Hello");

  }

  excuteHelloWorldBeanServiceWithPathVariable(username) {

    // let basicAuthHeadertring = this.createBasicAuthHttpHeader();
    //
    // let header: HttpHeaders;
    // header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-variable/${username}`
      // ,{headers: header}
    )
    // console.log("Hello");
  }

  // createBasicAuthHttpHeader() {
  //   let username = 'rhioda';
  //   let password = 'rhioda';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}

export class HelloWorldBean {
  constructor(
    public id: number,
    public targetDate: Date,
    public message: string
  ) {

  }

}
