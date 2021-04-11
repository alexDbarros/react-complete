import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'REx', age: 25},
      {name: 'PP', age: 12},
      {name: 'UBCO', age: 22},
      {name: 'OLSA', age: 36}
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I´m a React App </h1>
        <p>What</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like her</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello word!!'));
  }
  
}

export default App;
