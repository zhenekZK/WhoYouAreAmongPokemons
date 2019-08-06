import React, { Component } from "react";
import User from "./User";

const UsersList = props => {
  console.log(props);

  return (
    <ul className="user-list">
      {props.users
        ? props.users.map(user => {
            return (
              <User key={user.id} name={user.name} pokemonId={user.pokemonId} />
            );
          })
        : ""}
    </ul>
  );
};

export default UsersList;
