package com.rhiodamuthie.restfulws.rest;

import com.rhiodamuthie.restfulws.model.HelloWorldBean;
import com.rhiodamuthie.restfulws.repository.HelloWorldBeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by W on 3/24/2019.
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

//    @Autowired
    private HelloWorldBean helloWorldBean;

    @Autowired
    private HelloWorldBeanRepository helloWorldBeanRepository;

//    new

//    @Autowired
//    private HelloWorldBeanRepository helloWorldBeanRepository;

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
        HelloWorldBean bean = new HelloWorldBean("Some message");
        helloWorldBeanRepository.save(bean);
        return bean;
    }

//    Iseng2
//    @GetMapping(path = "/hello-world-bean")
//    public HelloWorldBean helloWorldBean(){
//        HelloWorldBean bean = new HelloWorldBean(1L, "Some message");
//        helloWorldBeanRepository.save(bean);
//        return bean;
//    }

//    Test error message
//    @GetMapping(path = "/hello-world-bean")
//    public HelloWorldBean helloWorldBean(){
//        throw  new RuntimeException("Some error");
//    }

//    GET
//    URI - /hello-world
//    method helloWorld
    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPath(@PathVariable String name){
//        return new HelloWorldBean(1L , String.format("Hello world, %s", name));
        HelloWorldBean bean = new HelloWorldBean(String.format("Hello world, %s", name));
        bean.setMessage(String.format("Hello world, %s", name));
        helloWorldBeanRepository.save(bean);
        return bean;
//        return new HelloWorldBean(1L , "Hello world, " + name);
    }
}
