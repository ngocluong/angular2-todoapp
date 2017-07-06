import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  page: number = 2;
  throttle = 500;
  scrollDistance = 0.5;

  constructor() { }
  @Input()
  todos: Todo[];
  
  @Input() hideDescription: boolean;
  
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  getmore: EventEmitter<Number> = new EventEmitter();
  
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo)
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo)
  }

  onScrollDown () {
    this.getmore.emit(this.page);
    this.page += 1;
  }
}
