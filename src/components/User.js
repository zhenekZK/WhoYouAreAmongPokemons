import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdating: false,
      pokemonData: {}
    };
  }

  componentDidMount() {
    let self = this;
    // debugger

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.pokemonId}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
        console.log(value);

        self.setState(state => {
          let data = state.pokemonData;
          data.name = value.name;
          data.color = value.color.name;

          return state;
        });
      });
  }

  render() {
    const { name, pokemonId } = this.props;
    console.log(this.state, "state");
    return (
      <div>
        <p>{name}</p>
        <p>{pokemonId}</p>
        <p>
          {this.state.pokemonData.name
            ? this.state.pokemonData.name
            : "Loading..."}
        </p>
      </div>
    );
  }
}

export default User;
