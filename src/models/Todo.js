import uuid from 'uuid/v4';
import { observable, action, autorun, toJS } from 'mobx';

class Todo {
  static of(...args) {
    return new Todo(...args);
  }

  constructor(props) {
    this.id = props.id || uuid();
    this.text = props.text || text;

    autorun(this.update);
  }

  update = () => {
    fetch(`http://localhost:3000/todos/${this.id}`, {
      method: 'PUT',
      body: JSON.stringify(toJS(this)),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }

  @observable text = '';

  @action setText = (text) => {
    this.text = text;
  }
}

export default Todo;
