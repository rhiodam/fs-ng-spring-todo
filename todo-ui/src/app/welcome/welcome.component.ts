// Difference between java anad javascript


// each java class wa placed in a package
// but js not but in module
// package com.rhiodamuthie.springboot.web;

// here we import a class/method from angular
// import org.springframework.boot.SpringApplication;
import {Component, OnInit} from '@angular/core';

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

  // TS
  // message :  string = 'Some Welcome Message';

  // JAVA
  // private String message = 'Some Welcome Message';

  // public WelcomeComponent()
  constructor() { }

  ngOnInit() {
  }

}
