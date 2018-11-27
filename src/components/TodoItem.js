import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TodoItem = ({ todo }) => (
  <ListItem>
    <ListItemText primary={todo.text} />
  </ListItem>
);

export default TodoItem;
