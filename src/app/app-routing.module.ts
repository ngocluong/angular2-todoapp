import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { TodoListItemDetailsComponent } from './todo-list-item-details/todo-list-item-details.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo-center', component: TodosComponent },
  { path: 'todos/:id', component: TodoListItemDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [TodosComponent, TodoListItemDetailsComponent];