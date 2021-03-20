import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

const FunctionComponent = (props) => (
  <div>
    <p>Hello from the function {props.name}</p>
    <p>this is a component from a function</p>
    <p>this is part of the same function component</p>
  </div>
);

const drinkingAge = (age) => {
  if (age < 21) return "is two young to drink";
  return "is old enough to drink";
};

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <p>This is part of a component from a class.</p>
        <p>Hello from the class {this.props.name}</p>
        <p>
          {this.props.name} {drinkingAge(this.props.age)}
        </p>
        <p>This is part of the same class component</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <ClassComponent name="Freddy" age={12} />{" "}
        {/* non strings need to be sorrunded by */}
        <FunctionComponent name="John" />
      </body>
    </div>
  );
}

export default App;
