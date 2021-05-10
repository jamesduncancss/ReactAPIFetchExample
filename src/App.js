import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ names: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.names.map((name) => (
          <p key={name.id}>{name.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
