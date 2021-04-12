import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "REx", age: 25 },
      { name: "PP", age: 12 },
      { name: "UBCO", age: 22 },
      { name: "OLSA", age: 36 },
    ],
    otherState: "some value",
  });

  const switchNameHandler = (newName) => {
    // console.log('Ok');
    setPersonsState({
      persons: [
        { name: newName, age: 25 },
        { name: "PP", age: 12 },
        { name: "UBCO", age: 22 },
        { name: "OLSA", age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I´m a React App </h1>
      <p>What</p>
      <button onClick={() => switchNameHandler("txt")}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={() => switchNameHandler("WOW")}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler.bind(this, "new NAme")}
      >
        I like her
      </Person>
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
    </div>
  );
};

export default app;

// state = {
//   persons: [
//     {name: 'REx', age: 25},
//     {name: 'PP', age: 12},
//     {name: 'UBCO', age: 22},
//     {name: 'OLSA', age: 36}
//   ]
// }

// switchNameHandler = () => {
//   // console.log('Ok');
//   this.setState({
//     persons: [
//       {name: 'REx 11', age: 25},
//       {name: 'PP', age: 12},
//       {name: 'UBCO', age: 22},
//       {name: 'OLSA', age: 26}
//     ]
//   });
// };
