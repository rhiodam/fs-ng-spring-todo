import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  excuteHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log("Hello");

  }

  excuteHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`)
    // console.log("Hello");

  }

}

export class HelloWorldBean {
  constructor(
    // public id : number,
    // public date: date,
    public message : string
  ){

  }

}
