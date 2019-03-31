// Difference between java anad javascript


// each java class wa placed in a package
// but js not but in module
// package com.rhiodamuthie.springboot.web;

// here we import a class/method from angular
// import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

// here we import from our custome component
// import {AppComponent} from '../app.component';

// Annotation JAVA = Decorator TS
// @ComponentScan(
//         value = "com.rhiodamuthie.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class WelcomeComponent implements Serializable
export class WelcomeComponent implements OnInit {

  // JS
  message = 'Some Welcome Message';
  messageFromService :string;
  name = '';
  username: string = this.basicAuthenticationService.getAuthenticatedUser();

  // TS
  // message :  string = 'Some Welcome Message';

  // JAVA
  // private String message = 'Some Welcome Message';

  // public WelcomeComponent()
  // ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private welcomeService:WelcomeDataService,
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

  ngOnInit() {

    // console.log(this.message);
    console.log("this.route.snapshot.params['name'] : "+this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // this.welcomeService.excuteHelloWorldBeanService();
    // this.welcomeService.excuteHelloWorldBeanService();
    // console.log("inside getWelcomeMessage method")
    console.log(this.welcomeService.excuteHelloWorldBeanService());

    // async
    this.welcomeService.excuteHelloWorldBeanService().subscribe(
      // response =>console.log(response.message)
      response =>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("after use service");
  }

  getWelcomeMessageWithPathVariable() {
    // this.welcomeService.excuteHelloWorldBeanService();
    // this.welcomeService.excuteHelloWorldBeanService();
    // console.log("inside getWelcomeMessage method")
    // console.log('this.welcomeService.excuteHelloWorldBeanServiceWithPathVariable :'+(this.name));
    console.log('this.welcomeService.excuteHelloWorldBeanServiceWithPathVariable :'+(this.username));

    // async
    // this.welcomeService.excuteHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    this.welcomeService.excuteHelloWorldBeanServiceWithPathVariable(this.username).subscribe(
      // response =>console.log(response.message)
      response =>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("after use service getWelcomeMessageWithPathVariable");
  }

  handleSuccessfulResponse(response){
    this.messageFromService = response.message;
    console.log('response excuteHelloWorldBeanServiceWithPathVariable : ' + response);
    console.log(response.message);
  }

  handleErrorResponse(error: any) {
    console.log('error excuteHelloWorldBeanServiceWithPathVariable : ' + error);
    console.log(error.error.message);
    this.messageFromService = error.error.message;
  }
}



