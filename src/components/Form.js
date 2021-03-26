import React from "react";

export default class Form extends React.Component {
  state = {
    name: "Name",
    rememberMe: false,
    title: "Miss.",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeChecked = (event) => {
    this.setState({
      rememberMe: event.target.checked,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>Forms</div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.name} onChange={this.handleChange} />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChangeChecked}
        />
        <select value={this.state.title} onChange={this.handleSelectChange}>
          <option>Ms.</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
