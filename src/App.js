import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SeperateFileComponent from "./components/SeperateFileComponent";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

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

const PTagForEachArrayElements = (props) => (
  <div>
    <p>Iterating over array</p>
    {/*map instead of forEach*/}
    {props.arr.map((el) => (
      <p>Array has element {el}</p>
    ))}
  </div>
);

const ReactHeader = () => (
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
);

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <body>
          {/*this will stick around*/}
          <div
            style={
              this.state.visible
                ? {}
                : {
                    display: "none",
                  }
            }
          >
            {" "}
            <ImageSlider />
          </div>
          {/*this will stick around using css classes*/}
          <div className={this.state.visible ? "visible" : "hidden"}>
            <ImageSlider />
          </div>
          {/*this will mount and unmount*/}
          {this.state.visible ? <ImageSlider /> : null}
          <button
            onClick={() => {
              this.setState({
                visible: !this.state.visible,
              });
            }}
          >
            {this.state.visible ? "Hide" : "Show"}
          </button>
        </body>
      </div>
    );
  }
}

export default App;
