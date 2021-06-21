import React from 'react';
import './ToggleButton.css'; 

const ToggleButton = props => { 
  let buttonClasses = ['ToggleButton'];

  if (props.showPeople) {
    buttonClasses.push('ToggleButton-red');
  }
  let styles = {
    marginTop: '20px'
  }

  return (
    <div style={styles}>
      <button className={buttonClasses.join(' ')} onClick={props.togglePeople}>Toggle people</button>
    </div>
    );
};

export default ToggleButton;

