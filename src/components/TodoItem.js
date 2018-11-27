import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const applyTargetValue = fn => e => fn(e.target.value);

const TodoItem = ({ todo }) => (
  <ListItem>
    <TextField
      value={todo.text}
      onChange={applyTargetValue(todo.setText)}
    />
  </ListItem>
);

export default observer(TodoItem);
