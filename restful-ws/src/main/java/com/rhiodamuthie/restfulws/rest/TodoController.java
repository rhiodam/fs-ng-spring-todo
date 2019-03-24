package com.rhiodamuthie.restfulws.rest;

import com.rhiodamuthie.restfulws.model.Todo;
import com.rhiodamuthie.restfulws.repository.TodoRepository;
import com.rhiodamuthie.restfulws.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TodoService todoService;

    @GetMapping("/user/{username}/todo")
    public List<Todo> getAllTodo(@PathVariable String username){
//        return todoRepository.findAll();
        return todoService.findAll();
    }



}
