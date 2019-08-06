import React, { Component } from "react";
import User from "./User";

const UsersList = props => {
  console.log(props);

  return (
    <div>
      {props.users
        ? props.users.map(user => {
            return (
              <User key={user.id} name={user.name} pokemonId={user.pokemonId} />
            );
          })
        : ""}
    </div>
  );
};

export default UsersList;
