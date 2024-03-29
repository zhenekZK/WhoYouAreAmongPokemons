import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);

    let input;
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    let inputValue = this.input.value;

    if (inputValue) {
      this.props.addUser(inputValue);
      this.input.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          className="input-field"
          type="text"
          ref={node => (this.input = node)}
          placeholder="Enter your name"
          autoFocus
        />
      </form>
    );
  }
}

export default InputField;
