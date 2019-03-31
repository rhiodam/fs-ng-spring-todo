import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo
  updateTodoMessage:string = ''
  addTodoMessage:string;
  username:string = this.basicAuthenticationService.getAuthenticatedUser();

  constructor(private todoService:TodoDataService,
              private route:ActivatedRoute,
              private router:Router,
              private basicAuthenticationService:BasicAuthenticationService) {
  }

  ngOnInit() {

    // this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo(this.username, this.id).subscribe(
        response => {
          console.log(response);
          // console.log(response);
          //casting in java
          this.todo = <Todo>response;
        }
      )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      // create new todo
      this.todoService.addTodo(this.username, this.todo).subscribe(
        response => {
          console.log(response);
          console.log('saveTodo for : ' +this.username);
          //this.todo = response;
          this.router.navigate(['todos']);
          // this.addTodoMessage = `Todo with id : ${this.todo.id} is created`
        }
      )
    } else {
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        response => {
          console.log(response);
          //this.todo = response;
          console.log('updateTodo for : ' +this.username);
          this.router.navigate(['todos']);
          this.updateTodoMessage = `Todo with id : ${this.todo.id} is updated`
        }
      )
    }
  }
}
