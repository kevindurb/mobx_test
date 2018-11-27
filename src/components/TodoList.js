import React from 'react';
import { observer } from 'mobx-react';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <List>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </List>
);

export default observer(TodoList);
