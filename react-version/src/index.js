import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginWindow from "./loginWindow/loginWindow.js"
class App extends Component {
  render() {
    return (
      <LoginWindow/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('newBodyBody'));

