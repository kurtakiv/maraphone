import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class DropDown extends Component {
  state = {
    selectedItem: {
      title: null,
      value: null
    }
  };

  onSelect(item) {
    this.setState({selectedItem: item});
    this.props.onSelect(item.value);
  }

  render() {
    return (
      <div className="dropdown  col-md-6 col-xs-6">
        <button className="btn btn-info btn-default btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">
          { this.state.selectedItem.title || this.props.title }
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownSex">
          { this.props.items.map((item, index) => {
            return (<li key={ index }><a href="#" onClick={ () => this.onSelect(item) }>{ item.title }</a></li>)
          }) }
        </ul>
      </div>
    )
  }
};
export default DropDown;

