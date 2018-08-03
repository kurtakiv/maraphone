import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {Provider} from 'react-redux';
import {mainStore} from "./store";

class NewBody extends Component {
  render() {
    return (
      <Provider store={ mainStore }>
        <App/>
      </Provider>
    );
  }
}

ReactDOM.render(<NewBody/>, document.getElementById('newBodyBody'));

