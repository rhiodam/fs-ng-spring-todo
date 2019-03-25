import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";


export class Todo {
  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date) {


  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];

  deleteMessage:string;

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

  constructor(
    private todoService:TodoDataService
  ) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('rhioda').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){

    console.log(id);
    this.todoService.deleteTodo('rhioda',id).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = `Delete todo of id : ${id} success`;
        this.refreshTodos();
      }
    )
  }

}
