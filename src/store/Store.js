import { observable, action } from 'mobx';

import Todo from './Todo';

class Store {
  @observable todos = [];

  @action addTodo = () => {
    this.todos.push(new Todo('New Todo'));
  }
}

export default Store;
