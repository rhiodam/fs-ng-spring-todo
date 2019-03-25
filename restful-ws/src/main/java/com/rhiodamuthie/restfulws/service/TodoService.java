package com.rhiodamuthie.restfulws.service;

import com.rhiodamuthie.restfulws.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by W on 3/24/2019.
 */

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todo(++idCounter, "rhioda", "Learn Angular 1", new Date(), false));
        todos.add(new Todo(++idCounter, "rhioda", "Learn Angular 2", new Date(), false));
        todos.add(new Todo(++idCounter, "rhioda", "Learn Angular 3", new Date(), false));
        todos.add(new Todo(++idCounter, "rhioda", "Learn Angular 4", new Date(), false));
        todos.add(new Todo(++idCounter, "rhioda", "Learn Angular 5", new Date(), false));

    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo == null) return null;

        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo) {
        if (todo.getId() == -1) {
            todo.setId(++idCounter);
            todos.add(todo);
        }else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

}
