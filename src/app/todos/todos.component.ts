import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  providers: [],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) {
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

  onRemoveTodo(todo){
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => { this.todos = this.todos.filter((td) => td.id !== todo.id); }
      );
  } 
}
