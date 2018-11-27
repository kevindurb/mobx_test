import { observable, action } from 'mobx';

class Todo {
  constructor(text = '') {
    this.text = text;
  }

  @observable text = '';

  @action setText = (text) => {
    this.text = text;
  }
}

export default Todo;
