import React from 'react';
import ReactDOM from 'react-dom';
const uuidV4 = require('uuid/v4');

import TodoApp from './components/TodoApp';

if (module.hot) {
  module.hot.accept();
}

const STORE = {
  todos: [
    {
      id: uuidV4(),
      title: 'Task 1',
      isDone: true,
    },
    {
      id: uuidV4(),
      title: 'Task 2',
      isDone: true,
    },
    {
      id: uuidV4(),
      title: 'Task 3',
      isDone: false,
    },
    {
      id: uuidV4(),
      title: 'Task 4',
      isDone: false,
    },
    {
      id: uuidV4(),
      title: 'Task 5',
      isDone: false,
    },
  ],
};

ReactDOM.render(
  <TodoApp store={STORE} />,
  document.getElementById('root'),
);