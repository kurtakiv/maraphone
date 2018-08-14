import React from 'react';

const Label = (props) => {
   return (
     <label   className={"col-md-offset-3  col-md-6 col-xs-12 hide-label error-label label " + props.type}>
       {props.text}
     </label>
   );
};

const LABEL_TYPES = {
  ERROR: "label-danger",
  WARNING: "label-warning"
};
export  {
  LABEL_TYPES
}
export default Label;
