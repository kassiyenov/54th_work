import './Person.css'
import React from 'react';

let Person = (props) => {
  return (
    <div className="person">
    <h1>{props.name}</h1>
    <span>{props.age}</span>
    <p><input
      type="text"
      value={props.name}
      onChange={props.changeName}
    /></p>
      <p onClick={props.removePerson}>{props.children}</p>
    </div>
  );
};

export default Person