import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item-details',
  templateUrl: './todo-list-item-details.component.html',
  styleUrls: ['./todo-list-item-details.component.css']
})

export class TodoListItemDetailsComponent implements OnInit {
  todo: Todo;
  saveSuccess: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodoDataService
  ) {}


  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.service.getTodoById(id)
      .subscribe((todo: Todo) => this.todo = todo);
  }
  
  gotoTodos() {
    this.router.navigate(['/todo-center']);
  }
  onSubmit(){
    this.service
      .updateTodoById(this.todo)
      .subscribe(
        (updateTodo) => { 
          if(updateTodo) {
            this.todo = updateTodo 
            this.saveSuccess = true;
          } else {
            this.saveSuccess = true;
          }
        }
      );
  }
}
