import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I´m {props.name} Person {Math.floor(Math.random() * 30)} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
