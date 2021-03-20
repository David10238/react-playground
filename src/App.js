import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

const FunctionComponent = () => (
  <div>
    <p>this is a component from a function</p>
    <p>this is part of the same function component</p>
  </div>
);

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <p>This is part of a component from a class.</p>
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
        <ClassComponent />
        <FunctionComponent />
      </body>
    </div>
  );
}

export default App;
