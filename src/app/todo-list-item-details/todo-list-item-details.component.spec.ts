import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemDetailsComponent } from './todo-list-item-details.component';

describe('TodoListItemDetailsComponent', () => {
  let component: TodoListItemDetailsComponent;
  let fixture: ComponentFixture<TodoListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
