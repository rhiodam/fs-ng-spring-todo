package com.rhiodamuthie.restfulws.rest;

import com.rhiodamuthie.restfulws.model.Auth;
import com.rhiodamuthie.restfulws.model.Todo;
import com.rhiodamuthie.restfulws.repository.TodoRepository;
import com.rhiodamuthie.restfulws.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {

    @GetMapping("/basicauth")
    public Auth basicAuth() {
//        return todoRepository.findAll();
        return new Auth("You are authenticated");
    }

//    @GetMapping("/user/{username}/todo")
//    public List<Todo> getAllTodo(@PathVariable String username) {
////        return todoRepository.findAll();
//        return todoService.findAll();
//    }
//
//    @GetMapping("/user/{username}/todo/{id}")
//    public Todo getTodo(@PathVariable String username, @PathVariable Long id) {
////        return todoRepository.findAll();
//        return todoService.findById(id);
//    }
//
//    @DeleteMapping("/user/{username}/todo/{id}")
//    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
//
//        Todo todo = todoService.deleteById(id);
//
//        if (todo != null) {
////            204
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @PutMapping("/user/{username}/todo/{id}")
//    public ResponseEntity<Todo> updateTodo(
//            @PathVariable String username,
//            @PathVariable Long id,
//            @RequestBody Todo todo
//    ) {
////        return todoRepository.findAll();
//        Todo save = todoService.save(todo);
//        todoRepository.save(todo);
//        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
//    }
//
//    @PostMapping("/user/{username}/todo")
//    public ResponseEntity<Void> addTodo(
//            @PathVariable String username,
//            @RequestBody Todo todo
//    ) {
//
//        Todo createdTodo = todoService.save(todo);
//        todoRepository.save(todo);
//
//        if (createdTodo.getId() == null) {
////            204
//            return ResponseEntity.noContent().build();
//        }
//
//        URI uri = ServletUriComponentsBuilder
//                .fromCurrentRequest()
//                .path("/{id}")
//                .buildAndExpand(createdTodo.getId())
//                .toUri();
//
//        return ResponseEntity.created(uri).build();
//    }

}
