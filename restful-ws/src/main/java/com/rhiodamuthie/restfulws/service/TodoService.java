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
        todos.add(new Todo(++idCounter , "rhioda" , "Learn Angular" , new Date() , false));
        todos.add(new Todo(++idCounter , "rhioda" , "Learn Angular" , new Date() , false));
        todos.add(new Todo(++idCounter , "rhioda" , "Learn Angular" , new Date() , false));
        todos.add(new Todo(++idCounter , "rhioda" , "Learn Angular" , new Date() , false));
        todos.add(new Todo(++idCounter , "rhioda" , "Learn Angular" , new Date() , false));

    }

    public List<Todo> findAll(){
        return todos;
    }
}
