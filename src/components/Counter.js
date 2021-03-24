import React from "react";

export default class Counter extends React.Component {
  // need to be class to use state
  constructor(props) {
    super(props);

    // doesn't have to be withen a constructor
    this.state = {
      count: 0,
    };
  }

  handleButtonClick = () => {
    // shorcut to bind the function
    console.log("Button pressed");
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>increment</button>
      </div>
    );
  }
}
