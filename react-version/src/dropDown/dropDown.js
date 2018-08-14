import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min"
const DropDown = (props) => {
  return (
    <div className="dropdown  col-md-6 col-xs-6">
      <button className="btn btn-info btn-default btn-lg dropdown-toggle" type="button" id="dropdownSex"
              data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
        Стать
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownSex">
        {props.items.map((item, index) => {
          return (<li key={ index }><a href="#" onClick={() => props.onSelect(item.value)}>{item.title}</a></li>)
        })}
      </ul>
    </div>
  )
};
export default DropDown;

