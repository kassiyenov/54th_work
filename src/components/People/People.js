import React from 'react';
import Person from "../../Person/Person";

let People = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changeName={event => props.changeName(event, person.id)}
          removePerson={() => props.removePerson(person.id)}
        >
          {person.hobbies}
        </Person>
      })}
    </div>
  );
};

export default People