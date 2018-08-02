import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import {apiUrl} from "../constants";
import {connect} from 'react-redux'


class LoginWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
    };
    console.log(this.state);
  }

  clickOnLogin = (d) => {
    axios({
      method: 'post',
      url: apiUrl,
      contentType: "application/x-www-form-urlencoded",
      data: JSON.stringify({
        pass: this.state.passwordValue,
        authRequest: true
      })
    }).then((result) => {
      result = JSON.parse(result);
      if (result.errorMessage) {
        this.setErrorMessageState(true);
      } else {
        alert('aaa');
      }
    }).catch((error) => {
      this.setErrorMessageState(true);
      console.log(error);
    });
  };

  getErrorMessage() {
    if (!this.state.showError) return "";
    return (<label className="col-md-12 col-xs-12 hide-label error-label label label-danger">Не вірний пароль
    </label>);
  }

  setErrorMessageState(value) {

    this.setState({showError: value});
  }


  updatePasswordValue(event) {
    this.setState({passwordValue: event.target.value})
  }


  render() {
    return (
      <div className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" value={ this.state.passwordValue }
                 onChange={ (event) => this.updatePasswordValue(event) } className="form-control"
                 placeholder="Password"/>
          <button className="col-md-12 col-xs-12 btn btn-info btn-default btn-lg"
                  style={ {marginTop: '30px'} }
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={ this.clickOnLogin }
          >
            Увійти
          </button>
          { this.getErrorMessage() }
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    passwordValue: state.passwordValue
  }
};

export default connect(mapStateToProps, null)(LoginWindow);
