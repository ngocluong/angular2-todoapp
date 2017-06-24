import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { ApiService } from './api.service';
import { TodoListItemDetailsComponent } from './todo-list-item-details/todo-list-item-details.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { TagsComponent } from './tags/tags.component';
import { TagDataService } from './tag-data.service';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodoListItemDetailsComponent,
    TodosComponent,
    TagsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TreeModule,
    HttpModule
  ],
  providers: [
    TodoDataService,
    TagDataService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
