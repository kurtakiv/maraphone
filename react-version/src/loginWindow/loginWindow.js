import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class LoginWindow extends Component {
  state = {showError: false};
  clickOnLogin = (d) => {

    this.setState({showError: !this.state.showError});
    console.log(this.state);
  };

  getErrorMessage() {
    if (!this.state.showError) return "";
    return (<label className="col-md-12 col-xs-12 hide-label error-label label label-danger">Не вірний пароль
    </label>);
  }


render() {
  return (
    <div className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
        <button className="col-md-12 col-xs-12 btn btn-info btn-default btn-lg"
                style={ {marginTop: '30px'} }
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={ this.clickOnLogin }
        >
          Увійти
        </button>
        {this.getErrorMessage()}
      </div>
    </div>

  );
}
}

export default LoginWindow;
