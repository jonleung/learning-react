if (module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'

function TodoForm(props) {
  return(
    <div>
      <input
        type = "text"
        onKeyPress = {
          (e) => {
            if(e.key == 'Enter') {
              alert("Enter Pressed")
            }
          }
        }
      />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <TodoForm/>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);