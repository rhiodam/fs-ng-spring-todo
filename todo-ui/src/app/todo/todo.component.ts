import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo

  constructor(
    private todoService: TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.todo = new Todo(1,'',false,new Date());
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('rhioda',this.id).subscribe(
      response => {
        console.log(response);
        //casting in java
        this.todo = <Todo>response;
      }
    )
  }

  saveTodo() {
    this.todoService.updateTodo('rhioda',this.id , this.todo).subscribe(
      response => {
        console.log(response);
        //this.todo = response;
      }
    )
  }
}
