import React, {Component} from 'react';
import LoginWindow from './loginWindow/loginWindow'
import {connect} from 'react-redux';
class App extends Component {
  getComponent() {
    return (
      <div>Hellow</div>
    )
  }

  render() {
    return (
      <div>
        {!this.props.isAuthorized ? <LoginWindow/> : this.getComponent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    passwordValue: state.value.passwordValue,
    isAuthorized: state.value.isAuthorized
  }
};

export default connect(mapStateToProps, null)(App);
