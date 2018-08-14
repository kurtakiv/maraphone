import React, {Component} from 'react';
import LoginWindow from './loginWindow/loginWindow'
import {connect} from 'react-redux';
import DropDown from "../src/dropDown/dropDown";
import Input from "./input/input";

class App extends Component {
  constructor(props) {
    super(props);

    this.sexDropDown = {
      title: "Стать",
      items: [
        {title: "Чоловік", value: "man"},
        {title: "Жінка", value: "woman"}
      ]
    };

    this.actionDropDown = {
      title: "Ціль",
      items: [
        {title: "Набір маси", value: "upWeight"},
        {title: "Схуднення", value: "downWeight"},
        {title: "Підтримка", value: "saveWeight"}
      ]
    };

    this.inputs = [
      {
        placeholder: "Маса тіла (кг)",
        onChange: (event) => {
          this.setState({weight: event.target.value})
        }
      },
      {
        placeholder: "Зріст (см)",
        onChange: (event) => {
          this.setState({height: event.target.value})
        }
      }, {
        placeholder: "Вік (роки)",
        onChange: (event) => {
          this.setState({age: event.target.value})
        }
      }, {
        placeholder: "Зап'ястя (см)",
        onChange: (event) => {
          this.setState({wrist: event.target.value})
        }
      },
    ];
  }

  onSelectSex(sex) {
    this.setState({sex});
    console.log(sex);
  }

  onSelectAction(action) {
    this.setState({action})
  }

  getComponent() {
    return (
      <div className="panel panel-default col-md-12 content-child calculation-panel">
        <h1 className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
          <a className="header-link" href="http://nove-tilo.com/"> НОВЕ ТІЛО</a>
          <a href="https://instagram.com/nove.tilo">@nove.tilo</a>
        </h1>

        <div className="col-md-offset-3 col-md-6 col-xs-12">
          <DropDown title={ this.sexDropDown.title }
                    items={ this.sexDropDown.items }
                    onSelect={ (sex) => this.onSelectSex(sex) }
          />
          <DropDown
            title={ this.actionDropDown.title }
            items={ this.actionDropDown.items }
            onSelect={ (action) => this.onSelectAction(action) }
          />
        </div>
        <div className="col-md-offset-3 col-md-6 col-xs-12 form-group input-area">
          { this.inputs.map((inputConfig, index) => {
            return (<Input config={ inputConfig } key={ index }/>)
          }) }
        </div>

        <label id="error-message"
               className=" col-md-offset-3  col-md-6 col-xs-12 hide-label error-label label label-warning">Заповніть всі
          поля</label>
        <label id="error-message2"
               className=" col-md-offset-3  col-md-6 col-xs-12 hide-label error-label label label-danger">Не вдалось
          обчислити</label>
        { /*onClick="submit()"*/ }

        <button
          className="col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 btn btn-info btn-default btn-lg dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Обчислити
        </button>

        <div className="table-panel col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 panel panel-default">
          <div className="panel-heading">Результати обчислень</div>
          { /*<table className="table hide-table" id="table">
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
          </table>*/ }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        { !this.props.isAuthorized ? <LoginWindow/> : this.getComponent() }
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
