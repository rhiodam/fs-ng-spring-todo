import { Injectable } from '@angular/core';
import {Todo} from "../../list-todos/list-todos.component";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) {
  }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`${API_URL}/user/${username}/todo`)
    console.log("retrieveAllTodos at todo data service");
  }

  deleteTodo(username:string, id:number) {
    return this.http.delete(`${API_URL}/user/${username}/todo/${id}`)
    console.log("deleteTodo at todo data service");
  }

  retrieveTodo(username:string, id:number) {
    return this.http.get<Todo>(`${API_URL}/user/${username}/todo/${id}`)
    console.log("deleteTodo at todo data service");
  }

  updateTodo(username, id, todo) {
    return this.http.put(
      `${API_URL}/user/${username}/todo/${id}`,
      todo);
    console.log("deleteTodo at todo data service");
  }

  addTodo(username, todo) {
    return this.http.post(
      `http://localhost:8080/user/${username}/todo`,
      todo);
    console.log("addTodo at todo data service");
  }
}
