import { observable, action } from 'mobx';

import Todo from './Todo';

class TodoCollection {
  constructor() {
    this.load();
  }

  async load() {
    const res = await fetch('http://localhost:3000/todos');
    const todos = await res.json();
    this.todos.push(...todos.map(Todo.of));
  }

  @observable todos = [];

  @action addTodo = () => {
    this.todos.push(new Todo({ text: 'A New Todo' }));
  }
}

export default TodoCollection;
