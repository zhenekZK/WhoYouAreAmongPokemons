import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.name,
      isUpdating: false,
      pokemonData: {}
    };
  }

  componentDidMount() {
    let self = this;
    // debugger

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
        console.log(value);

        self.setState({
          pokemonData: {
            name: value.name,
            image: value.sprites.front_default
            // color: value.color.name
          }
        });
      });
  }

  render() {
    const { name, pokemonId } = this.props;
    console.log(this.state, "state");
    return (
      <li className="user">
        <p>{name}</p>
        <p>{pokemonId}</p>
        <p>
          {this.state.pokemonData.name
            ? this.state.pokemonData.name
            : "Loading..."}
        </p>
        <img src={this.state.pokemonData.image} alt="image" />
      </li>
    );
  }
}

export default User;
