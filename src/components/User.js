import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.name,
      isUpdating: true,
      pokemonData: {
        name: "",
        image: ""
      }
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  componentDidMount() {
    this.loadPokemon();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokemonId !== this.props.pokemonId) {
      this.loadPokemon();
    }
  }

  loadPokemon() {
    this.setState({
      isUpdating: true
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
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
    return (
      <li className="user-container">
        <div className="user-block">
          <p className="name">{name}</p>
        </div>
        <div className="pokemon-block">
          <div className="data">
            <img
              src={
                !this.state.isUpdating
                  ? this.state.pokemonData.image
                  : "https://loading.io/spinners/comets/index.comet-spinner.svg"
              }
              alt="image"
              className="image"
            />
            <p className="name">
              {!this.state.isUpdating
                ? this.state.pokemonData.name
                : "Loading..."}
            </p>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => this.props.updateUser(this.props.id)}
            >
              Update
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default User;
