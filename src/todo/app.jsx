import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

const uuidV4 = require('uuid/v4');

if (module.hot) {
  module.hot.accept();
}

const STORE = {
  filterView: 'all',
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
