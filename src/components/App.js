import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';

const App = ({ store }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
        >
          Todo
        </Typography>
        <Button onClick={store.addTodo}>
          Add Todo
        </Button>
      </Toolbar>
    </AppBar>
    <TodoList todos={store.todos}/>
  </div>
);

export default App;
