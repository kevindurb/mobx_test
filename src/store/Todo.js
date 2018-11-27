import { observable } from 'mobx';

class Todo {
  constructor(text = '') {
    this.text = text;
  }

  @observable text = '';
}

export default Todo;
