import React from "react";

export default class FetchingAPIData extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=2";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    const prefferedTaggingMethod = this.state.people.map((person) => (
      <div key={person.login.uuid}>
        <div>person...</div>
        <div>FirstName: {person.name.first}</div>
        <div>LastName: {person.name.last}</div>
        <img src={person.picture.large} />
      </div>
    ));

    const otherPossibleTaggingMethod = this.state.people.map((person, id) => (
      <div key={`unique-person-key-${id}`}>
        <div>person...</div>
        <div>FirstName: {person.name.first}</div>
        <div>LastName: {person.name.last}</div>
        <img src={person.picture.large} />
      </div>
    ));

    return (
      <div>
        {prefferedTaggingMethod}
        {otherPossibleTaggingMethod}
      </div>
    );
  }
}
