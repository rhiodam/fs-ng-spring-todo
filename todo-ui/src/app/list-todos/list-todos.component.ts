import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";


export class Todo {
  constructor(public id:number,
              public description:string,
              public done:boolean,
              public targetDate:Date) {


  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[];

  deleteMessage:string;
  updateMessage:string;

  username:string = this.basicAuthenticationService.getAuthenticatedUser();
;

  //todos3 = [
  //  new Todo(1, 'Learn Angular', false, new Date()),
  //  new Todo(2, 'Learn Angular 2', false, new Date()),
  //  new Todo(3, 'Learn Angular 3', false, new Date()),
  //  new Todo(4, 'Learn Angular 4', false, new Date())
  //]
  todos2 = [
    {
      id: 1,
      description: 'Learn Angular'
    },
    {
      id: 2,
      description: 'Learn React'
    },
    {
      id: 3,
      description: 'Learn Vue'
    },
    {
      id: 4,
      description: 'Learn Backbone'
    }
  ]

  // todo ={
  //   id : 1,
  //   description: 'Learn Angular'
  // }

  constructor(private todoService:TodoDataService,
              private router:Router,
              private basicAuthenticationService:BasicAuthenticationService) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {

    let username = this.basicAuthenticationService.getAuthenticatedUser();
    // this.todoService.retrieveAllTodos('rhioda').subscribe(
    this.todoService.retrieveAllTodos(username).subscribe(
      response => {
        console.log('retrieveAllTodos : ' + response);
        console.log('retrieveAllTodos : ' + this.username);
        this.todos = response;
      },
      error => {
        console.log(error);
        console.log('error retrieveAllTodos : ' + this.username);
        // this.todos = response;
      }
    )
  }

  deleteTodo(id) {

    console.log(id);
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = `Delete todo of id : ${id} success`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {

    console.log('Update Todo with id : ' + id);
    this.router.navigate(['todos', id]);
    //   this.todoService.updateTodo('rhioda',id).subscribe(
    //     response => {
    //       console.log(response);
    //       this.updateMessage = `Update todo of id : ${id} success`;
    //       this.refreshTodos();
    //     }
    //   )
  }

  addTodo() {

    console.log('Add Todo with id : ' + -1);
    this.router.navigate(['todos', -1]);
  }
}
