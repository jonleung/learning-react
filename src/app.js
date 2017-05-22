if (module.hot) {
  module.hot.accept()
}

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'

ReactDOM.render(<App />, document.getElementById('root'));