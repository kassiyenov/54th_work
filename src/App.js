import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
      people: [
        {name: 'Dmitrii', age: 29, hobbies: 'Hobby: Video Games'},
        {name: 'John', age: 30, hobbies: 'Likes drinking alone'}
      ]
  };

  changeName = (event) => {
    const person = {...this.state.people[1]};
    person.name = event.target.value;

    const people = [...this.state.people];
    people[1] = person;

    this.setState({people});
  };

  render() {
    return (
      <Person
        name={this.state.people[1].name}
        age={this.state.people[1].age}
        changeName={this.changeName}
      />
    );
  }
}

export default App;
