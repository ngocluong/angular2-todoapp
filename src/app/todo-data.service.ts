import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;
  // Placeholder for todo's
  todos: Todo[]= [];

  constructor(private api: ApiService) { }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodo(id);
  }

  // Simulate PUT /todos/:id
  updateTodoById(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(page=1): Observable<Todo[]> {
    return this.api.getAllTodo(page);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoByID(id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
