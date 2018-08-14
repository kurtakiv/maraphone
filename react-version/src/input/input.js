import React from 'react';


const Input = (props) => {
  return (
    <input className="col-md-12 col-xs-12"
           type="number"
           tabIndex="1"
           className="form-control"
           onChange={props.config.onChange}
           placeholder={props.config.placeholder}/>
  )
};

export default Input;
