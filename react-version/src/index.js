import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {Provider} from 'react-redux';
import {mainStore} from "./store";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min";

class NewBody extends Component {
  render() {
    return (
      <Provider store={ mainStore }>
       <div className={"content"}>
        <App/>
       </div>
      </Provider>
    );
  }
}

ReactDOM.render(<NewBody/>, document.getElementById('newBodyBody'));

