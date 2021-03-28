import React from "react";

export default class BetterForm extends React.Component {
  state = {
    name: "Name",
    favoritePet: "favoritePet",
    rememberMe: false,
    title: "Miss.",
  };

  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefualt();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Forms</div>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          name="favoritePet"
          value={this.state.favoritePet}
          onChange={this.handleChange}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <select
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        >
          <option>Ms.</option>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
        <button type="submit">submit</button>
      </form>
    );
  }
}
