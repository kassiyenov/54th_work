import React from 'react';

let Person = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <span>{props.age}</span>
    <p><input
      type="text"
      value={props.name}
      onChange={props.changeName}
    /></p>
    </div>
  );
};

export default Person