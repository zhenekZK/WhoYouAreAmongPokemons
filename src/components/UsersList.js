import React from "react";
import User from "./User";

const UsersList = props => {
  return (
    <ul className="user-list">
      {props.users
        ? props.users.map(user => {
            return (
              <User
                key={user.id}
                name={user.name}
                id={user.id}
                pokemonId={user.pokemonId}
                image={user.image}
                pokemonName={user.pokemonName}
                isLoading={user.isLoading}
                updateUser={props.updateUser}
                deleteUser={props.deleteUser}
              />
            );
          })
        : ""}
    </ul>
  );
};

export default UsersList;
