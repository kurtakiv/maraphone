import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginWindow from "./loginWindow/loginWindow.js"
import {Provider} from 'react-redux';
import {mainStore} from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={ mainStore }>
        <LoginWindow/>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('newBodyBody'));

