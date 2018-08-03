import React, {Component} from 'react';
import LoginWindow from './loginWindow/loginWindow'
import {connect} from 'react-redux';
class App extends Component {
  getComponent() {
    return (
      <div  className="panel panel-default col-md-12 content-child calculation-panel">
        <h1 className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
          <a className="header-link" href="http://nove-tilo.com/"> НОВЕ ТІЛО</a>
          <a href="https://instagram.com/nove.tilo">@nove.tilo</a>
        </h1>

        <div className="col-md-offset-3 col-md-6 col-xs-12">
          <div className="dropdown  col-md-6 col-xs-6">
            <button className="btn btn-info btn-default btn-lg dropdown-toggle" type="button" id="dropdownSex"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
              Стать
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownSex">
              {/*  selectSex({ title: 'Чоловік', value: 'man' })*/}
              <li><a href="#">Чоловік</a></li>
              <li><a href="#">Жінка</a></li>
            </ul>
          </div>
          <div className="dropdown  col-md-6 col-xs-6">
            <button className="btn btn-info btn-default btn-lg dropdown-toggle" type="button" id="dropdownAction"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
              Ціль
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownAction">
              <li>
     {/*      selectAction({ title: 'Набір маси', value: 'upWeight' })*/}
                <a href="#">
                  Набір маси
                </a>
              </li>
              <li>
             {/* selectAction({title: 'Cхуднення', value: 'downWeight'})*/}
                <a href="#">
                  Cхуднення
                </a>
              </li>
              <li>
           {/*selectAction({ title: 'Підтримка', value: 'saveWeight' })*/}
                <a href="#" >
                  Підтримка
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-offset-3 col-md-6 col-xs-12 form-group input-area">
          {/*changeData(event, 'weight', this.value)*/}
          <input className="col-md-12 col-xs-12" type="number"
                 onKeyUp="handleKey(event, 1)" id="input1" tabIndex="1"
                 className="form-control"
                 placeholder="Маса тіла (кг)"/>
          {/*"changeData(event, 'height', this.value)*/}
            <input className="col-md-12 col-xs-12" type="number"
                   onKeyUp="handleKey(event, 2)" id="input2" tabIndex="2"
                   className="form-control"
                   placeholder="Зріст (см)"/>
          {/*changeData(event, 'age', this.value)*/}
              <input className="col-md-12 col-xs-12"  type="number"
                     onKeyUp="handleKey(event, 3)" id="input3" tabIndex="3"
                     className="form-control"
                     placeholder="Вік (роки)"/>
          {/*onChange="changeData(event, 'wrist', this.value)"*/}
                <input className="col-md-12 col-xs-12"  type="number"
                       onKeyUp="handleKey(event, 4)" id="input4" tabIndex="4"
                       className="form-control"
                       placeholder="Зап'ястя (см)"/>
        </div>
        <label id="error-message"
               className=" col-md-offset-3  col-md-6 col-xs-12 hide-label error-label label label-warning">Заповніть всі
          поля</label>
        <label id="error-message2"
               className=" col-md-offset-3  col-md-6 col-xs-12 hide-label error-label label label-danger">Не вдалось
          обчислити</label>
        {/*onClick="submit()"*/}
        <button
          className=" col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 btn btn-info btn-default btn-lg dropdown-toggle"
          type="button" id="buttonSubmit"
          data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="true"
        >
          Обчислити
        </button>

        <div className="table-panel col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 panel panel-default">
          <div className="panel-heading">Результати обчислень</div>
          <table className="table hide-table" id="table">
            <tr>
              <td className="label-td col-md-6 col-xs-6">Величина основного обміну =</td>
              <td className="col-md-6 col-xs-6" id="vvotd"></td>
            </tr>
            <tr>
              <td className="label-td col-md-6 col-xs-6">Добова норма калорій =</td>
              <td className="col-md-6 col-xs-6" id="oetd"></td>
            </tr>
            <tr>
              <td className="label-td col-md-6 col-xs-6">Добова норма білків =</td>
              <td className="col-md-6 col-xs-6" id="snbtd"></td>
            </tr>
            <tr>
              <td className="label-td col-md-6 col-xs-6">Добова норма жирів =</td>
              <td className="col-md-6 col-xs-6" id="sngtd"></td>
            </tr>
            <tr>
              <td className="label-td col-md-6 col-xs-6">Загальна добова норма вуглеводів =</td>
              <td className="col-md-6 col-xs-6" id="snutd"></td>
            </tr>
            <tr>
              <td className="label-td col-md-6 col-xs-6">Добова норма складних вуглеводів =</td>
              <td className="col-md-6 col-xs-6" id="snsutd"></td>
            </tr>
          </table>
        </div>
      </div>
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
