import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles/index.scss';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <div className="container">
    <App store={MOCKED_STORE}/>
  </div>,
  document.getElementById('root'),
);
