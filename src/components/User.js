import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    // this.props.updateUser(this.props.id);
    this.props.updateUser(this.props.id);
  }

  render() {
    const {
      name,
      id,
      image,
      pokemonName,
      updateUser,
      deleteUser,
      isLoading
    } = this.props;
    return (
      <li className="user-container">
        <div className="user-block">
          <p className="name">{name}</p>
        </div>
        <div className="pokemon-block">
          <div className="data">
            <img
              src={
                !isLoading
                  ? image
                  : "https://loading.io/spinners/comets/index.comet-spinner.svg"
              }
              alt="image"
              className="image"
            />
            <p className="name">{!isLoading ? pokemonName : "Loading..."}</p>
          </div>
          <div className="actions">
            <button className="button update" onClick={() => updateUser(id)}>
              Update
            </button>
            <button className="button delete" onClick={() => deleteUser(id)}>
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default User;
