import React, { Component } from "react";
import Field from "../containers/ContainerField";
import List from "../containers/UsersList";

class App extends Component {
  render() {
    return (
      <div className="application">
        <Field />
        <List />
      </div>
    );
  }
}

export default App;
