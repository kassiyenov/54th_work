import React from 'react';

const Counter = props => {
  let counterStyle = {color: 'green'};

  if (props.people.length <= 2) {
    counterStyle.color = 'red';
  }

  if (props.people.length <= 1) {
    counterStyle.fontWeight = 'bold';
  }

  return ( 
    <p style={counterStyle}>
      Total people: {props.people.length}
    </p>
  )
};

export default Counter;
