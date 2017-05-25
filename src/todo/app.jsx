import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';

if (module.hot) {
  module.hot.accept();
}

const STORE = {
  todos: [
    {
      id: 1,
      title: 'Task 1',
      isDone: true,
    },
    {
      id: 2,
      title: 'Task 2',
      isDone: true,
    },
    {
      id: 3,
      title: 'Task 3',
      isDone: false,
    },
    {
      id: 4,
      title: 'Task 4',
      isDone: false,
    },
    {
      id: 5,
      title: 'Task 5',
      isDone: false,
    },
  ],
};

ReactDOM.render(
  <TodoApp store={STORE} />,
  document.getElementById('root'),
);
