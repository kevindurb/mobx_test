import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Store from './store';

const store = new Store();

render(
  <App store={store} />,
  document.getElementById('root'),
);
