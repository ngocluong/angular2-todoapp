import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  providers: [],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]=[];
  hideDescription: boolean;

  constructor(private todoDataService: TodoDataService, protected localStorageSer: LocalStorageService) {
    this.hideDescription = this.localStorageSer.get('description') === 'true'
  }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updateTodo) => { todo = updateTodo }
      );
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => { this.todos = this.todos.concat(newTodo); }
      );
  }

  onDescriptionChange(value) {
    this.localStorageSer.set('description', value);
    this.hideDescription = value === 'true'
  }

  onRemoveTodo(todo){
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => { this.todos = this.todos.filter((td) => td.id !== todo.id); }
      );
  }

  getMoreTodos(page){
    this.todoDataService
      .getAllTodos(page)
      .subscribe(
        (additionTodos) => {
          this.todos = this.todos.concat(additionTodos);
          console.log(this.todos)
        }
      );
  }
}
