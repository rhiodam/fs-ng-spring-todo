package com.rhiodamuthie.restfulws.rest;

import com.rhiodamuthie.restfulws.model.Todo;
import com.rhiodamuthie.restfulws.repository.TodoRepository;
import com.rhiodamuthie.restfulws.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/user/{username}/todo/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username , @PathVariable long id){

        Todo todo = todoService.deleteById(id);

        if (todo!= null){
//            204
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }


}
