package com.rhiodamuthie.restfulws.rest;

import com.rhiodamuthie.restfulws.model.HelloWorldBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by W on 3/24/2019.
 */

@RestController
public class HelloWorldController {

//    @Autowired
    private HelloWorldBean helloWorldBean;

//    GET
//    URI - /hello-world
//    method helloWorld
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

//    GET
//    URI - /hello-world
//    method helloWorld
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean(1L , "Some message");
    }
}
