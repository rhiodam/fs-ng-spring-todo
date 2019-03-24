package com.rhiodamuthie.restfulws.rest;


import com.rhiodamuthie.restfulws.model.Todo;
import com.rhiodamuthie.restfulws.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;


    @GetMapping("/user/{name}/todo")
    public List<Todo> getAllTodo(@PathVariable String name){

        return
    }

}
