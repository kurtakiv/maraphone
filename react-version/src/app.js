import React, {Component} from 'react';
import LoginWindow from './loginWindow/loginWindow'
import {connect} from 'react-redux';
import DropDown from "../src/dropDown/dropDown";
import Input from "./input/input";
import Label, {LABEL_TYPES} from "./label/label";
import axios from 'axios';
import {apiUrl} from "./constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: null,
      action: null,
      results: []
    };

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

    this.resultMap = {
      oe: {
        title: "Добова норма калорій", points: "кКал"
      },
      vvo: {
        title: "Величина основного обміну", points: "кКал"
      },
      snb: {
        title: "Добова норма білків", points: "г"
      },
      sng: {
        title: "Добова норма жирів", points: "г"
      },
      snu: {
        title: "Загальна добова норма вуглеводів", points: "г"
      },
      snsu: {
        title: "Добова норма складних вуглеводів", points: "г"
      },
    }
  }

  onSelectSex(sex) {
    this.setState({sex});
  }

  onSelectAction(action) {
    this.setState({action})
  }

  submit() {
    axios({
      method: 'post',
      url: apiUrl,
      contentType: "application/x-www-form-urlencoded",
      data: JSON.stringify({
        pass: "900800700",//this.props.isAuthorized,
        sex: this.state.sex,
        action: this.state.action,
        height: this.state.height,
        weight: this.state.weight,
        age: this.state.age,
        wrist: this.state.wrist,
      })
    }).then((result) => {
      if (result.data && result.data.result) {
        //this.setState(result);
        let resultArr = [];
        for (let key in result.data.result) {
          resultArr.push({
            title: this.resultMap[key].title,
            points: this.resultMap[key].points,
            value: result.data.result[key]
          })
        }
        console.log(resultArr);
        this.setState({results: resultArr});
      }
    }).catch((error) => {

      console.log(error);
    });
  }

  getComponent() {
    return (
      <div className="panel panel-default col-md-12 content-child calculation-panel">
        <h1 className="col-md-offset-3 col-md-6  col-md-offset-3 col-xs-12">
          <a className="header-link" href="http://nove-tilo.com/"> НОВЕ ТІЛО</a>
          <a href="https://instagram.com/nove.tilo">@nove.tilo</a>
        </h1>

        <div className="col-md-offset-3 col-md-6 col-xs-12">
          <DropDown title={ this.state.sex || this.sexDropDown.title }
                    items={ this.sexDropDown.items }
                    onSelect={ (sex) => this.onSelectSex(sex) }
          />
          <DropDown
            title={ this.state.action || this.actionDropDown.title }
            items={ this.actionDropDown.items }
            onSelect={ (action) => this.onSelectAction(action) }
          />
        </div>
        <div className="col-md-offset-3 col-md-6 col-xs-12 form-group input-area">
          { this.inputs.map((inputConfig, index) => {
            return (<Input config={ inputConfig } key={ index }/>)
          }) }
        </div>
        <Label type={ LABEL_TYPES.WARNING } text={ "Заповніть всі поля" }/>
        <Label type={ LABEL_TYPES.ERROR } text={ "Не вдалось обчислити" }/>

        <button
          className="col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 btn btn-info btn-default btn-lg dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={ () => this.submit() }
        >
          Обчислити
        </button>

        <div className="table-panel col-md-offset-3 col-md-6 col-md-offset-3 col-xs-12 panel panel-default">
          <div className="panel-heading">Результати обчислень</div>
          <table className="table hide-table" id="table">
            <tbody>
            { this.state.results.map((item, index) => {
              return (
                <tr key={ index }>
                  <td className="label-td col-md-6 col-xs-6">{ item.title + " =" }</td>
                  <td className="col-md-6 col-xs-6">{ `${item.value} ${item.points}`}</td>
                </tr>
              )
            }) }
            </tbody>
          </table>
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
