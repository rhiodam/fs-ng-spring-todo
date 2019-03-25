import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  updateTodoMessage: string = ''
  private addTodoMessage: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('rhioda', this.id).subscribe(
        response => {
          console.log(response);
          //casting in java
          this.todo = <Todo>response;
        }
      )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      // create new todo
      this.todoService.addTodo('rhioda', this.todo).subscribe(
        response => {
          console.log(response);
          //this.todo = response;
          this.router.navigate(['todos']);
          // this.addTodoMessage = `Todo with id : ${this.todo.id} is created`
        }
      )
    } else {
      this.todoService.updateTodo('rhioda', this.id, this.todo).subscribe(
        response => {
          console.log(response);
          //this.todo = response;
          this.router.navigate(['todos']);
          this.updateTodoMessage = `Todo with id : ${this.todo.id} is updated`
        }
      )
    }
  }
}
