import React, {Component} from 'react';
import './App.css';
import People from '../components/People/People';
import ToggleButton from "../components/ToggleButton/ToggleButton";
import Counter from "../components/Counter/Counter"

class App extends Component {

  state = {
    people: [
      {id: 'asd', name: 'Dmitrii', age: 29, hobbies: 'Hobby: Video Games'},
      {id: 'dfadfgzcx', name: 'John', age: 30, hobbies: 'Likes drinking alone'},
      {id: '3432', name: 'Jack', age: 69, hobbies: 'Collects post stamps'},
      {id: 'vcx', name: 'Haru-kun', age: 19, hobbies: 'Otaku desu!'}
    ]
  };

  findIndex = (array, condition) => {
    for (let i = 0; i < array.length; i++) {
      if ( condition(array[i]) ) {
        console.log(i);
        return i;
      }
    }
    return -1;
  };
  changeName = (event, id) => {
    // const index = this.state.people.findIndex(person => person.id === id);
    const index = this.findIndex(this.state.people, person => person.id === id);
    const person = {...this.state.people[index]};
    person.name = event.target.value;

    const people = [...this.state.people];
    people[index] = person;

    this.setState({people});
  };

  togglePeople = () => {
    const showPeople = !this.state.showPeople;
    this.setState({showPeople});
  };

  removePerson = (id) => {
    const index = this.findIndex(this.state.people, person => person.id === id);
    const people = [...this.state.people];
    people.splice(index, 1);

    this.setState({people});
  };

  render() {

    let people = null;
    if (this.state.showPeople) {
      people = <People
        people={this.state.people}
        changeName={this.changeName}
        removePerson={this.removePerson}
      />;
    }
    

    return (
      <div>
        <ToggleButton 
          showPeople={this.state.showPeople} 
          togglePeople={this.togglePeople} 
        />
        <Counter people={this.state.people} />

        {people}
      </div>
    );
  }
}

export default App;
