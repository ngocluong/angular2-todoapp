import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todo: Todo;
  @Input() hideDescription: boolean;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor(private router: Router) {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  onSelect(todo: Todo) {
    this.router.navigate(['/todos', todo.id]);
  }
}
