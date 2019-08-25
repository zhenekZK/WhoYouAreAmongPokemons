import React, { Component } from "react";
import Title from "../components/Title";
import Field from "../containers/ContainerField";
import List from "../containers/UsersList";

class App extends Component {
  render() {
    return (
      <div className="application">
        <Title />
        <Field />
        <List />
      </div>
    );
  }
}

export default App;
