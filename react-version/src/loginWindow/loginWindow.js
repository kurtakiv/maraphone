import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const LoginWindow = () => {
  return (
    <div id="login-form" className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
          <button className="col-md-12 col-xs-12 btn btn-info btn-default btn-lg"
                  style={{marginTop: '30px'}}
                  type="button" id="buttonLogin"
                  aria-haspopup="true" aria-expanded="true"
            >
            Увійти
          </button>
          <label id="error-message3"
                 className="col-md-12 col-xs-12 hide-label error-label label label-danger">Не вірний пароль
          </label>
      </div>
    </div>
);
};

export default LoginWindow;
