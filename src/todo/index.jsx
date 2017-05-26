import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';
import './styles/index.scss';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <div className="container">
    <TodoApp />
  </div>,
  document.getElementById('root'),
);
