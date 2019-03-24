// Difference between java anad javascript


// each java class wa placed in a package
// but js not but in module
// package com.rhiodamuthie.springboot.web;

// here we import a class/method from angular
// import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

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
  name = '';

  // TS
  // message :  string = 'Some Welcome Message';

  // JAVA
  // private String message = 'Some Welcome Message';

  // public WelcomeComponent()
  // ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private welcomeService:WelcomeDataService
  ) { }

  ngOnInit() {

    // console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // this.welcomeService.excuteHelloWorldBeanService();
    // this.welcomeService.excuteHelloWorldBeanService();
    // console.log("inside getWelcomeMessage method")
    console.log(this.welcomeService.excuteHelloWorldBeanService());
  }
}
