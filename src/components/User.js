import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.name,
      isUpdating: true,
      pokemonData: {}
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  componentDidMount() {
    // debugger
    this.loadPokemon();
  }

  loadPokemon() {
    this.setState({
      isUpdating: true
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
        console.log(value);
        debugger;
        this.setState({
          isUpdating: false,
          pokemonData: {
            name: value.name,
            image: value.sprites.front_default
          }
        });
      });
  }

  render() {
    const { name } = this.props;
    console.log(this.state, "state");
    console.log(this.props, "props");
    return (
      <li className="user">
        <div className="user-data">
          <p className="name">{name}</p>
        </div>
        <div className="pokemon-data">
          <img
            src={
              !this.state.isUpdating
                ? this.state.pokemonData.image
                : "https://loading.io/spinners/comets/index.comet-spinner.svg"
            }
            alt="image"
          />
          <p>
            {!this.state.isUpdating
              ? this.state.pokemonData.name
              : "Loading..."}
          </p>
          <button onClick={() => this.props.updateUser(this.props.id)}>
            Update
          </button>
        </div>
      </li>
    );
  }
}

export default User;
