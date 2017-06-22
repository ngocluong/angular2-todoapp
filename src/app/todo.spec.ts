import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept value in contructor', () => {
    let todo = new Todo({
        title: 'hello',
        complete: true
    })
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
